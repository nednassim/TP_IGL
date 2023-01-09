from django.urls import path, re_path
from . import views
from django.views.generic import TemplateView




urlpatterns = [
    path('', views.index, name='index'),
    path('annonces/', views.AnnonceList.as_view(), name='liste des annonces'), # voir toutes les annonces
    path('annonces/<int:pk>/', views.AnnonceDetails.as_view(), name='detail annonce'), # consulter l'annonce de l'id pk
    path('annonces/<int:pk>/delete/', views.AnnonceRemove.as_view(), name='detail annonce'), # consulter l'annonce de l'id pk
    path('deposer-annonce/',views.DeposerAnnonce.as_view(), name='deposer une annonce'),
    path('favoris/<int:annonce_pk>/add/', views.MarkAnnonce.as_view(), name='add to favoris'), # provide annonce_id
    path('favoris/<int:annonce_pk>/delete/', views.UnmarkAnnonce.as_view(), name='delete from favoris'), # provide annonce_id
    path('favoris/list', views.ListMarkedAnnonce.as_view(), name='afficher liste favoris'),
    path('offres/', views.ListOffers.as_view(), name='Liste des messages offres'),
    path('proposer-offre/', views.MakeOffer.as_view(), name='proposer un offre'),
    path('swagger-ui/', TemplateView.as_view(
        template_name='swagger-ui.html',
        extra_context={'schema_url':'openapi-schema'}
    ), name='swagger-ui'),
    # path('send-message', views.as_view(), name='envoyer message a annonceur'),

    # path('rest-auth/registration/', ),

    
]