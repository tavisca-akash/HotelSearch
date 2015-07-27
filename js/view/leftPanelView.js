window.hotel = window.hotel || {};
window.hotel.view = window.hotel.view || {};
window.hotel.view.leftPanelView = window.hotel.view.leftPanelView || {};

/**
*checking for click event on map button
**/
$("#map-btn").click(function () {
    eventManager.fire('map-button-clicked',this);
});

/**
*checking for click event on grid button
**/
$("#grid-btn").click(function () {
    window.eventManager.fire('grid-button-clicked', this);
});

/**
*Fetching data from hotel collection and rendering it using funciton renderHotelInfo. 
**/

window.hotel.view.leftPanelView.hotelinfo = new function (hotelData) {
    var renderHotelInfo= function(){
        var hotelData = hotelData;
        $("#hotel-id").text(hotelData.HotelId);
        $("#hotel-name").text(hotelData.Name);
        $("#street").text(hotelData.Address.AddressLine1);
        $("#town").text(hotelData.Address.AddressLine2);
        $("#rating").text(hotelData.Address.Rating);
        eventManager.fire('RenderingDone', this, {});
    };
}
/**
*Fetching pagination object from hotel collection and passing to pagination view
**/
window.hotel.view.leftPanelView.proxy = new function (hotelsFetched) {

    eventManager.fire('PaginationProxy', this, hotelsFetched);

}