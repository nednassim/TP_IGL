from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Annonce, Favoris

class AnnonceSerializer(serializers.ModelSerializer):

    class Meta:

        model = Annonce
        fields = ('__all__')

class userSerializer(serializers.ModelSerializer):
    annonces = serializers.PrimaryKeyRelatedField(many=True, queryset=Annonce.objects.all())
    class Meta:
        model  = User
        fields = ['id', 'username', 'annonces']

class FavoriSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Favoris
        fields = ('user','annonce')