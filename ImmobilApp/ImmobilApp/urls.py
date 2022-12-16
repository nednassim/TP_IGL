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
    path('agence_api/', include('agence_api.urls')),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
