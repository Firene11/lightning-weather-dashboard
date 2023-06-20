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
var todaysWeather = document.querySelector(".current-day");

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
/////////////////////////////////////////////////////////////////////////////
//FIVE DAY FORECAST

//Fetch request for data from API
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
    //pull data from object array
    var d = dayjs().format ("MM-DD-YYYY");
    var nextDay1 = dayjs(d).add(1, "day");
    var { icon } = data.list[0].weather[0];
    var { temp, humidity } = data.list[0].main;
    var { speed } = data.list[0].wind;
    console.log(icon, temp, humidity, speed);
    //Display in HTML here//

    document.querySelector(".icon-1").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp1").innerText = "Temp:" + temp + "°F";
    document.querySelector(".wind1").innerText = "Wind:" + speed + "MPH";
    document.querySelector(".humidity1").innerText = "Humidity:" + humidity + "%";
    document.querySelector("#day-1").innerText = nextDay1;

    //DAY 2
    var d = dayjs().format ("MM-DD-YYYY");
    var nextDay2 = dayjs(d).add(2, "day");
    var { icon } = data.list[1].weather[0];
    var { temp, humidity } = data.list[1].main;
    var { speed } = data.list[1].wind;
    console.log(icon, temp, humidity, speed);
    //Display in HTML here//
    
    document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".temp2").innerText = "Temp:" + temp + "°F";
    document.querySelector(".wind2").innerText = "Wind:" + speed + "MPH";
    document.querySelector(".humidity2").innerText = "Humidity:" + humidity + "%";
    document.querySelector("#day-2").innerText = nextDay2;

     //DAY 3
     var d = dayjs().format ("MM-DD-YYYY");
     var nextDay3 = dayjs(d).add(3, "day");
     var { icon } = data.list[2].weather[0];
     var { temp, humidity } = data.list[2].main;
     var { speed } = data.list[2].wind;
     console.log(icon, temp, humidity, speed);
     //Display in HTML here//
     
     document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/" + icon + ".png";
     document.querySelector(".temp3").innerText = "Temp:" + temp + "°F";
     document.querySelector(".wind3").innerText = "Wind:" + speed + "MPH";
     document.querySelector(".humidity3").innerText = "Humidity:" + humidity + "%";
     document.querySelector("#day-3").innerText = nextDay3;

     //DAY 4
     var d = dayjs().format ("MM-DD-YYYY");
     var nextDay4 = dayjs(d).add(4, "day");
     var { icon } = data.list[3].weather[0];
     var { temp, humidity } = data.list[3].main;
     var { speed } = data.list[3].wind;
     console.log(icon, temp, humidity, speed);
     //Display in HTML here//
     
     document.querySelector(".icon4").src = "https://openweathermap.org/img/wn/" + icon + ".png";
     document.querySelector(".temp4").innerText = "Temp:" + temp + "°F";
     document.querySelector(".wind4").innerText = "Wind:" + speed + "MPH";
     document.querySelector(".humidity4").innerText = "Humidity:" + humidity + "%";
     document.querySelector("#day-4").innerText = nextDay4;

     //DAY 5
     var d = dayjs().format ("MM-DD-YYYY");
     var nextDay5 = dayjs(d).add(5, "day");
     var { icon } = data.list[4].weather[0];
     var { temp, humidity } = data.list[4].main;
     var { speed } = data.list[4].wind;
     console.log(icon, temp, humidity, speed);
     //Display in HTML here//
     
     document.querySelector(".icon5").src = "https://openweathermap.org/img/wn/" + icon + ".png";
     document.querySelector(".temp5").innerText = "Temp:" + temp + "°F";
     document.querySelector(".wind5").innerText = "Wind:" + speed + "MPH";
     document.querySelector(".humidity5").innerText = "Humidity:" + humidity + "%";
     document.querySelector("#day-5").innerText = nextDay5;

})
.catch(function(error) {
    console.log(error);
})

    



///////////////////////////////////////////////////////////////////////////////
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

getWeather();




