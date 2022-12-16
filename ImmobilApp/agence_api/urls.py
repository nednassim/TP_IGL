from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('annonces/', views.annonce_list, name='liste des annonces'),
    path('annonces/<str:pk>/', views.annonce_detail, name='detail annonce'),
]