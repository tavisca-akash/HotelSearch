window.hotel = window.hotel || {};
window.hotel.view = window.hotel.view || {};
window.hotel.view.headerView = window.hotel.view.headerView || {};


  $('.glyphicon-search').click(function(){
    var cityName = $('.search').val();
  	console.log('cityName>>>>>>>>>>>>>>>>>>>>', cityName);
  	console.log('cityName>>>>>>>>>>>>>>>>>>>>', $('.search').val());
    window.eventManager.fire('SearchStarted', this, {cityName: cityName});
  });