from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static
# from front import views
from agence_api import views

router = routers.DefaultRouter()
router.register(r'annonce', views.annonceView)

urlpatterns = [
    # path('front/', include('front.urls')),
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('agence-api/', include('agence_api.urls')),
    path('accounts/', include('allauth.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
