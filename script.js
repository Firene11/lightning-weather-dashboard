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

function geoCode(cityInput) {

var cityInput = document.querySelector("#input-box").value;
//geocode: http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
var geoURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityInput + '&appid=' + APIKey + '&units=metric';

fetch(geoURL)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    var lat = data[0].lat;
    var lon = data[0].lon;
    forecast(lat, lon);
})
}

//five day forecast
function forecast(lat, lon) {
    
    // five day forecast -- api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
    var fiveDayForecastURL = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + APIKey + '&units=metric';

    fetch(fiveDayForecastURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        geoCode();
        //loop through data
        for (let i = 0; i < data.list.length; i += 5) {

        var date = dayjs().format ("dddd-MM-DD-YYYY");
        var day1 = dayjs(date).add(1, "day");
        var day2 = dayjs(date).add(2, "day");
        var day3 = dayjs(date).add(3, "day");
        var day4 = dayjs(date).add(4, "day");
        var day5 = dayjs(date).add(5, "day");
        var icon = data.list[i].weather[0].icon;
        var temp = data.list[i].main.temp;
        var humidity = data.list[i].main.humidity;
        var wind = data.list[i].wind.speed;
        console.log(temp, humidity, wind);

        //Display in HTML DAY ONE
        document.querySelector(".icon1").src = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + ".png";
        document.querySelector(".temp1").innerText = "Temp:" + data.list[0].main.temp + "°C";
        document.querySelector(".wind1").innerText = "Wind:" + data.list[0].wind.speed + "MPH";
        document.querySelector(".humidity1").innerText = "Humidity:" + data.list[0].main.humidity + "%";
        document.querySelector("#date1").innerText = day1;
 
        //Display in HTML DAY TWO
        document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + ".png";
        document.querySelector(".temp2").innerText = "Temp:" + data.list[1].main.temp + "°C";
        document.querySelector(".wind2").innerText = "Wind:" + data.list[1].wind.speed + "MPH";
        document.querySelector(".humidity2").innerText = "Humidity:" + data.list[1].main.humidity + "%";
        document.querySelector("#date2").innerText = day2;

        //Display in HTML DAY THREE
        document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + ".png";
        document.querySelector(".temp3").innerText = "Temp:" + data.list[2].main.temp + "°C";
        document.querySelector(".wind3").innerText = "Wind:" + data.list[2].wind.speed + "MPH";
        document.querySelector(".humidity3").innerText = "Humidity:" + data.list[2].main.humidity + "%";
        document.querySelector("#date3").innerText = day3;

        //Display in HTML DAY FOUR
        document.querySelector(".icon4").src = "https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png";
        document.querySelector(".temp4").innerText = "Temp:" + data.list[3].main.temp + "°C";
        document.querySelector(".wind4").innerText = "Wind:" + data.list[3].wind.speed + "MPH";
        document.querySelector(".humidity4").innerText = "Humidity:" + data.list[3].main.humidity + "%";
        document.querySelector("#date4").innerText = day4;

        //Display in HTML DAY FIVE
        document.querySelector(".icon5").src = "https://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + ".png";
        document.querySelector(".temp5").innerText = "Temp:" + data.list[4].main.temp + "°C";
        document.querySelector(".wind5").innerText = "Wind:" + data.list[4].wind.speed + "MPH";
        document.querySelector(".humidity5").innerText = "Humidity:" + data.list[4].main.humidity + "%";
        document.querySelector("#date5").innerText = day5;

        }
    })
}


//event listener on search button
searchButton.addEventListener("click", getWeather);
searchButton.addEventListener("click", geoCode);
searchButton.addEventListener('click', forecast);

window.addEventListener("load", function () {
    window.localStorage.getItem("history")
})

//Add code to store cities in localStorage

//add code to append search results


