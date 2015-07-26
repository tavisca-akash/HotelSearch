window.hotel = window.hotel || {};
window.hotel.model = window.hotel.model || {};
window.hotel.model.hotelModel = window.hotel.model.hotelModel || {};

hotel.model.hotelModel = function (hotel) {
    if (hotel == null)
        throw new Error('Invalid Arguments');
    var hotelObj = hotel;
    var hotelData = {
        "Address": {
            "AddressLine1": '',
            "AddressLine2": '',
            "City": '',
            "Country": '',
            "Zip": ''
        },
        "geoCode": {
            "Latitude": 0.0,
            "Longitude": 0.0
        },
        "HotelId": 0,
        "Image": '',
        "Name": '',
        "Rating": 0
    };

    return
    (function () {
        hotelData.Address = hotelObj.Address;
        hotelData.HotelId = hotelObj.HotelId;
        hotelData.Image = hotelObj.Image;
        hotelData.Name = hotelObj.Name;
        hotelData.Rating = hotelObj.Rating;
        geoCode.Latitude = hotelObj.GeoCode.Latitude;
        geoCode.Longitude = hotelObj.GeoCode.Longitude;
        return hotelData;
    }());
};