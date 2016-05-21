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

//this is called a "object constructor function":
function location(nickname, latitude, longitude, date, forecasts) {     
    this.nickname = nickname;
    this.latitude latitude;
    this.longitude = longitude;  
    this.date = date;
    this.forecasts = null;
};

// Dummy locations:
var location1 = new location("Monash", 37.9116, 145.1340, Date.prototype.simpleDateString());

var location2 = new location("Parliament House", 35.3082, 149.1244, Date.prototype.simpleDateString());

//Add location object to locationsArray                  
locationsArray.push(location1);
locationsArray.push(location2);

//HELP!.... 
var forecasts = { 
    latitude,longitude,date: //forecast returned by API"
  
    }


//TBC:
///////////////////////////////////////
// Testing calling methods in locationWeatherCache():
locationWeatherCache.locationAtIndex(0); //looks for first location
LocationWeatherCache.addLocation(location1.latitude, location1.longitude, location1.nickname);
LocationWeatherCache.removeLocationAtIndex(1);

LocationWeatherCache(locations()

    
    
    

///////////////////////////////////////
//FROM GEOCODER
/*
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


