var lat, lon;
var units = 'metric';

function getTemp() {
    $.ajax({
        url: 'https://api.weatherbit.io/v2.0/current?lat=' + lat + '&lon=' + lon + '&key=3dbeb579e2fe429aa7864396b1c2576b',
        dataType: 'jsonp',
        success: function(data) {
            console.log(data);

            function cToF(celsius) {
                var cTemp = celsius;
                var cToFahr = cTemp * 9 / 5 + 32;
                var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
                console.log(message);
            }

            function fToC(fahrenheit) {
                var fTemp = Math.round(fahrenheit);
                var fToCel = Math.round(fTemp - 32) * 5 / 9;
                var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
                console.log(message);
            }
            cToF(60);
            fToC(45);
            var cityName = data.data["0"].city_name;
            var temp = data.data[0].temp;
            var app_temp = data.data[0].app_temp;
            $('#temp').html("<span class='temp-value'>" + temp + '<sup> &degC </sup></span>');
            var countryCode = data.data[0].country_code;
            $('#city').text(cityName + ", " + countryCode);
            var description = data.data[0].weather.description;
            $('#description').text(description);
            var icon = data.data[0].weather.icon;
            icons_url = "https://www.weatherbit.io/static/img/icons/" + icon + ".png";
            $('#icon').html('<img src="' + icons_url + '"</img>');
            $('#feelsLike').html("Feels Like  <span style='font-size:1.5rem'> " + app_temp + "</span>");
            var wind_spd = data.data[0].wind_spd;
            $('#wind_spd').html("<i class='wi wi-windy icon'></i><div class='weather-data'><p>Wind </p><p>" + wind_spd + " km/hr</p></div>");
            var sunrise = data.data["0"].sunrise;
            $('#sunrise').html("<i class='wi wi-sunrise icon'></i> <div class = 'weather-data'><p> Sunrise </p><p>" + sunrise + " AM </p></div> ");
            var sunset = data.data["0"].sunset;
            $('#sunset').html("<i class='wi wi-sunset icon'></i><div class='weather-data'><p>Sunset</p><p>" + sunset + " PM</p></div>");
            var pressure = data.data["0"].pres;
            $('#pressure').html("<i class='wi wi-barometer icon'></i> <div class = 'weather-data'><p> Pressure </p><p>" + pressure + " mb </p></div> ");
            var humidity = data.data["0"].rh;
            $('#humidity').html("<i class='wi wi-humidity icon'></i> <div class = 'weather-data'><p> Humidity </p><p>" + humidity + " % </p></div> ");
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