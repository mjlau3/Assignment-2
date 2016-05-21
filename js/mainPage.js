// Code for the main app page (locations list).

// This is sample code to demonstrate navigation.
// You need not use it for final app.

function viewLocation(locationName)
{
    // Save the desired location to local storage
    localStorage.setItem(APP_PREFIX + "-selectedLocation", locationName); 
    // And load the view location page.
    location.href = 'viewlocation.html';
}
 // OUR CODE:
var locationsArray = [];

//var location = LocationWeatherCache.getWeatherAtIndexForDate(index, date, weatherData)

var location {          //location OBJECT
    
    nickname: //input from user
    latitude: //input from user geocoder
    longitude: //input from user 
    date: //current
    forecasts:null
};


var forecasts {        // contains weather forecast from API
    
    var data = LocationWeatherCache.getWeatherAtIndexForDate(index, date, callback)    
}


//Add location object to locationsArray                     
locationsArray.push(location);

///////////////////////////////////////
//FROM GEOCODER
var latitude = //user input
var longitude = //input
var date = //input
         
var newLocation = LocationWeatherCache.addLocation(latitude, longitude, nickname)





//////////////////////////////////////
/*GEOCODER EXAMPLE FROM GOOGLE WEBSITE:
function initialMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: -37.9, lng: 145.1}
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

initialMap;
*/


