window.hotel = window.hotel || {};
window.hotel.model = window.hotel.model || {};
window.hotel.model.hotelModel = window.hotel.model.hotelModel || {};

hotel.model.hotelModel = function (hotel) {
    if (hotel == null)
        throw new Error('Invalid Arguments');
    var hotelObj = hotel;
    var hotelData = {
        // "Address": {
        //     "AddressLine1": '',
        //     "AddressLine2": '',
        //     "City": '',
        //     "Country": '',
        //     "Zip": ''
        // },
        // "geoCode": {
        //     "Latitude": 0.0,
        //     "Longitude": 0.0
        // },
        // "HotelId": 0,
        // "Image": '',
        // "Name": '',
        // "Rating": 0
    };

    return
    (function () {
        hotelData.Address = hotelObj.address;
        hotelData.HotelId = hotelObj.hotelId;
        hotelData.Image = hotelObj.image;
        hotelData.Name = hotelObj.name;
        hotelData.Rating = hotelObj.rating;
        hotelData.geoCode.Latitude = hotelObj.GeoCode.latitude;
        hotelData.geoCode.Longitude = hotelObj.GeoCode.longitude;
        return hotelData;
    }());
};