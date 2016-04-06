# WeatherGov.js
A JQuery weather plugin that uses weather.gov as a source

https://erikflowers.github.io/weather-icons/

http://forecast.weather.gov/MapClick.php?lat=30.470698&lon=-87.232453&FcstType=json

var url = "http://forecast.weather.gov/MapClick.php?lat=30.470698&lon=-87.232453&FcstType=json",
          windDirection = "";
      $.ajax({
         url: url,
         dataType: "jsonp",
         success: function(data){
             console.log(data.currentobservation);
             if(data.currentobservation.Windd <= 11.25 || data.currentobservation.Windd >= 348.75)
                 windDirection = "N";
             else if (data.currentobservation.Windd <= 33.75)
                 windDirection = "NNE";
             else if (data.currentobservation.Windd <= 56.25)
                 windDirection = "NE";
             else if (data.currentobservation.Windd <= 78.75)
                 windDirection = "ENE";
             else if (data.currentobservation.Windd <= 101.25)
                 windDirection = "E";
             else if (data.currentobservation.Windd <= 123.75)
                 windDirection = "ESE";
             else if (data.currentobservation.Windd <= 146.25)
                 windDirection = "SE";
             else if (data.currentobservation.Windd <= 168.75)
                 windDirection = "SSE";
             else if (data.currentobservation.Windd <= 191.25)
                 windDirection = "S";
             else if (data.currentobservation.Windd <= 213.75)
                 windDirection = "SSW";
             else if (data.currentobservation.Windd <= 236.25)
                 windDirection = "SW";
             else if (data.currentobservation.Windd <= 258.75)
                 windDirection = "WSW";
             else if (data.currentobservation.Windd <= 281.25)
                 windDirection = "W";
             else if (data.currentobservation.Windd <= 303.75)
                 windDirection = "WNW";
             else if (data.currentobservation.Windd <= 326.25)
                 windDirection = "NW";
             else if (data.currentobservation.Windd < 348.75)
                 windDirection = "NNW";
    
             console.log("Temperature " + data.currentobservation.Temp);
             console.log("Condition " + data.currentobservation.Weather);
             console.log("Wind " + windDirection + " " + data.currentobservation.Winds + " mph");
             console.log("Condition " + data.currentobservation.Weatherimage.split('.')[0]);
         }
      });
