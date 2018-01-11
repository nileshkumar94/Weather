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
            /*var curtemp = Math.round(data.currently.temperature);
             var curtemp = (data.currently.temperature - 32) * 5 / 9;
             celTemp = Math.round(celTemp);
             */
            $('#temp').html(temp + '  &degC ');
            var countryCode = data.data[0].country_code;
            $('#city').text(cityName + "," + countryCode);
            var description = data.data[0].weather.description;
            console.log(description);
            $('#description').text(description);
            var icon = data.data[0].weather.icon;
            console.log(icon);
            icons_url = "https://www.weatherbit.io/static/img/icons/" + icon + ".png";
            $('#icon').html('<img src="' + icons_url + '"</img>');
            var wind_spd = data.data[0].wind_spd;
            console.log(wind_spd);
            $('#wind_spd').html("<i class='wi wi-day-windy icon'></i><div class='weather-data'><p>Wind </p><p>" + wind_spd + "km/hr</p></div>");
            var sunrise = data.data["0"].sunrise;
            console.log(sunrise);
            $('#sunrise').html("<i class='wi wi-sunrise icon'></i> <div class = 'weather-data'><p> Sunrise </p>" + sunrise + "AM </p></div> ");
            var sunset = data.data["0"].sunset;
            console.log(sunset);
            $('#sunset').html("<i class='wi wi-sunset icon'></i><div class='weather-data'><p>Sunset</p><p>" + sunset + "PM</p></div>");

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