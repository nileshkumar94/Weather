var lat, lon;
var units = 'metric';

function getTemp() {
    $.ajax({

        url: 'https://api.weatherbit.io/v2.0/current?lat=' + lat + '&lon=' + lon + '&key=3dbeb579e2fe429aa7864396b1c2576b',
        dataType: 'jsonp',
        success: function(data) {
            console.log(data);
            var cityName = data.data["0"].city_name;
            console.log(cityName);
            var temp = data.data[0].temp;
            console.log(temp);
            $('#temp').text("Current Temperature" + temp);
            var countryCode = data.data[0].country_code;
            $('#city').text(cityName + "," + countryCode);

            var timezone = data.data[0].timezone;
            console.log(timezone);
            $('#timezone').text(timezone);
            var description = data.data[0].weather.description;
            console.log(description);
            $('#description').text(description);

            var icon = data.data[0].weather.icon;
            console.log(icon);
            icons_url = "https://www.weatherbit.io/static/img/icons/" + icon + ".png";
            $('#icon').html('<img src="' + icons_url + '"</img>');
            var wind_spd = data.data[0].wind_spd;
            console.log(wind_spd);
            $('#wind_spd').text("Wind Speed" + wind_spd + "km/hr");



        }


    });

}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            console.log(lat, lon);
            getTemp();
        });
    }
}
getLocation();