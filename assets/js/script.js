// api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}

// let waUrl = "https://www.api.openweathermap.org/data/2.5/forecast?id=";
// let appId = "appid=ca8dbf245cac1633722ad397fb7ba9e3";
// let city;

// var container = document.querySelector(".container");
// container.addEventListener("click", function(event) {
// });

var badRequestUrl = "https://www.api.github.com/unicorns";
var redirectUrl = "./404.html";
let requestUrl =
    "api.openweathermap.org/data/2.5/onecall?lat=38.8&lon=12.09&callback=test";
let reponsedata = document.getElementById("response-text");
let redirectt = "./404.html";

function getApi(requestUrl) {
    fetch(requestUrl).then(function (response) {
        console.log(response);
        if (response.status === 404) {
            responseText.textContent = response.status;
            document.location.redirectUrl(redirectt);
        }
        return response.json();
    });
}

getAPI(statusCode);
