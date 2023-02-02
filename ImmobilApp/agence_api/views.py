from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework import generics
from .serializers import AnnonceSerializer, FavoriSerializer, OffreSerializer,ImageSerializer
from .models import Annonce, Favoris, Offre, ImmobilUser
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404

from rest_framework import permissions
from rest_framework import filters

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView

from django.core.exceptions import ObjectDoesNotExist

from django_filters import rest_framework as dj_filters

from .filters import AnnonceFilter

import folium
import geocoder
from .MarkableMap import MarkerLayer

def index(request):
    return HttpResponse('hello world')

class AnnonceList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = AnnonceSerializer
    queryset = Annonce.objects.all()
    ordering = ['insertDate']
    ordering_fields = ['insertDate']
    filter_backends=(dj_filters.DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter) # not needed when defined in settings
    filterset_class = AnnonceFilter

class OwnerAnnonceList(generics.ListAPIView):
    permission_classes = [permissions.IsAuthenticated,]
    serializer_class = AnnonceSerializer

    def get_queryset(self):
        return Annonce.objects.filter(annonceur=self.request.user)

class AnnonceDetails(generics.RetrieveAPIView):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=AnnonceSerializer
    queryset = Annonce.objects.all()

class AnnonceRemove(generics.DestroyAPIView):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=AnnonceSerializer
    queryset = Annonce.objects.all()
    
class DeposerAnnonce(generics.CreateAPIView):
    serializer_class=AnnonceSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save(annonceur=self.request.user)


class AjouterImage(generics.CreateAPIView):
    serializer_class= ImageSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()

class ListMarkedAnnonce(generics.ListAPIView):
    
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=FavoriSerializer
    
    def get_queryset(self):
        return Favoris.objects.filter(user=self.request.user)

class MarkAnnonce(generics.CreateAPIView):
    
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=FavoriSerializer

    def create(self, request, *args, **kwargs):
        data = {"user" : self.request.user.id, "annonce" : self.kwargs['annonce_pk']}
        try:
            obj = Favoris.objects.get(annonce=Annonce.objects.get(pk=data['annonce']), user=data['user'])
            return Response({"message" : "Annonce already exists.\n"}, status=status.HTTP_409_CONFLICT)
        except ObjectDoesNotExist:
            serializer = self.get_serializer(data=data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()

class UnmarkAnnonce(generics.DestroyAPIView):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=FavoriSerializer
    
    def get_queryset(self):
        return self.request.user.favoris_set.all()
    def destroy(self, request, *args, **kwargs):
        instance = get_object_or_404(self.get_queryset(), annonce=self.kwargs['annonce_pk'])
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
    


class ListOffers(generics.ListAPIView):
    permission_classes=[permissions.IsAuthenticated]
    serializer_class=OffreSerializer
    queryset=Offre.objects

class MakeOffer(generics.CreateAPIView):
    serializer_class=OffreSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save(client=self.request.user, annonceur = serializer.validated_data['annonce'].annonceur)

class GoogleLogin(SocialLoginView): # if you want to use Authorization Code Grant, use this
    adapter_class = GoogleOAuth2Adapter
    callback_url = 'index'
    client_class = OAuth2Client

#for the announcer to conform or change the location on the map
class MarkableMap(APIView):
    def get(self, request, *args, **kwargs):
        adress = kwargs.get('adress')
        city = kwargs.get('city')
        wilaya = kwargs.get('wilaya')
        loc = geocoder.osm(adress+', '+city+', '+wilaya+', '+'algerie')
        if loc.osm == None:
            loc = geocoder.osm(wilaya)
        cords= [loc.lat,loc.lng]
        map = folium.Map(location=cords,zoom_start=16)
        mark = folium.Marker(location= cords, 
                icon=folium.Icon(color='green', icon='home')).add_to(map)
        map.add_child(MarkerLayer(old = mark))
        return( JsonResponse({'map_html': map._repr_html_()}, safe= True))
        #return HttpResponse(map._repr_html_())

#for displaying the map on the ad page
class StaticMap(APIView):
    def get(self, request, *args, **kwargs):
        cords = [kwargs.get('lat'),kwargs.get('lng')]
        map = folium.Map(location=cords,zoom_start=16)
        mark = folium.Marker(location= cords, 
                icon=folium.Icon(color='green', icon='home')).add_to(map)
        return( JsonResponse({'map_html': map._repr_html_()}, safe= True))
        #return HttpResponse(map._repr_html_())



# class GoogleLogin(SocialLoginView): # if you want to use Implicit Grant, use this
#     adapter_class = GoogleOAuth2Adapter


# get_queryset for query params and url format

#  def get_queryset(self):
#         """
#         Optionally restricts the returned purchases to a given user,
#         by filtering against a `username` query parameter in the URL.
#         """
#         queryset = Purchase.objects.all()
#         username = self.request.query_params.get('username')
#         if username is not None:
#             queryset = queryset.filter(purchaser__username=username)
#         return queryset

# def get_queryset(self):
#         """
#         This view should return a list of all the purchases for
#         the user as determined by the username portion of the URL.
#         """
#         username = self.kwargs['username']
#         return Purchase.objects.filter(purchaser__username=username)