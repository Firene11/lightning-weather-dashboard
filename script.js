var APIKey = "6509d1e4a713732bea01a624be400633";

//Variables connected to DOM
var inputBox = document.querySelector("#input-box");
var searchButton = document.querySelector("#search-button");
var searchHeader = document.querySelector("#search-header");
var cityHeader = document.querySelector(".city-name");
var searchOutput = document.getElementById("#search-history");
var history = document.querySelector("city-name");


//event listener on search button
searchButton.addEventListener("click", getWeather);
searchButton.addEventListener("click", getFiveDays);

//event listener for search history
//searchOutput.addEventListener("click", getWeather);

// Search Event calls weather of city
function getCity(event) {
    event.preventDefault();
    var userInput = inputBox.value.trim();

    if (userInput === " ") {
        alert("Add the name of a city!")
        return;
      }

        updateLocalStorage(userInput);
        //updateSearch();
        getWeather(cityInput);
        getFiveDays();
        inputBox.value = " ";

}
    
function getWeather (lat, lon) {
var userInput = inputBox.value.trim();
//https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
var weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=' + APIKey + '&units=metric';

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
    var lat = data.coord.lat;
    var lon = data.coord.lon;

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
        document.querySelector(".temp-today").innerText = "Temp:" + temp + "°C";
        document.querySelector(".wind-today").innerText = "Wind:" + speed + "MPH";
        document.querySelector(".humidity-today").innerText = "Humidity:" + humidity + "%";
        document.querySelector(".date-today").innerText = date;

})
.catch(function(error) {
    console.log(error);
})
}

function getFiveDays () {
var userInput = inputBox.value.trim();
var fiveDayForecastURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + userInput + '&appid=' + APIKey + '&units=metric';

fetch(fiveDayForecastURL)
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


    var date = dayjs().format ("dddd-MM-DD-YYYY");
    var day1 = dayjs(date).add(1, "day");
    var day2 = dayjs(date).add(2, "day");
    var day3 = dayjs(date).add(3, "day");
    var day4 = dayjs(date).add(4, "day");
    var day5 = dayjs(date).add(5, "day");

    document.querySelector("#date1").innerText = day1;
    document.querySelector("#date2").innerText = day2;
    document.querySelector("#date3").innerText = day3;
    document.querySelector("#date4").innerText = day4;
    document.querySelector("#date5").innerText = day5;

    var temps = document.querySelectorAll(".temps");
    var winds = document.querySelectorAll(".winds");
    var humiditys = document.querySelectorAll(".humiditys");
    var icons = document.querySelectorAll(".icons");
    console.log(data);

//loop through data
for (let i = 0; i < 6; i++) {

    //Display in HTML DAY ONE
    icons[i].src = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
    temps[i].innerText = "Temp:" + data.list[i].main.temp + "°C";
    winds[i].innerText = "Wind:" + data.list[i].wind.speed + "MPH";
    humiditys[i].innerText = "Humidity:" + data.list[i].main.humidity + "%";
}
})
.catch(function(error) {
    console.log(error);
})
}

window.addEventListener("load", function () {
    window.localStorage.getItem("history")
})

//Add code to store cities in localStorage

//add code to append search results
