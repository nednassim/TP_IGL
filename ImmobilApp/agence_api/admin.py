from django.contrib import admin
from .models import annonce
from .models import contact
# Register your models here.

class annonceAdmin(admin.ModelAdmin):
    list_display=('categorie','photos')

class contactAdmin(admin.ModelAdmin):
    fields=('phone',)

admin.site.register(annonce, annonceAdmin)
admin.site.register(contact, contactAdmin)