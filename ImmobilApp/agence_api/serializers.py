from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Annonce, Favoris, Offre, Image,Location

class ImageSerializer(serializers.ModelSerializer):

    class Meta:

        model = Image
        fields = ('__all__')


class LocationSerializer(serializers.ModelSerializer):

    class Meta:

        model = Location
        fields = ['adress','wilaya','city','annonce']


class AnnonceSerializer(serializers.ModelSerializer):
    
    location = LocationSerializer(many=False, read_only=True)
    image_set = ImageSerializer(many=True, read_only=True)

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

class OffreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Offre
        fields = ('id', 'annonceur', 'client', 'message', 'annonce', 'prix')