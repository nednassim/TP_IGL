from django.db import models

# Create your models here.

class annonce(models.Model):
    price = models.IntegerField()
    annonceur = models.CharField(max_length=25)

    def __str__(self):
        return 'property of: ' + self.announceur
    
