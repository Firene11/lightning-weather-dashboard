var APIKey = "6509d1e4a713732bea01a624be400633";

// five day forecast -- api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
var fiveDayForecastURL = "http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=6509d1e4a713732bea01a624be400633";

var lat = "";
var lon = "";
var city = "Fredericton";

var currentWeather = document.getElementById("current-day");
var searchBttn = document.getElementById("search-button");
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=6509d1e4a713732bea01a624be400633";
var userInput = document.getElementById("user-input");

//Fetch request for data from API
fetch(queryURL)
.then(function(response) {
//Convert to JSON object
    return response.json();
    if (response.status !== 200) {
        document.location.replace("./404.html")
    } else if (userInput.length == 0) {
        result.innerHTML = '<h4 class="msg">The input cannot be empty</h4>';
    } else {
        return response.json();
    }
})
.then(function(data) {
    console.log(data);
    var myCity = data;
    console.log(myCity.weather[0]);
    console.log(myCity.main);
    console.log(myCity.wind);

    //pull data from object
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












//GIVEN a weather dashboard with form inputs WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, 
//the temperature, the humidity, and the the wind speed
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city