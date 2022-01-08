
let apiKey = "&appid=8640e73fae150abb200d3b09df7599f2";
// let currURL = "https://api.openweathermap.org/data/2.5/weather?q=";
let cityName = "austin";

let lat = "";
let long = "";
var part = 'hour, min';
var storageList = [];

let input = document.getElementById('searchBtn')

// input.addEventListener('click', function(e) {
//     e.preventDefault;
//     var cityName = document.getElementById('search').value;
//     console.log("success")
//     console.log(cityName);
// })



// recall and store user inputs
var inputStorage = JSON.parse(local.storage.getItem('useStorage'));


// declare var & assign with button element to add event listener


// assign form data to variable on click



// get coordinates for 5 day URI
function getLocation(cityName) {
    var fiveDayURI = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
    fetch(fiveDayURI).then(res => {
        if (Response.ok) {
            res.json().then(function(data) {
                console.log(data);
                lat = data.city.coord.lat;
                long = data.city.coord.lon;
                oneDayData(lat, long);
        })}
    })
}
getLocation(cityName);

function oneDayData(lat, long) {
    let oneDayURI = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${longe}&exclude=${part}&appid=${apiKey}`;
    
    fetch(oneDayURI).then(res => {
        res.json().then(data => {
            console.log(data);
        })
    })
}


function fiveDayData(lat, long) {
    // FiveDayURI = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_key}`;

    fetch(FiveDayURI).then(res => {
            res.json().then(data => {
                console.log(data);
                var lat = data.coord.lat;
                var long = data.coord.lon;
            })
    })
}








// console.log(data)
// var one = document.getElementById("p")
// one.innerText = data.current.humidity;

      
// // declare and assign current weather data
// var current_Humidity = data.current.humidity;
// Document.getElementById("two").innerHTML(current_Humidity);

// var current_TempF = (data.current.temp - 273.15) * (9 / 5) + 32;
// Document.getElementById("two").innerHTML(current_TempF);
// var current_Date = data.current.dt;
// Document.getElementById(current_Humidity.id).then("four").innerHTML("current_WindD");
// var current_WindD = data.current.wind_deg;
// Document.getElementById(current_Humidity.id).then("five").innerHTML("current_WindD");
// var current_WindS = data.current.wind_speed;
// Document.getElementById(current_Humidity.id).then("six").innerHTML("current_WindS");
// var current_Weather = data.current.weather[0].description;
// Document.getElementById(current_Humidity.id).then("seven").innerHTML("current_Weather");

//         // declare and assign daily weather data
//         for (var i = 1; i <= 5; i++) {
//             console.log(data.daily[i]);
//             console.log(data.daily[i].humidity);
//             console.log(data.daily[i].temp);
//             console.log(data.daily[i].dt);
//             console.log(data.daily[i].weather);
//             console.log(data.daily[i].weather.icon);
//             var dailyHumidity = data.daily[i].humidity;
//             var dailyTempF = convert_KtoF(data.daily[i].temp);
//             var date = data.daily[i].dt;
//             var dailyWeather = data.daily[i].weather;
//             var weatherIcon = data.daily[i].weather.icon;
//         }


// let a = current_Humidity
// console.log(a)
/*
    3. get 5-day forecasts
*/
// let userInput = document.getElementById('search-btn')
// search.addEventListener('onClick', (e) => {
//     e.preventDefault() && e.stopPropagation();

    // get user input
    // let inputCity = document.getElementById("search").value
    // complete api uri, let api_uri;

    // CREATE CARD - DEFINE CONTAINTER
    // let newCard = document.createElement("div");
    // newCard.setAttribute("id", `card-${numCards++}`);
    // let cardBody = document.createElement("div");
    // cardBody.setAttribute("class", "card-body");

    // CARD TITLE
    // let cardHeader = document.createElement("h5");
    // cardHeader.setAttribute("class", "card-title");
    // cardHeader.innerHTML = searchKeyword;

    // CARD BODY
    // let cardContent = document.createElement("p");
    // cardContent.setAttribute("class", "card-text");

    // Append card
    // cardBody.appendChild(cardHeader);
    // newCard.appendChild(cardBody);
    // return inputCity;
// })

// console.log(inputCity);

