(function( $ ) {
    $.fn.weatherGov = function( options ) {
          var settings = $.extend({
            // These are the defaults.
            lat: "30.470698",
            long: "-87.232453",
            container: this["selector"],
            template: '<i id="weatherIcon" class="wi"></i><span id="weatherTemperature"></span><span id="weatherCondition"></span>Today&#8217;s <span id="weatherTodayLow"></span>Today&#8217;s <span id="weatherTodayHigh"></span>WIND <span id="weatherWind"></span>HUMIDITY <span id="weatherHumidity"></span>PRESSURE <span id="weatherPressure"></span>'
        }, options );    
          var  windDirection = "";
      $.ajax({
         url: "http://forecast.weather.gov/MapClick.php?lat="+settings.lat+"&lon="+settings.long+"&FcstType=json",
         dataType: "jsonp",
         success: function(data){
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
             $(settings.container).append(settings.template);
             $("#weatherIcon").addClass(data.currentobservation.Weatherimage.split('.')[0]);
             $("#weatherTemperature").html(data.currentobservation.Temp + "&#176; F");
             $("#weatherCondition").html(data.currentobservation.Weather);
             $("#weatherWind").html(windDirection + " " + data.currentobservation.Winds + " mph");
             $("#weatherTodayLow").html(data.time.tempLabel[0] + " " + data.data.temperature[0] + "&#176; F");
             $("#weatherTodayHigh").html(data.time.tempLabel[1] + " " + data.data.temperature[1] + "&#176; F");
             $("#weatherHumidity").html(data.currentobservation.Relh + "%");
             $("#weatherPressure").html(data.currentobservation.Altimeter);
         }
      });
        return this;
    };
}( jQuery ));

