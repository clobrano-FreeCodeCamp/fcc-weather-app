var script = document.createElement('script');
var appid = "ae483ebbeef46869aa7c8181432ba7d1";

function parseResponse(response){
  $("#city").html("Weather in " + response.city.name);
  var today = new Date();
  var dayNumber = today.getDay();
  for (i = 0; i < 5; i++) {
        day = response.list[i];

        if (i == 0)
            dayName = "Today"
        else if (i == 1)
            dayName = "Tomorrow"
        else
            dayName = getDayNumberName((dayNumber + i) % 7);

        celsius = kelvin2celsius(day.main.temp);
        weather = day.weather[0].main;
        details = day.weather[0].description;

        console.log(i + " " + dayName + " " + celsius + " " + weather + " " + details);

        selectWeatherIcon(i, weather);
        setWeatherOfDay(i, dayName, celsius, weather, details);
  }
}

function setWeatherOfDay(id, dayName, celsius, weather, details) {
    $("#status" + id).append("<p>" + dayName + "</p>");
    $("#status" + id).append("<p>" + celsius + "&deg C</p>");
    $("#status" + id).append("<p>" + details + "</p>");
}

function selectWeatherIcon(dayNumber, weatherCondition) {
    if (weatherCondition == "Clear") {
        $("#card_day" + dayNumber).addClass("card-sunny");
        $("#weather_day" + dayNumber).addClass("sunny");
    }
    if (weatherCondition == "Rain") {
        $("#card_day" + dayNumber).addClass("card-rain");
        $("#weather_day" + dayNumber).addClass("rain");
    }
    if (weatherCondition == "Snow") {
        $("#card_day" + dayNumber).addClass("card-snow");
        $("#weather_day" + dayNumber).addClass("snow");
    }
    if (weatherCondition == "Clouds") {
        $("#card_day" + dayNumber).addClass("card-snow");
    }
    if (weatherCondition == "Storm") {
        $("#card_day" + dayNumber).addClass("card-storm");
        $("#weather_day" + dayNumber).addClass("storm");
    }
}

function getDayNumberName(n) {
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return days[n];
}

function createJsonpQuery(position) {
    var query = "api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude;
    // Test query
    //var query = "api.openweathermap.org/data/2.5/forecast?q=Nebraska";
    script.src = "http://" + query + "&APPID=" + appid + "&callback=parseResponse";
    console.log(script.src);
}

function kelvin2celsius(ktemp) {
    return Math.round(ktemp - 273.15);
}

function isNight() {
    return false;
}

(function() {
    console.log('loaded');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(createJsonpQuery);
        document.body.appendChild(script);
    } else {
        console.log("Geolocation not supported");
    }
})();
