from django_filters import rest_framework as filters
from .models import Annonce
from django.db.models import Q

class AnnonceFilter(filters.FilterSet):

    start_date = filters.DateFilter(field_name='insertDate', lookup_expr='gte')
    end_date = filters.DateFilter(field_name='insertDate', lookup_expr='lte')
    type = filters.ChoiceFilter(choices=Annonce.type_bien)

    def filter_queryset(self, passedqueryset):
        querySet = super().filter_queryset(passedqueryset)
        args = Q()
        fields = ('titre', 'description') #any fields in your model you'd like to search against
        query_string = self.request.query_params.get('search') #search terms, you'll probably populate this from some source
        if query_string is not None:
            for query in query_string.split(','):  #breaks query_string into 'Foo' and 'Bar'
                args |= Q(description__icontains=query) | Q(titre__icontains=query)
            print(args)
        return querySet.filter(args)
    class Meta:
        model = Annonce
        fields = ['type', 'location__city', 'end_date']