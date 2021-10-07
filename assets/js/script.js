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
    fetch(api_five_day_url).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
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
function convert_KtoF(dailyTempK) {
    dailyTempK * (9 / 5 + 32);
}

function getOneDay(lat, long) {
    let oneDayURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${part}${api_key}`;
    fetch(oneDayURL).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log(data);
                // declare and assign current weather data
                let current_Humidity = data.current.humidity;
                let current_TempF = (data.current.temp - 273.15) * (9 / 5) + 32;
                let current_Date = data.current.dt;
                let current_WindD = data.current.wind_deg;
                let current_WindS = data.current.wind_speed;
                let current_Weather = data.current.weather[0].description;
                console.log(current_Humidity, current_TempF, current_Date);

                // declare and assign daily weather data
                for (var i = 1; i <= 5; i++) {
                    console.log(data.daily[i]);
                    console.log(data.daily[i].humidity);
                    console.log(data.daily[i].temp);
                    console.log(data.daily[i].dt);
                    console.log(data.daily[i].weather);
                    console.log(data.daily[i].weather.icon);
                    let dailyHumidity = data.daily[i].humidity;
                    let dailyTempF = convert_KtoF(data.daily[i].temp);
                    let date = data.daily[i].dt;
                    let dailyWeather = data.daily[i].weather;
                    let weatherIcon = data.daily[i].weather.icon;
                }
            });
        }
    });
}

/*
    3. get 5-day forecasts
*/
function getFiveDay() {
    // fiveDayURL
    // fetch().then(function (response) { })
}

/*
    4. append response data to dashboard
*/
