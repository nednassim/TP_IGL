from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
# Create your models here.

from django.db import models

class ImmobilUser(AbstractUser):

    # user_permissions=[]
    nom = models.CharField(max_length=20, default="no name")
    prenom = models.CharField(max_length=20, default="no name")
    email = models.EmailField(max_length=254, null=True)
    phone = models.IntegerField(null=True)

class Annonce(models.Model): # required in insertion: [cat,type,desc,surf,prix] user will be the authenticated one

    annonceur = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, blank=True)
    
    annonce_categorie = (
        ('V', 'Vente'),
        ('E', 'Echange'),
        ('L', 'Location'),
        ('LV', 'Location pour Vacances'),
    )

    type_bien = (
        ('T', 'Terrain'),
        ('TA', 'Terrain Agricole'),
        ('A', 'Appartement'),
        ('M', 'Maison'),
        ('B', 'Bungalow'),

    )

    categorie = models.CharField(max_length=12, choices=annonce_categorie)
    type = models.CharField(max_length=12, choices=type_bien)
    description = models.CharField(max_length=500)
    suface = models.IntegerField()
    prix = models.IntegerField()


class Location(models.Model):

    city = models.CharField(max_length=20)
    annonce = models.OneToOneField(Annonce, on_delete=models.CASCADE)

class Message(models.Model):

    texte = models.CharField(max_length=500)
    annonce = models.ForeignKey(Annonce, on_delete=models.CASCADE)

class Image(models.Model):

    annonce = models.ForeignKey(Annonce, on_delete=models.CASCADE, null=True, blank=True)
    path = models.ImageField(upload_to='annonce/')

class Favoris(models.Model):

    annonce = models.ForeignKey(Annonce, on_delete=models.CASCADE)
    user = models.ForeignKey(ImmobilUser, on_delete=models.CASCADE, blank=True)