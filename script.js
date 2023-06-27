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

        //append search history
        var history = document.createElement('h4')
        history.textContent = data.name;
        window.localStorage.setItem("h4", data.name);
        window.localStorage.getItem("h4");
        searchOutput.append(history);
})
.catch(function(error) {
    console.log(error);
})
}

function geoCode() {

//geocode: http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityInput + '&appid=' + APIKey + '&units=metric';

fetch(geoURL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    var lat = data[0].lat;
    var lon = data[0].lon;
})
}

//five day forecast
function forecast() {

    var cityInput = document.querySelector("#input-box").value;
    // five day forecast -- api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    var fiveDayForecastURL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + cityInput + '&appid=' + APIKey + '&units=metric';

    fetch(fiveDayForecastURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        //loop through data
        for (let i = 0; i < data.list.length; i += 5) {

        var date = dayjs().format ("dddd-MM-DD-YYYY");
        var day1 = dayjs(date).add(1, "day");
        var day2 = dayjs(date).add(2, "day");
        var day3 = dayjs(date).add(3, "day");
        var icon = data.list[i].weather[0].icon;
        var temp = data.list[i].main.temp;
        var humidity = data.list[i].main.humidity;
        var wind = data.list[i].wind.speed;
        console.log(temp, humidity, wind);

        //Display in HTML DAY ONE
        document.querySelector(".icon-1").src = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png";
        document.querySelector(".temp1").innerText = "Temp:" + data.list[0].main.temp + "°F";
        document.querySelector(".wind1").innerText = "Wind:" + data.list[0].wind.speed + "MPH";
        document.querySelector(".humidity1").innerText = "Humidity:" + data.list[0].main.humidity + "%";
        document.querySelector("#date1").innerText = day1;
 
        //Display in HTML DAY TWO
        //document.querySelector(".icon-2").src = "https://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png";
        document.querySelector(".temp2").innerText = "Temp:" + data.list[1].main.temp + "°F";
        document.querySelector(".wind2").innerText = "Wind:" + data.list[1].wind.speed + "MPH";
        document.querySelector(".humidity2").innerText = "Humidity:" + data.list[1].main.humidity + "%";
        document.querySelector("#date2").innerText = day2;

        //Display in HTML DAY THREE
        //document.querySelector(".icon-3").src = "https://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + ".png";
        document.querySelector(".temp3").innerText = "Temp:" + data.list[2].main.temp + "°F";
        document.querySelector(".wind3").innerText = "Wind:" + data.list[2].wind.speed + "MPH";
        document.querySelector(".humidity3").innerText = "Humidity:" + data.list[2].main.humidity + "%";
        document.querySelector("#date3").innerText = day3;

        }
    })
}


//event listener on search button
searchButton.addEventListener("click", getWeather);
searchButton.addEventListener('click', forecast);

window.addEventListener("load", function () {
    window.localStorage.getItem("history")
})

//Add code to store cities in localStorage

//add code to append search results


