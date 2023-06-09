var APIKey = "6509d1e4a713732bea01a624be400633";

var city = "Miami";
var cities = [];
var lat = "";
var lon = "";
var state = "";
var country = "";

var today = dayjs().format ("MM-DD-YYYY");
$(".current-day").html(today);

//https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6509d1e4a713732bea01a624be400633";

// five day forecast -- api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
var fiveDayForecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=25.7743&-80.1937=&appid=6509d1e4a713732bea01a624be400633";

// GEOCODING API -- http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
var geoCodeURL = "http://api.openweathermap.org/geo/1.0/direct?q=Miami,Florida,USA&limit=8&appid=6509d1e4a713732bea01a624be400633";

var cityOutput = $("#search-output");
var currentDay = $(".current-day");
var fiveDayForecast = $("#card");
var form = $("#city-name");
var searchBtn = $('#search-button');
var leftSidebar = $('#left-sidebar');
var content = $('#content');

//if else statement if bad URL

    fetch(queryURL).then(function(response) {
        if (response.status !== 200) {
            console.log(response.status);
        } else {
            return response.json();
        }
    })

.then(function(data){
    console.log(data);
    }
)

displayWeather(data) {
    var { name }= data;
    var { icon, description } = data.weather;
    var { temp, humidity } = data.main;
    var { speed } = data.wind;
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
