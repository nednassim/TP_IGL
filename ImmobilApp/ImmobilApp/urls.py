from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.conf import settings
from django.conf.urls.static import static
# from front import views
from agence_api import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)



# router = routers.DefaultRouter()
# router.register(r'annonce', views.AnnonceList)

urlpatterns = [
    
    path('admin/', admin.site.urls),
    path('agence-api/', include('agence_api.urls')),
    # path('api/', include(router.urls)),
    # path('accounts/', include('allauth.urls')),
    # path('dj-rest-auth/', include('dj_rest_auth.urls')), # https://dj-rest-auth.readthedocs.io/en/latest/api_endpoints.html
    # specify 'next' in request to redirect to url
    # path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('rest-auth/google', views.GoogleLogin.as_view(), name='google-login'), # authenticate with google
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
