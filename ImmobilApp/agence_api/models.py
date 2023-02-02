from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings

# Create your models here.

from django.db import models

class ImmobilUser(AbstractUser):
    '''Custom user model inheriting from django's ``abstractUser``

    '''
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

    titre = models.CharField(max_length=100)
    categorie = models.CharField(max_length=12, choices=annonce_categorie)
    type = models.CharField(max_length=12, choices=type_bien)
    description = models.CharField(max_length=500)
    surface = models.IntegerField()
    prix = models.IntegerField()
    insertDate = models.DateTimeField(auto_now_add=True, blank=True)
    


class Location(models.Model):

    adress = models.CharField(max_length=100)
    wilaya = models.CharField(max_length=30)
    city = models.CharField(max_length=30)
    lat = models.FloatField(default= 36.7)
    lng = models.FloatField(default= 3)
    annonce = models.OneToOneField(Annonce, on_delete=models.CASCADE)

class Image(models.Model):

    annonce = models.ForeignKey(Annonce, on_delete=models.CASCADE)
    path = models.ImageField(upload_to='annonce_images')
    
    def delete(self, *args, **kwargs):
        self.path.delete(save=False)
        super().delete(*args, **kwargs)


class Favoris(models.Model):

    annonce = models.ForeignKey(Annonce, on_delete=models.CASCADE)
    user = models.ForeignKey(ImmobilUser, on_delete=models.CASCADE, blank=True)
    favDateTime = models.DateTimeField(auto_now_add=True, blank=True)

    class Meta:
        unique_together = ('annonce', 'user')

class Offre(models.Model):

    annonceur = models.ForeignKey(ImmobilUser, blank=True, on_delete=models.CASCADE, related_name='annonceurs')
    client = models.ForeignKey(ImmobilUser, blank=True, on_delete=models.CASCADE, related_name='clients')
    annonce = models.ForeignKey(Annonce, on_delete=models.CASCADE)
    message = models.TextField(max_length=1000)
    prix = models.IntegerField()
    dateOffre = models.DateTimeField(auto_now_add=True, blank=True)