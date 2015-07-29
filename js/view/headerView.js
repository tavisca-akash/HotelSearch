window.hotel = window.hotel || {};
window.hotel.view = window.hotel.view || {};
window.hotel.view.headerView = window.hotel.view.headerView || {};


  $('.glyphicon-search').click(function(e){
    e.preventDefault();
    this.cityName = $('.search').val() ? $('.search').val() : this.cityName;
    console.log('cityName>>>>>>>>>>>>>>>>>>>>', this.cityName);
    console.log('cityName>>>>>>>>>>>>>>>>>>>>', $('.search').val());
    window.eventManager.fire('SearchStarted', this, {cityName: this.cityName});
  });