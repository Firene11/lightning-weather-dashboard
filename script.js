var APIKey = "6509d1e4a713732bea01a624be400633";

var city = "Fredericton";
var cities = [];
var lat = 45.9454;
var lon = -66.6656;

//https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6509d1e4a713732bea01a624be400633";

// five day forecast -- api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
var fiveDayForecastURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=6509d1e4a713732bea01a624be400633";

// GEOCODING API -- http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
var geoCodeURL = "http://api.openweathermap.org/geo/1.0/direct?q=Miami,Florida,USA&limit=8&appid=6509d1e4a713732bea01a624be400633";

// searches the city to see if it exists in entries
function find(city){
    for (var i=0; i<cities.length; i++){
        if(city.toUpperCase()===cities[i]){
            return -1;
        }
    }
    return 1;
}

var input = document.querySelector("#input-box");
var searchButton = document.querySelector("#search-button");

var cityName = document.querySelector(".city-name");
var iconToday = document.querySelector(".icon-today");
var tempToday = document.querySelector(".temp-today");
var windToday = document.querySelector(".wind-today");
var humidityToday = document.querySelector(".humidity-today");

var currentDay = document.querySelector(".current-day");
currentDay = new Date();

searchButton.addEventListener("click", getWeather);

// Display the curent and future weather to the user after grabing the city form the input text box.
function displayWeather(event){
    event.preventDefault();
    if(input.val().trim()!==""){
        city=input.val().trim();
        todaysWeather(city);
    }
}

//if else statement if bad URL
fetch(queryURL).then(function(response) {
    if (response.status !== 200) {
        console.log(response.status);
    } else {
        return response.json();
    }    
    })
    .then(function(data) {
    console.log(data);
    this.getWeather(data);
    })

//pull the details needed from the API's object
function getWeather(data) {
    var { name } = data;
    //the [0] pulls from the first element of the array
    var { date } = data.timezone;
    var { icon } = data.weather[0];
    var { temp, humidity } = data.main;
    var { speed } = data.wind;
    console.log(name, icon, temp, humidity, speed);
    cityName.innerText = name;
    currentDay.textContent = date;
    iconToday.src = "https://openweathermap.org/img/wn/" + icon + ".png";
    tempToday.innerText = "Temp:" + temp + "°F";
    windToday.innerText = "Wind:" + speed + "MPH";
    humidityToday.innerText = "Humidity:" + humidity + "%";
}






//GIVEN a weather dashboard with form inputs WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, 
//the temperature, the humidity, and the the wind speed
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city