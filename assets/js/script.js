const dotenv  = require('dotenv');

let key = API;

let BASEURI = "https://api.openweathermap.org/data/2.5/"
let FIVEDAY = BASEURI + `weather?q=${cityKey}&appid=${key}`;
let ONEDAY = BASEURI + `weather?lat=${lat}&lon=${lon}&appid=${key}`;




let cityKey = 'austin';
let part = 'hour, min';
let lat = '30.2672';
let lon = '-97.7431';

let storeInputID = [];



let search = document.getElementById('search-btn');
let input = document.getElementById('citySearchForm').value;
// .addEventListener('citySearchForm').value;


if (storeInputID.length != 0) {
  let storeInputID = localStorage.setItem(inputID);
} else {
  console.log('success');
}

function fiveDayAPI(cityKey) {
  fetch(FIVEDAY).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        let lat = data.coord.lat;
        let lon = data.coord.lon;
        oneDayWeather(lat, lon);
      });
    } else {
      alert(
        'API call failed with: ' +
          response.status +
          '.' +
          ' Try again later or email me at vlsulliv@yahoo.com',
      );
    }
  });
}

/******************* 1 DAY API CALL ************************/

function oneDayWeather(lat, lon) {
  fetch(ONEDAY).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        let feels_like = data.main.feels_like;
        let humidity = data.main.humidity;
        let pressure = data.main.pressure;
        let temp = data.main.temp;
        let temp_max = data.main.temp_max;
        let temp_min = data.main.temp_min;
        let sunrise = data.sys.sunrise;
        let sunset = data.sys.sunset;
        let description = data.sys.description;
        let icon = data.weather.icon;
        let main = data.weather.main;
        let deg = data.wind.deg;
        let speed = data.wind.deg;
        console.log(feels_like);
        console.log(humidity);
        console.log(pressure);
        console.log(temp);
        console.log(temp_max);
        console.log(temp_min);
        console.log(sunrise);
        console.log(sunset);
        console.log(description);
        console.log(icon);
        console.log(main);
        console.log(deg);
        console.log(speed);
      });
    }
  });
}
oneDayWeather(lat, lon);

/******************* END API CALLS ************************/

// get coordinates for 5 day URI
// function getLocation(cityID) {
//     fetch(FIVEDAY).then(res => {
//         if (Response.status == 200) {
//             res.json().then(function(data) {
//                 console.log(data);
//                 FIVEDAY();
//                 var lat = data.city.coord.lat;
//                 var lon = data.city.coord.lon;

//         })}
//     })
// }

// // fetch oneDayData
// function oneDayData(lat, long) {
//     fetch(ONEDAY).then(res => {
//         res.json().then(data => {
//             console.log(data);
//         })
//     })
// }

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
