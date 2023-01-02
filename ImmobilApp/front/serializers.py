from rest_framework import serializers
from .models import annonce

class annonceSerializer(serializers.ModelSerializer):
    class Meta:
        model = annonce
        fields = ('__all__')
