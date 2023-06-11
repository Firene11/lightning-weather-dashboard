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

var searchOutput = document.getElementById("#search-output");

var input = document.querySelector("#input-box");
var searchButton = document.querySelector("#search-button");

function getWeather(data) {

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
    //Display in HTML here
    var dataArray = data.response;
    for(var i = 0; i < dataArray.length; i++) {
        var cityList = document.createElement("li");
        cityList.textcontent = dataArray[i].name;
        searchOutput.appendChild(cityList);
    }
})
.catch(function(error) {
    console.log(error);
})

//add event listener on click of search button
searchButton.addEventListener("click", search);

//Function for text input if it's a city or not
function search() {
    var cities = input.Value;
    if (cities === "") {
        console.log("error");
        return;
}};
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