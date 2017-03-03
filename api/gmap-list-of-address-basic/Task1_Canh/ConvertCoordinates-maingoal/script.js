
function initAutocomplete() { //Sử dụng API của google maps
        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 10.7719338,lng: 106.6979044},
          zoom: 13,
          mapTypeId: 'roadmap'
        });

        // Tạo một hộp tìm kiếm 
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Kết quả tìm sẽ trả về trung tâm màn hình để hiển thị.
        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];
        // Hiển thị các kết quả tìm kiếm ngay khi đang nhập vào giúp người sử dụng lựa chọn dễ hơn
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // các kết quả tìm kiếm cũ sẽ được gỡ bỏ
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // Mỗi vị trí sẽ có tên, thông tin, tọa độ
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Không tìm thấy địa điểm cần tìm");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Sau khi tìm kiếm xong thì sẽ hiển thị marker trên map
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
      }