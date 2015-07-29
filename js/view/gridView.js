window.hotel = window.hotel || {};
window.hotel.view = window.hotel.view || {};
window.hotel.view.gridView = window.hotel.view.gridView || {};
hotel.view.gridView.showGrid = (function (hotel) {
    console.log('HERE>>>>>>>>>>>>>>>>>>> GRID VIEW');
    console.log('hotel', hotel);

   $("canvas").hide();

   var hotelObject = hotel;

    var table = $('<table class="table table-hover"/>');
    table[0].border = "1";

    //Add the header row.
    var row = $(table[0].insertRow(-1));

    var headerCell = $("<th />");
    headerCell.html("Hotel Name");
    row.append(headerCell);

    var headerCell = $("<th />");
    headerCell.html("Rating");
    row.append(headerCell);

    var headerCell = $("<th />");
    headerCell.html("Hotel Details");
    row.append(headerCell);

    //Add the data rows.
    for (var i = 1; i < hotel.length; i++) {
        row = $(table[0].insertRow(-1));

        var cell = $("<td />");
        cell.html(hotelObject[i].Name);
        row.append(cell);

        cell = $("<td />");
        cell.html(hotelObject[i].Rating);
        row.append(cell);

        cell = $('<td> <a href="#">  Details </a> </td>');
		 eventManager.fire('DetailsClicled', this, { hotelId: hotelObject[i].HotelId });
        row.append(cell);
    }
    var dvTable = $("#tableid");
    dvTable.html("");
    dvTable.append(table);
})