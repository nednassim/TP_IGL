from django.contrib import admin
from .models import annonce

# Register your models here.

class annonceAdmin(admin.ModelAdmin):
    list_display = ('price', 'annonceur')

admin.site.register(annonce, annonceAdmin)
