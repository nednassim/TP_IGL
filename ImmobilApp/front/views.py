from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializers import annonceSerializer
from .models import annonce
# Create your views here.

def index(request):
    return render(request, 'front/index.html', context={'hello': 'hello'})
    return HttpResponse('hello')

class annonceView(viewsets.ModelViewSet):
    serializer_class = annonceSerializer
    queryset = annonce.objects.all()
