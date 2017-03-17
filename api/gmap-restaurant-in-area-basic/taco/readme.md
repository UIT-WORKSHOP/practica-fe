# Task #5: Intergrated Google Map - List of Addresses
* Done by Trung Thanh and Xuan Cong
## Init map
    function initMap() {
      var pyrmont = {lat: 10.8842083, lng: 106.7831765};
      map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 17
    }
## Customized style map
    style: [
    ...
    ]
## Function get info the place
    infowindow = new google.maps.InfoWindow();
## Function seek those nearby restaurant with radius 500
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: pyrmont,
      radius: 500,</br >
      type: ['restaurant']
    }, callback);
## function 'callback' put a marker at the restaurant
    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
           createMarker(results[i]);
        }
      }
    }
# function create a marker
    function createMarker(place) {
    var marker = new google.maps.Marker({
       map: map,
       icon: image,
       position: place.geometry.location //'geometry.location' return lat/lng of 'place'
       });
       //command get information from the place
       google.maps.event.addListener(marker, 'click', function() {
       infowindow.setContent(place.name);
       infowindow.open(map, this);
       });
    }
