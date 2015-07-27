window.hotel = window.hotel || {};
window.hotel.view = window.hotel.view || {};
window.hotel.model = window.hotel.model || {};

  var newMap = new window.hotel.view.mapView(); 
  var newCollection;

  $('.glyphicon-search').click(function(){
    var cityName = $('.search').val();

    window.eventManager.fire('SearchStarted', this, {cityName: cityName});
    newCollection = new window.hotel.model.hotelCollection();
   window.eventManager.subscribe('SearchStarted', newCollection, newCollection.fetch);
  });

   if ($("#map-btn").click())
   {
    window.eventManager.subscribe('Hotels.fetched', newMap, newMap.renderMarker);
   } else {
    window.eventManager.subscribe('Hotels.fetched', hotel.view.gridView, hotel.view.gridView.showGrid);
   }
  window.eventManager.subscribe('DetailsClicked', newCollection = newCollection || window.hotel.model.hotelCollection(), newCollection.fetchspecific);

  