from django.urls import path, re_path
from . import views





urlpatterns = [
    path('', views.index, name='index'),
    path('annonces/', views.AnnonceList.as_view(), name='liste des annonces'), # voir toutes les annonces
    path('annonces/<str:pk>/', views.AnnonceDetails.as_view(), name='detail annonce'), # consulter l'annonce de l'id pk
    path('annonces/<str:pk>/delete/', views.AnnonceRemove.as_view(), name='detail annonce'), # consulter l'annonce de l'id pk
    path('deposer-annonce/',views.DeposerAnnonce.as_view(), name='deposer une annonce'),
    path('favoris/<str:annonce_pk>/add/', views.MarkAnnonce.as_view(), name='add to favoris'), # provide annonce_id
    path('favoris/<str:annonce_pk>/delete/', views.UnmarkAnnonce.as_view(), name='delete from favoris'), # provide annonce_id
    path('favoris/list', views.ListMarkedAnnonce.as_view(), name='afficher liste favoris'),
    # path('send-message', views.as_view(), name='envoyer message a annonceur'),

    # path('rest-auth/registration/', ),

    
]