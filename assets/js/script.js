let API_KEY = "8640e73fae150abb200d3b09df7599f2";
let cityKey = "austin";
let lat = "30.2672";
let lon = "-97.7431";
let BASEURI = "https://api.openweathermap.org/data/2.5/"
let FIVEDAY = BASEURI + `weather?q=${cityKey}&appid=${API_KEY}`;
let ONEDAY = BASEURI + `weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

let storeInputID = [];
let search = document.getElementById('search-btn');
let input = document.getElementById('citySearchForm');

const date = document.getElementById("div1");
// req = $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=London,uk&callback=?');

// req.then(function(resp) {
//   var prefix = 'wi wi-';
//   var code = resp.weather[0].id;
//   var icon = weatherIcons[code].icon;



/******************* 5 DAY API CALL ************************/

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
      alert("Unable");
    }
  });
}
// fiveDayAPI();
/******************* 1 DAY API CALL ************************/

function oneDayWeather(lat, lon) {
  fetch(ONEDAY).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        let currentDate = new Date(data.dt*1000);
        let day =  currentDate.getDate();
        let month = currentDate.getMonth();
        let year = currentDate.getFullYear();
        let dateobj = data.name + "(" + month + "/" + day + "/" + year + ")";
        let todaysDate = JSON.stringify(dateobj);

        let displayDate = document.getElementById('div1')
        let para = document.createElement('p')
        let node = document.createTextNode("hello")
        para.appendChild(node);
        let element = document.getElementById('one');
        element.appendChild.Node = node;
        // displayDate.innerText = todaysDate;
        // let addDate = document.createElement('date');
        // addDate.innerText = "date";

  
        let weatherPic = data.weather[0].icon
        // currentPicEl.setAttribute("src","https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
        // currentPicEl.setAttribute("alt",response.data.weather[0].description);
        // let para = document.createElement('p')
        // let node = document.createTextNode("hello");
        // para.appendChild(node);

        // let element = document.getElementById('p1');
        // element.appendChild(node);

        
        // let today = document.getElementById('p1-title');
        // let element = document.getElementById("div1");
        // element.appendChild(para);
        // daily.appendChild(para)
        // const para = document.createElement("p");
        // const node = document.createTextNode("This is new.");
        // para.appendChild(node);

        // const element = document.getElementById("div1");
        // const child = document.getElementById("p1");
        // element.insertBefore(para, child);
        

        // document.getElementById('one').innerHTML = date;
        let feels_like = data.main.feels_like;
        // let oneday = document.getElementById('one').innderText = feels_like;

        let humidity = data.main.humidity;
        // document.getElementById('one').innerText = humidity;

        let pressure = data.main.pressure;
        // document.getElementById('one').innerText = pressure;

        let temp = data.main.temp;
        // document.getElementById('one').innerText = temp;

        let temp_max = data.main.temp_max;
        document.getElementById('one').innerText = humidity;

        let temp_min = data.main.temp_min;
        document.getElementById('one').innerText = temp_min;

        // let sunrise = data.sys.sunrise;
        // document.getElementById('one').innerText = sunrise;

        // let sunset = data.sys.sunset;
        // document.getElementById('one').innerText = sunset;

        // let description = data.sys.description;
        // document.getElementById('one').innerText = description;
        
        let icon = data.weather.icon;
        document.getElementById('one').innerText = icon;

        let main = data.weather.main;
        document.getElementById('one').innerText = main;

        let deg = data.wind.deg;
        document.getElementById('one').innerText = deg;

        let speed = data.wind.deg;
        document.getElementById('one').innerText = speed;
      });
    }
  });
}
oneDayWeather(lat, lon);

// const newdate = new Date();
// const sunrise = new Date(data.sys.sunrise * 1000); 
// const sunset = new Date(data.sys.sunset * 1000);
/* Get suitable icon for weather */
// if (date.getHours() >= sunrise.getHours() && date.getHours() < sunset.getHours()) {
//   var weatherIconID = `wi wi-owm-day-${result.data.weather[0].id}`;
// }
// else if (date.getHours() >= sunset.getHours()) {
//   var weatherIconID = `wi wi-owm-night-${result.data.weather[0].id}`;
// }
  // If we are not in the ranges mentioned above, add a day/night prefix.
//   if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
//     icon = 'day-' + icon;
//   }
//   // Finally tack on the prefix.
//   icon = prefix + icon;

// if (storeInputID.length != 0) {
//   let storeInputID = localStorage.setItem(inputID);
// } else {
//   console.log('success');
// }


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
