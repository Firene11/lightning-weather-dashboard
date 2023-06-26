var APIKey = "6509d1e4a713732bea01a624be400633";

//Variables connected to DOM
var searchButton = document.querySelector("#search-button");
var todaysWeather = document.querySelector(".city-name");
var searchOutput = document.getElementById("#search-history");
//Stored cities array
var searchedCities = [];


function getWeather() {

var cityInput = document.querySelector("#input-box").value;
//https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&appid=' + APIKey + '&units=metric';

// five day forecast -- api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
var fiveDayForecastURL = "api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=6509d1e4a713732bea01a624be400633";

//Fetch request for data from API
fetch(weatherURL)
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
    $('#input-box').val('');
    //pull data from object array
    var { name } = data;
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
}

//event listener on search button
searchButton.addEventListener("click", getWeather);

//Add code to store cities in localStorage

//add code to append search results


