
var map;
var infowindow;
function initMap() {
var cen = {lat: 10.978038, lng: 106.498745};
 map = new google.maps.Map(document.getElementById('map'), {
 center: cen,
 zoom: 18,
 styles: [
            {
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [{"color": "#9390A2"}]
            },
            {
              "featureType": "road.local",
              "elementType": "geometry",
              "stylers": [{"color": "#C5C7C8"}]
            },
            
            {
              "featureType": "road.local",
              "elementType": "labels.text.fill",
              "stylers": [{"color": "#198DD3"}]
            },
          
           
            {
              "featureType": "landscape.man_made",
              "elementType": "geometry",
              "stylers":[{"color":"#97BEB2"}]
            }
 ]
 });
 infowindow = new google.maps.InfoWindow();
 var service = new google.maps.places.PlacesService(map);
 service.nearbySearch({
      location: cen,
      radius: 300,
      type: ['restaurant']
 }, callback);
var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
var Cafe = [
        ['CITIZONE', 10.9783867,106.4968318],
        ['Cafe Sapa', 10.978198,106.4988225],
        ['Chat', 10.980,106.4977321]
];
for (var i=0;i < Cafe.length; i++){
        var cf=Cafe[i];
        var marker = new google.maps.Marker({
          position: {lat:cf[1],lng:cf[2]},
          map: map,
          icon: image,
          title: cf[0]
});
var input = document.getElementById('pac-input');
var autocomplete = new google.maps.places.Autocomplete(
        input, {placeIdOnly: true});
        autocomplete.bindTo('bounds', map);
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
var infowindow = new google.maps.InfoWindow();
var infowindowContent = document.getElementById('infowindow-content');
infowindow.setContent(infowindowContent);
var geocoder = new google.maps.Geocoder;
var marker = new google.maps.Marker({
map: map
});
marker.addListener('click', function() {
infowindow.open(map, marker);
});
autocomplete.addListener('place_changed', function() {
        infowindow.close();
        var place = autocomplete.getPlace();
        if (!place.place_id) {
          return;
        }
        geocoder.geocode({'placeId': place.place_id}, function(results, status) {
          if (status !== 'OK') {
            window.alert('Geocoder failed due to: ' + status);
            return;
          }
        map.setZoom(18);
        map.setCenter(results[0].geometry.location);
            // Set the position of the marker using the and location.
        marker.setPlace({
              placeId: place.place_id,
              location: results[0].geometry.location
            });
            marker.setVisible(true);
            infowindowContent.children['place-name'].textContent = place.name;
            infowindowContent.children['place-address'].textContent =
                results[0].formatted_address;
            infowindow.open(map, marker);
          });
});
}
}
      /* Add Marker to restaurant*/
function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }
function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          icon: image,
          position: place.geometry.location
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
