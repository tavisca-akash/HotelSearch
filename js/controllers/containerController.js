window.hotel = window.hotel || {};
window.hotel.view = window.hotel.view || {};
window.hotel.model = window.hotel.model || {};

  var newMap;
  var newGrid;
  var newCollection;
  var newLeftPanel;

  // $('.glyphicon-search').click(function(){
    // var cityName = $('.search').val();

    // window.eventManager.fire('SearchStarted', this, {cityName: cityName});
   window.eventManager.subscribe('SearchStarted', newCollection = newCollection || new window.hotel.model.hotelCollection(), newCollection.fetch);
  // });
  // console.log('SEEMS LIKE AN ISSUE !!!! Seems like my bad IF TRUE!!', $("#map-btn").hasClass('active'));
   // if ($("#map-btn").hasClass('active'))
   // {
    // window.eventManager.subscribe('Hotels.fetched', newMap, newMap.renderMarker);
   // } else {
    window.eventManager.subscribe('Hotels.fetched', newLeftPanel = newLeftPanel || new window.hotel.view.leftPanelView(), newLeftPanel.viewCheck);
    // window.eventManager.subscribe('', newGrid = newGrid || new window.hotel.view.leftPanelView(), newGrid.hotelInfo);
   // }
  window.eventManager.subscribe('DetailsClicked', newCollection = newCollection || window.hotel.model.hotelCollection(), newCollection.fetchspecific);
  window.eventManager.subscribe('grid-button-clicked', newGrid = newGrid || new window.hotel.view.gridView(), newGrid.showGrid);
  window.eventManager.subscribe('map-button-clicked', newMap = newMap || new window.hotel.view.mapView(), newMap.renderMarker);

  