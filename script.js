var APIKey = "6509d1e4a713732bea01a624be400633";

var city = "";
var lat = "";
var lon = "";
var state = "";
var country = "";

//https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=Miami&appid=6509d1e4a713732bea01a624be400633";

// five day forecast -- api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
var fiveDayForecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=25.7743&-80.1937=&appid=6509d1e4a713732bea01a624be400633";

// GEOCODING API -- http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
var geoCodeURL = "http://api.openweathermap.org/geo/1.0/direct?q=Miami,Florida,USA&limit=8&appid=6509d1e4a713732bea01a624be400633";

var searchText = document.getElementById("#search-text");
var searchBtn = document.getElementById("#search-button");
var cityNameOutput = document.getElementById("search-output");
var currentDay = document.getElementById(".current-day");
var fiveDayForecast = document.getElementById("#card");

fetch(queryURL)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
})


//GIVEN a weather dashboard with form inputs WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, 
//the temperature, the humidity, and the the wind speed
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city
