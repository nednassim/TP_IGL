from rest_framework.test import APITestCase, APIClient
from rest_framework import status
from django.urls import reverse
from .models import ImmobilUser as User
from .models import Annonce, Offre



class AnnonceAPITestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username= 'testuser',password =  "password")
        self.client.force_authenticate(user=self.user)



class DeposerAnnonceTestCase(AnnonceAPITestCase):
    def setUp(self):
        super().setUp()
        self.url = reverse('deposer une annonce')
        self.data = {
                "titre": "Test Annonce",
                "categorie": "V",
                "type": "T",
                "description": "Annonce de test",
                "surface": 1,
                "prix": 2
            }

    def test_Deposer_Annonce(self):
        response = self.client.post(self.url, self.data , format = 'json')
         # Check that the response is successful
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        
         # Check that the data is correct
        for key in self.data:
            self.assertEqual(response.data[key], self.data[key])





class ListerAnnonceTestCase(AnnonceAPITestCase):
    def setUp(self):
        super().setUp()
        self.url = reverse('liste des annonces')
        self.annonce_1 = Annonce.objects.create(
            titre='Test Annonce 1',
            description='Annonce de test',
            categorie= "V",
            type= "T",
            surface= 1,
            prix= 2,
            annonceur=User.objects.create_user(username='testuser1', password='password')
        )
        self.annonce_2 = Annonce.objects.create(
            titre='Test Annonce 2',
            description='Annonce de test',
            categorie= "V",
            type= "T",
            surface= 1,
            prix= 2,
            annonceur=User.objects.create_user(username='testuser2', password='password')
        )


    def test_Lister_Annonce(self):
        
        response = self.client.get(self.url)
       
        # Check that the response is successful
        self.assertEqual(response.status_code, 200)

        # Check that the expected data is returned
        self.assertContains(response, 'Test Annonce 1')
        self.assertContains(response, 'Test Annonce 2')



class MakeOfferTestCase(AnnonceAPITestCase):
    def setUp(self):
        super().setUp()
        self.url = reverse('proposer un offre')
        self.annonce = Annonce.objects.create(
            titre='Test Annonce 1',
            description='Annonce de test',
            categorie= "V",
            type= "T",
            surface= 1,
            prix= 5,
            annonceur=User.objects.create_user(username='testannouncer', password='password')
        )
        self.data = {
                "message": "je vous offre le prix suivant",
                "annonce": self.annonce.id,
                "prix": 2,
            }


    def test_Lister_Annonce(self):
        
        response = self.client.post(self.url, self.data , format = 'json')
        
        # Check that the response is successful
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Check that the offer was added succesfully
        offers = self.annonce.offre_set.all()
        current_offer = Offre.objects.get(id=response.data['id'])
        self.assertEqual(offers[0], current_offer)