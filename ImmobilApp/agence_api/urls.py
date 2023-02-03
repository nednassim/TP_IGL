from django.urls import path, re_path
from . import views
from django.views.generic import TemplateView
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.urls import register_converter

schema_view = get_schema_view(
   openapi.Info(
      title="Agence Immobilier API documentation",
      default_version='v1',
      description="Agence-api and login with google account endpoints documentaion and a bried summary of models in the app",
      contact=openapi.Contact(email="issakalem@gmail.com"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)


class FloatConverter:
    regex = '[-+]?[0-9]*\.?[0-9]+'

    def to_python(self, value):
        return float(value)

    def to_url(self, value):
        return str(value)

register_converter(FloatConverter, 'float')




urlpatterns = [
    path('', views.index, name='index'),
    path('annonces/', views.AnnonceList.as_view(), name='liste des annonces'), # voir toutes les annonces
    path('annonces/<int:pk>/', views.AnnonceDetails.as_view(), name='detail annonce'), # consulter l'annonce de l'id pk
    path('annonces/<int:pk>/delete/', views.AnnonceRemove.as_view(), name='suprimer annonce'), # consulter l'annonce de l'id pk
    path('deposer-annonce/',views.DeposerAnnonce.as_view(), name='deposer une annonce'),
    path('ajouter-image/',views.AjouterImage.as_view(), name='ajouter une Image'),
    path('inclure-localisation/',views.AjouterLocation.as_view(), name='inclure la localisation'),
    path('favoris/<int:annonce_pk>/add/', views.MarkAnnonce.as_view(), name='add to favoris'), # provide annonce_id
    path('favoris/<int:annonce_pk>/delete/', views.UnmarkAnnonce.as_view(), name='delete from favoris'), # provide annonce_id
    path('favoris/list', views.ListMarkedAnnonce.as_view(), name='afficher liste favoris'),
    path('offres/', views.ListOffers.as_view(), name='Liste des messages offres'),
    path('proposer-offre/', views.MakeOffer.as_view(), name='proposer un offre'),
    path('map/<str:adress>/<str:city>/<str:wilaya>/', views.MarkableMap.as_view()), # map genéré par adress marker changeable
    path('map/<float:lat>/<float:lng>/', views.StaticMap.as_view()),  # map genéré par coordonné marker non changeable
    # path('swagger-ui/', TemplateView.as_view(
    #     template_name='swagger-ui.html',
    #     extra_context={'schema_url':'openapi-schema'}
    # ), name='swagger-ui'),

    # path('rest-auth/registration/', ),

    
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]
