import folium
from jinja2.environment import Template

#add this layer to your map to make it markebale on mouse click
class MarkerLayer(folium.ClickForMarker) :
     

    _template = Template(
        """
            {% macro script(this, kwargs) %}
                var old_mark
                {% if this.old != None %}
                 old_mark =  {{this.old.get_name()}};
                 sessionStorage.setItem("lat",{{this.old.location[0]}});
                 sessionStorage.setItem("lng",{{this.old.location[1]}});
                {% else %}
                 old_mark = null;
                {% endif %}

                function newMarker(e){
                    if(old_mark)
                       {{this._parent.get_name()}}.removeLayer(old_mark)  
                    var iconOptions = L.AwesomeMarkers.icon({
                         icon: 'home',
                         markerColor: 'green'
                    });
                    var new_mark = L.marker(e.latlng,{icon: iconOptions}).addTo({{this._parent.get_name()}});
                    old_mark = new_mark;
                    var lat = e.latlng.lat.toFixed(4),
                       lng = e.latlng.lng.toFixed(4);
                       sessionStorage.setItem("lat",lat)
                       sessionStorage.setItem("lng",lng)
                    };
                    
                {{this._parent.get_name()}}.on('click', newMarker);
            {% endmacro %}
            """
    ) 


    def __init__(self,popup=None, old=None):
        super().__init__()
        self.old = old
    