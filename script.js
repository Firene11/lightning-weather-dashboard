var APIKey = "6509d1e4a713732bea01a624be400633";

var city;

//https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// five day forecast -- api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
var fiveDayForecast = "http://api.openweathermap.org/data/2.5/forecast?q=" + lat + lon + "&appid=" + APIKey;

// GEOCODING API -- http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
var geoCode = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + state + country + "&limit="+ 10 + "&appid=" + APIKey;

fetch(queryURL)

//GIVEN a weather dashboard with form inputs WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, 
//the temperature, the humidity, and the the wind speed
//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city