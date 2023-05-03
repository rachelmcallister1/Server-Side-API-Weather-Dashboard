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

// var submitButton = document.getElementById("cityInput")


function fetchWeather(city) {
    var requestUrl = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=456a7e9735edfb94add235f30b48824d&units=imperial"
    var rachelsApiKey = "456a7e9735edfb94add235f30b48824d";

    fetch(requestUrl, {
        method: 'GET',
    })
        .then(res => {
            return res.json();
        })
        .then(data => {
            cityNameEl.innerText = data.city.name //adding name of city on screen 
            cityTempEl.innerText = data.list[0].main.temp + "Fahrenheit"
            cityWindEl.innerText = data.list[0].wind.speed + "MPH"
            cityHumidityEl.innerText = data.list[0].main.humidity + "%"
            console.log(data)
            var index = 1
            for (i = 7; i < data.list.length; i = i + 8) {
                document.getElementById("date" + index).innerText = data.list[i].dt
                document.getElementById("temp" + index).innerText = data.list[i].main.temp + " Fahrenheit"
                document.getElementById("wind" + index).innerText = data.list[i].wind.speed + " MPH"
                document.getElementById("wind" + index).innerText = data.list[i].main.humidity + " %"
                index++ //add dayjs after innertext
            }
        }) //putting in curly brackets so we can do more than one line 
        .catch(error => console.log(error))
}


//Once I've connected to all of those and created the search function, then I will need to create a function to display the elemnts and the needed info on the HTML page. 

// I need the function to find the forcast elemtents 
// I need to connect to the page elemnts that will display the forecast and display elemtents 
// Save the searches to local storage 

// read from local storage to add those elemnents to the page 
// connecting the previous searches to rerun  if they are clicked on 

// add CSS after the fact to display everything 

// create a function that will run when the form is submitted

function displayMedia() {
    fetchWeather();
}
// 1. addEventListener to form submit
const submitButton = document.querySelector('#submitbutton');
submitButton.addEventListener('click', function (event) {
    console.log('Button Clicked!');
    event.preventDefault()
    var city = inputElement.value
    //add local storage here, take city etc. 
    fetchWeather(city)

})


// 1. addEventListener to form submit
// 2. create function that will run when the form is submitted
// 3. This function should get the values found inside the input element of the form and pass it to another function that then makes a call to the openweather api using it
// So this will take care of a user inputting a city and once user clicks on submit the function should fetch data for that city from the openweather api



