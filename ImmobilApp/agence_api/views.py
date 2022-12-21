from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework import viewsets
from rest_framework import generics
from .serializers import AnnonceSerializer
from .models import Annonce

from rest_framework import permissions

from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView


def index(request):
    return HttpResponse('hello world')

class AnnonceView(viewsets.ModelViewSet):
    serializer_class = AnnonceSerializer
    queryset = Annonce.objects.all()


@api_view(['GET', 'PUT'])
def annonce_list(request, format=None):
    annonces = Annonce.objects.all()
    serializedAnnonces = AnnonceSerializer(annonces, many=True)
    return Response(serializedAnnonces.data)


@api_view(['GET', 'PUT', 'DELETE'])
def annonce_detail(request, pk):
    
    try:
        ann = Annonce.objects.get(pk=pk)
    except Annonce.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AnnonceSerializer(ann)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = AnnonceSerializer(ann, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        ann.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class OwnerAnnonceList(generics.ListAPIView):

    permission_classes = [permissions.IsAuthenticated]

    queryset = Annonce.objects.all()
    serializer_class = AnnonceSerializer


class GoogleLogin(SocialLoginView): # if you want to use Authorization Code Grant, use this
    adapter_class = GoogleOAuth2Adapter
    callback_url = 'index'
    client_class = OAuth2Client

# class GoogleLogin(SocialLoginView): # if you want to use Implicit Grant, use this
#     adapter_class = GoogleOAuth2Adapter