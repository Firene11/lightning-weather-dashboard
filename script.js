var APIKey = "6509d1e4a713732bea01a624be400633";

var city = "";
var lat = "";
var lon = "";
var state = "";
var country = "";

//https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=Miami&appid=6509d1e4a713732bea01a624be400633";

// five day forecast -- api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
var fiveDayForecastURL = "http://api.openweathermap.org/data/2.5/forecast?q=25.7743&-80.1937=&appid=6509d1e4a713732bea01a624be400633";

// GEOCODING API -- http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
var geoCodeURL = "http://api.openweathermap.org/geo/1.0/direct?q=Miami,Florida,USA&limit=8&appid=6509d1e4a713732bea01a624be400633";

var searchBtn = document.getElementById("#search-button");
var cityNameOutput = document.getElementById("#search-output");
var currentDay = document.getElementById(".current-day");
var fiveDayForecast = document.getElementById("#card");
var form = document.querySelector("#city-name");


function formSubmit(event) {
    console.log("Form Submitted");
    event.preventDefault();


    
  }
  
  form.addEventListener("submit", formSubmit);


    fetch(queryURL).then(function(response) {
        if (response.status !== 200) {
            console.log(response.status);
        } else {
            return response.json();
        }
    })


// to append to html document, need to figure out if i need to fetch each time. Maybe link all of these then statements
//into one function? I think?

fetch(queryURL)
.then(function(response) {
    //convert to JSON object
    return response.json();
})
.then(function(data){
    console.log(data);
    //display in html here
    var cityName = data.main;
    for(var i = 0; i = cityName.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = cityName[i].name;
        HTMLDataListElement.appendChild(listItem);
    }
})
.catch(function(error) {
    //incase there's an error
    console.log(error);
});



//GIVEN a weather dashboard with form inputs WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, 
//the temperature, the humidity, and the the wind speed
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city
