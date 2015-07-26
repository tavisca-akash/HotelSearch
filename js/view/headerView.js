window.hotel = window.hotel || {};
window.hotel.view.headerView = window.hotel.view.headerView || {};


window.hotel.headerView = (function() {
  $('.glyphicon-search').click(function(){
    var cityName = $().val();
    window.eventManager.fire('SearchStarted', this, {cityName: cityName});
  });
})