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

    hotelData.address = hotelObj.Address;
    hotelData.hotelId = hotelObj.HotelId;
    hotelData.image = hotelObj.Image;
    hotelData.name = hotelObj.Name;
    hotelData.rating = hotelObj.Rating;
    hotelData.geoCode = {};
    hotelData.geoCode.Latitude = hotelObj.GeoCode.Latitude;
    hotelData.geoCode.Longitude = hotelObj.GeoCode.Longitude;

    return hotelData;
};