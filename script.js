var APIKey = "6509d1e4a713732bea01a624be400633";

//https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6509d1e4a713732bea01a624be400633";

// five day forecast -- api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
var fiveDayForecastURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=6509d1e4a713732bea01a624be400633";

var city = "";
var cities = [];
var lat = 45.9454;
var lon = -66.6656;
var cityInput = document.querySelector("#input-box");
var searchButton = document.querySelector("#search-button");
var todaysWeather = document.querySelector(".city-name");
var searchOutput = document.getElementById("#search-output");


searchButton.addEventListener("click", function() {

//Fetch request for data from API
fetch(queryURL)
.then(function(response) {
//Convert to JSON object
    return response.json();
    if (response.status !== 200) {
        document.location.replace("./404.html")
    } else {
        return response.json();
    }
})
.then(function(data) {
    console.log(data);
    //pull data from objext array
    var { name } = data;
    //the [0] pulls from the first element of the array
    var date = dayjs().format ("dddd-MM-DD-YYYY");
    var { icon } = data.weather[0];
    var { temp, humidity } = data.main;
    var { speed } = data.wind;
    console.log(name, icon, temp, humidity, speed);
    //Display in HTML here//
    document.querySelector(".city-name").innerText = name;
    document.querySelector(".icon-today").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp-today").innerText = "Temp:" + temp + "°F";
    document.querySelector(".wind-today").innerText = "Wind:" + speed + "MPH";
    document.querySelector(".humidity-today").innerText = "Humidity:" + humidity + "%";
    document.querySelector(".date-today").innerText = date;
})
.catch(function(error) {
    console.log(error);
})
})
