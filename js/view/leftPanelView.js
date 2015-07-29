window.hotel = window.hotel || {};
window.hotel.view = window.hotel.view || {};
// window.hotel.view.leftPanelView = window.hotel.view.leftPanelView || {};

/**
*checking for click event on map button
**/
// $("#map-btn").click(function () {
//     console.log('HERE>>>>>>>>>>>>>>>>>>> MAP BUTTON CLICKED');
//     eventManager.fire('map-button-clicked',this);
// });

/**
*checking for click event on grid button
**/
  $("#grid-btn").click(function () {
    console.log('HERE>>>>>>>>>>>>>>>>>>> map VIEW');
    eventManager.fire('grid-button-clicked', this);
  });

  $("#map-btn").click(function () {
    console.log('HERE>>>>>>>>>>>>>>>>>>> grid VIEW');
    eventManager.fire('map-button-clicked', this);
  });
/**
*Fetching data from hotel collection and rendering it using funciton renderHotelInfo. 
**/

  window.hotel.view.leftPanelView = (function () {
    console.log('HERE>>>>>>>>>>>>>>>>>>> is this being called??? THIS SHOULD BE COOL!!!');
    function hotelInfo (hotelData) {
      console.log('HERE>>>>>>>>>>>>>>>>>>> HOTELINFO??!!');
      var hotelData = hotelData;
      $("#hotel-id").text(hotelData.hotelId);
      $("#hotel-name").text(hotelData.name);
      $("#street").text(hotelData.address.AddressLine1);
      $("#town").text(hotelData.address.AddressLine2);
      $("#rating").text(hotelData.rating);
      eventManager.fire('RenderingDone', this, {});
    };

    function viewCheck (hotelData) {
      console.log('HERE>>>>>>>>>>>>>>>>>>> ViewCheck??!!');
      // $("#grid-btn").click(function () {
      if ($("#map-btn").hasClass('active')) {
        console.log('HERE>>>>>>>>>>>>>>>>>>> map VIEW');
        eventManager.fire('map-button-clicked', this, hotelData);
      } else {
        if(!$("#grid-btn").hasClass('active')) {
          $("#grid-btn").addClass('active');
        }
        eventManager.fire('grid-button-clicked', this, hotelData);
      }
    }

    function proxy() {
      console.log('HERE>>>>>>>>>>>>>>>>>>> LEFT PANEL VIEW');
      eventManager.fire('PaginationProxy', this, hotelsFetched);
    };
    return {
      hotelInfo: hotelInfo,
      viewCheck: viewCheck,
      proxy: proxy
    };
  });
/**
*Fetching pagination object from hotel collection and passing to pagination view
**/
// window.hotel.view.leftPanelView.proxy = new function (hotelsFetched) {

//     console.log('HERE>>>>>>>>>>>>>>>>>>> LEFT PANEL VIEW');
//     eventManager.fire('PaginationProxy', this, hotelsFetched);
// }