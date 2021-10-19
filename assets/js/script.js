/* 
    DECLARATIONS:  
*/
let api_root = "https://api.openweathermap.org/data/2.5/forecast";
let api_query = "?q=";
let api_input = "houston"; // hard coded for example
let api_key = "&appid=ca8dbf245cac1633722ad397fb7ba9e3";
let lat, long, part;

/*
    1. api "fetch" inside function to get lat and long data. function is called after closing "}"
        **https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}**
*/
function getLocationData() {
let api_five_day_url = api_root + api_query + api_input + api_key;
fetch(api_five_day_url)
    .then(function (response) {
        if (response.ok) {
    response.json()
        .then(function (data) {
            console.log(data);
            lat = data.city.coord.lat;
            console.log(lat);
            long = data.city.coord.lon;
            console.log(long);
            getOneDay(lat, long);
            });
        }
    });
}
getLocationData();

/*
    2. take coordinates from getLocationData() function and plug into 2nd api call. Drill down on response array for relevent data 
*/
function getOneDay(lat, long) {
    let oneDayURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${part}${api_key}`;
    fetch(oneDayURL).then(function (response) {
        if (response.ok) {response.json().then(
            function (data) {
                console.log(data)
            })
            return data
        }
        var one = document.getElementById("p")
        one.innerText = data.current.humidity;



      
        // declare and assign current weather data
        var current_Humidity = data.current.humidity;
        Document.getElementById("two").innerHTML(current_Humidity);

        var current_TempF = (data.current.temp - 273.15) * (9 / 5) + 32;
        Document.getElementById("two").innerHTML(current_TempF);
        var current_Date = data.current.dt;
        Document.getElementById(current_Humidity.id).then("four").innerHTML("current_WindD");
        var current_WindD = data.current.wind_deg;
        Document.getElementById(current_Humidity.id).then("five").innerHTML("current_WindD");
        var current_WindS = data.current.wind_speed;
        Document.getElementById(current_Humidity.id).then("six").innerHTML("current_WindS");
        var current_Weather = data.current.weather[0].description;
        Document.getElementById(current_Humidity.id).then("seven").innerHTML("current_Weather");

                // declare and assign daily weather data
                for (var i = 1; i <= 5; i++) {
                    console.log(data.daily[i]);
                    console.log(data.daily[i].humidity);
                    console.log(data.daily[i].temp);
                    console.log(data.daily[i].dt);
                    console.log(data.daily[i].weather);
                    console.log(data.daily[i].weather.icon);
                    var dailyHumidity = data.daily[i].humidity;
                    var dailyTempF = convert_KtoF(data.daily[i].temp);
                    var date = data.daily[i].dt;
                    var dailyWeather = data.daily[i].weather;
                    var weatherIcon = data.daily[i].weather.icon;
                }
    })
// let a = current_Humidity
// console.log(a)
/*
    3. get 5-day forecasts
*/
document.getElementById("submit_btn").addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    // get user input
    let inputCity = document.getElementById("search").value;
    // complete api uri, let api_uri;

    // CREATE CARD - DEFINE CONTAINTER
    // let newCard = document.createElement("div");
    // newCard.setAttribute("id", `card-${numCards++}`);
    // let cardBody = document.createElement("div");
    // cardBody.setAttribute("class", "card-body");

    // CARD TITLE
    let cardHeader = document.createElement("h5");
    cardHeader.setAttribute("class", "card-title");
    cardHeader.innerHTML = searchKeyword;

    // CARD BODY
    // let cardContent = document.createElement("p");
    // cardContent.setAttribute("class", "card-text");

    // Append card
    // cardBody.appendChild(cardHeader);
    // newCard.appendChild(cardBody);
    return inputCity;
});
// console.log(inputCity);


 // 4. append response data to dashboard
