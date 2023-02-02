from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Annonce, Favoris, Offre, Image

class ImageSerializer(serializers.ModelSerializer):

    class Meta:

        model = Image
        fields = ('__all__')


class AnnonceSerializer(serializers.ModelSerializer):
    
    image_set = ImageSerializer(many=True)

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
        fields = ('annonceur', 'client', 'message', 'annonce', 'prix')