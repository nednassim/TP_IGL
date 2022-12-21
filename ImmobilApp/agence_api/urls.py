from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)



urlpatterns = [
    path('', views.index, name='index'),
    path('annonces/', views.OwnerAnnonceList.as_view(), name='liste des annonces'), # voir toutes les annonces
    path('annonces/<str:pk>/', views.annonce_detail, name='detail annonce'), # consulter l'annonce de l'id pk
    path('rest-auth/google', views.GoogleLogin.as_view(), name='google-login'), # s'authentifier avec google
    
    # path('rest-auth/registration/', ),

    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]