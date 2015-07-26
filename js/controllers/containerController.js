window.hotel = window.hotel || {};

  var newCollection = new hotel.model.hotelCollection();
  // console.log('NEW COLLECTION>>>>>>>>>>>>>>>>>>>>>>>>');
  // console.log(newCollection);
  window.eventManager.subscribe('SearchStarted', newCollection, newCollection.fetch);
 
  window.eventManager.subscribe('Hotels.fetched', hotel.view.gridView, hotel.view.gridView.showGrid);
  window.eventManager.subscribe('', newBall, newBall.trackCoordinate);
  window.eventManager.subscribe('', newBall, newBall.trackCoordinate);
  window.eventManager.subscribe('', newBall, newBall.trackCoordinate);
  window.eventManager.subscribe('', newBall, newBall.trackCoordinate);
  window.eventManager.subscribe('', newBall, newBall.trackCoordinate);
  window.eventManager.subscribe('', newBall, newBall.trackCoordinate);
  window.eventManager.subscribe('', newBall, newBall.trackCoordinate);
  window.eventManager.subscribe('', newBall, newBall.trackCoordinate);
  