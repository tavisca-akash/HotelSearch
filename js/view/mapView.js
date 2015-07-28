window.hotel = window.hotel || {};
window.hotel.view = window.hotel.view || {};
window.hotel.view.mapView = window.hotel.view.mapView || {};


window.hotel.view.mapView = (function(){
  function renderMarker(hotelList) {
    $("#gridpanel").hide();

    $("#canvas").css("display", "block");
   
    //------------------------------------  
    var mapProp = {
        center: new google.maps.LatLng(18.520430, 73.856744),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("canvas"), mapProp);
    var marker, i;

    var infowindow = new google.maps.InfoWindow();

    console.log('HOTEL LIST>>>>>>>>>>>>>>>>');
    console.log(hotelList);
    //--------------------------------------------------
    for (i = 0; i < hotelList.Hotels.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(hotelList.Hotels[i].GeoCode.Latitude, hotelList.Hotels[i].GeoCode.Longitude),
            map: map
        });
        //-------------------------------------------------------
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(hotelList.Hotels[i].Name);
                infowindow.open(map, marker);
                map.setZoom(13);
                map.setCenter(marker.getPosition());
                eventManager.fire('DetailsClicked', this, hotelList.Hotels[i].HotelId);

            }
        })(marker, i));

    }
}

// UNDER DISCUSSION
  google.maps.event.addDomListenerOnce($("#toggle-btn")[0], 'click', function () {
    this.renderMarker();
  });

  return{
    renderMarker: renderMarker,
  };
});