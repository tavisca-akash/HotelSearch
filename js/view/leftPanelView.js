window.htoel.view.leftPanelView = window.htoel.view.leftPanelView || {};



/**
*checking for click event on map button
**/
$("#map-button").click(function () {

    hotel.eventManager.fire('map-button-clicked',this);

});

/**
*checking for click event on grid button
**/
$("#grid-button").click(function () {

    hotel.eventManager.fire('grid-button-clicked', this);

});


/**
*Fetching data from hotel collection and rendering it. 
**/

leftPanelView.toggle= new funciotn
leftPanelView.hotelinfo = new function (hotelData) {
    var hotelData = hotelData;

    $("#hotel-id").val(hotelData.HotelId);
    $("#hotel-name").val(hotelData.Name);
    $("#street").val(hotelData.Address.AddressLine1);
    $("#town").val(hotelData.Address.AddressLine2);
    $("#rating").val(hotelData.Address.Rating);
    hotel.eventManager.fire('RenderingDone', this);

}
/**
*Fetching pagination object from hotel collection and passing to pagination view
**/
leftPanelView.proxy = new function (hotelsFetched) {

    hotel.eventManager.fire('PaginationProxy', this, hotelsFetched);

}