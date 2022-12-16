from django.db import models

# Create your models here.

from django.db import models

class contact(models.Model):

    phone = models.IntegerField()

class utitlisateur(models.Model):

    nom = models.CharField(max_length=20)
    prenom = models.CharField(max_length=20)

class locatlisation(models.Model):

    city = models.CharField(max_length=20)

class annonce(models.Model):

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
    contact = models.ForeignKey(to=contact, on_delete=models.CASCADE, blank=True, null=True)
    annonceur = models.ForeignKey(to=utitlisateur, on_delete=models.CASCADE, blank=True, null=True)
    loc = models.ForeignKey(to=locatlisation, on_delete=models.CASCADE, blank=True, null=True)
    photos = models.ImageField(upload_to='annonce/')


