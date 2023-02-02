from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
# from django.contrib.auth.models import User
from .models import Annonce
from .models import Image
from .models import ImmobilUser



# class annonceAdmin(admin.ModelAdmin):
#     list_display=('__all__',)


admin.site.register(ImmobilUser)
admin.register(ImmobilUser)
admin.site.register(Annonce)
admin.site.register(Image)