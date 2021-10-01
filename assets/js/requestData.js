Fields in API response for current and historical weather
Example of API response             


{
"id":88319,"dt":1345284000,"name":"Benghazi",
    "coord":{"lat":32.12,"lon":20.07},
    "main":{"temp":306.15,"pressure":1013,"humidity":44,
    "temp_min":306,"temp_max":306},
    "wind":{"speed":1,"deg":-7},
    "weather":[
        {"id":520,"main":"rain","description":"light intensity 
        shower rain","icon":"09d"},
        {"id":500,"main":"rain","description":"light rain","icon":
        "10d"},
        {"id":701,"main":"mist","description":"mist","icon":"50d"}
              ],
    "clouds":{"all":90},
    "rain":{"3h":3}
}


Fields in API response for 5 day / 3 hour forecast
Example of API response
                   
{
    "cod":"200","message":0.0045,
    "city":{"id":1851632,"name":"Shuzenji",
    "coord":{"lon":138.933334,"lat":34.966671},
    "country":"JP"},
    "cnt":38,
    "list":[{
            "dt":1406106000,
            "main":{
                "temp":298.77,
                "temp_min":298.77,
                "temp_max":298.774,
                "pressure":1005.93,
                "sea_level":1018.18,
                "grnd_level":1005.93,
                "humidity":87},
            "weather":[{"id":804,"main":"Clouds",
            "description":"overcast clouds","icon":"04d"}],
            "clouds":{"all":88},
            "wind":{"speed":5.71,"deg":229.501},
            "sys":{"pod":"d"},
            "dt_txt":"2014-07-23 09:00:00"}
            ]
  }