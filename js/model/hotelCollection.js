window.hotel = window.hotel || {};
window.hotel.model = window.hotel.model || {};
window.hotel.infra = window.hotel.infra || {};
window.hotel.infra.config = window.hotel.infra.config || {};
window.hotel.model.hotelCollection = window.hotel.model.hotelCollection || {};

hotel.model.hotelCollection = function () {
    var _hotels = [];
    var _pagination;
    var params;
    function fetchAllHotels(cityName) {
        params = params || {};
        params.city = cityName;
        params.pageSize = params.pageSize || 50;
        params.pageNum = params.pageNum || 0;


        if (!params.city || $.trim(params.city) === '')
            throw Error('City Name is required');
        _hotels = [];
        var url = hotel.infra.config.url + '?type=City&q=' + cityName + '&top=' + params.pageSize + '&skip=' + (params.pageNum * params.pageSize);
        $.getJSON(url, function (response) {
            if (!response || !response.Hotels)
                throw new Error('Could not fetch hotel information!!!');

            //pagination Object
            _pagination = _pagination || {};
            _pagination.pageSize = _pagination.pageSize || 10;
            _pagination.pageNum = _pagination.pageNum || 0;
            _pagination.numberOfHotel = response.Hotels.length;
            for (var index = 0; index < response.Hotels.length; index++) {
                _hotels.push(new hotel.model.hotelModel(response.Hotels[index]));
            }
            hotel.EventManager.fire('Hotels.fetched', this, {
                hotelList: _hotels,
                pagination: pagination
            });

        }).fail(function (error) {
            throw new Error('Could not handle the request!!!');
        });
    };

    function fetchSpecificHotel(hotelID) {
        for (iterartor = 0; iterartor < _hotels; iterartor++) {
            if (_hotels[iterartor].hotelId === hotelID)
                eventManager.fire('Specific Hotel Fectched', this, { hotelObject: _hotels[iterator] });
            else
                eventManager.fire('Specific Hotel Fectched', this, { hotelObject: null });
        }
    }

    return {
        fetch: fetchAllHotels,
        fetchspecific: fetchSpecificHotel,
        hotels: _hotels,
        paginationObj: _pagination,
    };
}