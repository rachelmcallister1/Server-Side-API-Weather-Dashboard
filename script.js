// add the API URL and key
var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=456a7e9735edfb94add235f30b48824d"
var rachelsApiKey = "456a7e9735edfb94add235f30b48824d";

//connect to the form element in the HTML page and I need to run the search function
var inputElement = document.getElementById("cityInput");
// I need to connect to the items I want to output to on the HTML //update these

var cityNameEl = document.getElementById("cityName")
let cityNameText = document.getElementById("cityName").textContent;

var cityTempEl = document.getElementById("cityTemp")
let cityTextText = document.getElementById("cityTemp").textContent;

var cityWindEl = document.getElementById("cityWind")
let cityWindText = document.getElementById("cityWind").textContent;

var cityHumidityEl = document.getElementById("cityHumdity")
let cityHumidityText = document.getElementById("cityHumdity").textContent;

// function getWeather ()
fetch(requestUrl, {
    method: 'POST',
    body: JSON.stringify({})
}).then(res => {
    return res.json()
})
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))

//Once I've connected to all of those and created the search function, then I will need to create a function to display the elemnts and the needed info on the HTML page. 

// I need the function to find the forcast elemtents 
// I need to connect to the page elemnts that will display the forecast and display elemtents 
// Save the searches to local storage 

// read from local storage to add those elemnents to the page 
// connecting the previous searches to rerun  if they are clicked on 

// add CSS after the fact to display everything 
