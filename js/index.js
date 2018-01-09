var lat, lon;
var units = 'metric';

function getTemp() {
    $.ajax({
        url: 'https://api.weatherbit.io/v2.0/current?lat=' + lat + '&lon=' + lon + '&key=3dbeb579e2fe429aa7864396b1c2576b',
        dataType: 'jsonp',
        success: function(data) {
            console.log(data);
        }

    });
    $.ajax({

        url: 'https://api.weatherbit.io/v2.0/current?lat=' + lat + '&lon=' + lon + '&key=3dbeb579e2fe429aa7864396b1c2576b',
        dataType: 'jsonp',
        success: function(data) {
            console.log(data);
            var cityName = data.data["0"].city_name;
            console.log(cityName);
            $('#city').text(cityName);
            var clouds = data.data[0].clouds;
            console.log(clouds);
            $('#clouds').text(clouds);
            var temp = data.data[0].temp;
            console.log(temp);
            $('#temp').text(temp);
            var countryCode = data.data[0].country_code;
            console.log(countryCode);
            $('#countryCode').text(countryCode);
            var sunrise = data.data["0"].sunrise;
            console.log(sunrise);
            $('#sunrise').text(sunrise);
            var sunset = data.data["0"].sunset;
            console.log(sunset);
            $('#sunset').text(sunset);
            var timezone = data.data[0].timezone;
            console.log(timezone);
            $('#timezone').text(timezone);



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