var APIKey = "6509d1e4a713732bea01a624be400633";

var city = "Fredericton";
var cities = [];

//https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6509d1e4a713732bea01a624be400633";

var cityName = document.querySelector(".city-name");
var iconToday = document.querySelector(".icon-today");
var tempToday = document.querySelector(".temp-today");
var windToday = document.querySelector(".wind-today");
var humidityToday = document.querySelector(".humidity-today");

var currentDay = document.querySelector(".current-day");
currentDay = new Date();

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
    this.todaysWeather(data);
    })

//pull the details needed from the API's object
function todaysWeather(data) {
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

//set up dates
function setDates () {
var { today, next1, next2, next3, next4, next5 } = dayjs().format ("MM-DD-YYYY");
$(".current-day").html(today);
$(".day1").html(next1);
$(".day2").html(next2);
$(".day3").html(next3);
$(".day4").html(next4);
$(".day5").html(next5);
}



// five day forecast -- api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
var fiveDayForecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=25.7743&-80.1937=&appid=6509d1e4a713732bea01a624be400633";

// GEOCODING API -- http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
var geoCodeURL = "http://api.openweathermap.org/geo/1.0/direct?q=Miami,Florida,USA&limit=8&appid=6509d1e4a713732bea01a624be400633";


//GIVEN a weather dashboard with form inputs WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, 
//the temperature, the humidity, and the the wind speed
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city