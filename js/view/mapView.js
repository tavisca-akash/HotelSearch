function renderMarker(location) {
    $("#gridpanel").click(function () {
        $("p").hide();
    });
  
    $("#canvas").css("display", "block");
    document.getElementById("canvas").style.display = "block";
    //------------------------------------	
    var mapProp = {
        center: new google.maps.LatLng(18.520430, 73.856744),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("canvas"), mapProp);
    var marker, i;

    var infowindow = new google.maps.InfoWindow();

    //--------------------------------------------------
    for (i = 0; i < locations.Hotels.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations.Hotels[i].GeoCode.Latitude, locations.Hotels[i].GeoCode.Longitude),
            map: map
        });
        //-------------------------------------------------------
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations.Hotels[i].Name);
                infowindow.open(map, marker);
                map.setZoom(13);
                map.setCenter(marker.getPosition());
                eventManager.fire('MarkerClicked', this, locations.Hotels[i].HotelId);

            }
        })(marker, i));

    }
}

google.maps.event.addDomListenerOnce($("#toggle-btn")[0], 'click',
                                 function () { render(); });


