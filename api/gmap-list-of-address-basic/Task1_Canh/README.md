#Task 1
## NGuồn tham khảo để custom Map Marker:
	*** https://developers.google.com/maps/documentation/javascript/custom-markers
	Link trên để xem cách mà người ta đã custom.

	*** http://kml4earth.appspot.com/icons.html#pushpin
	Link này có chứa các loại Marker có xuất hiện trên Google Map
## Một số giải thích về Source Code
	map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: new google.maps.LatLng(10.7714783,106.6974142),
          ....
      }
      Đây là phần lấy trung tâm của map khi chạy file lên.Cụ thể là tọa độ của chợ Bến Thành.

     BusStation: {
            icon: iconShapes + 'bus.png'
          },
      Một ví dụ về Marker của BusStation có trong Link thứ 2 để thay đổi Marker

     position: new google.maps.LatLng(10.7718408,106.6982379),
            type: 'BusStation'
            }
      Lấy tọa đô của BusStation và thay đổi nó với Marker mới.

## Nguồn tham khảo để custom Style Map:

	***https://developers.google.com/maps/documentation/javascript/styling
	Ở đây chứa một mẫu Style mà người khác đã custom

	*** https://www.w3schools.com/colors/colors_hexadecimal.asp
	Link này là nơi lấy màu để Custom
	Trong Source có giải thích về Code.
  
## Với Main Goal: Hầu hết đều tìm hiểu ở link:
        ***https://developers.google.com/maps/documentation/javascript/examples/places-searchbox
	Sử dụng Google Maps API nên source có giống với nguồn trên mạng.
