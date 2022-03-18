
/*NOTES PLEASE READ: the idea is to get the data from the quiz and do a search of that keyword of all places around and find directions to one of them
This is not currently duable right now because the amount of data required from that search could charge me in real currency because you
have to pay to use google's resources. So after the user takes the quiz, they get their orgin from current location, and their destination
is not based on their data from quiz yet. It is instead based on troy uni. This is a place holder just to complete the assignment.*/

//get the user's current location
navigator.geolocation.getCurrentPosition(
  function (position)
  {
   
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    const destination = { lat: 31.806484, lng: -85.968628 };//troy university is a place holder.
    const orgin = {lat,lng};
    
   // The map, centered at user's current location
    const map = new google.maps.Map(document.getElementById("map"), 
    {
      zoom: 8,
      center: destination,
    });
    

    //info windows to show start and destination
    infoWindow = new google.maps.InfoWindow();
    infoWindow2 = new google.maps.InfoWindow();
    infoWindow.setPosition(orgin);
    infoWindow.setContent("Current Location");
    infoWindow.open(map);
    infoWindow2.setPosition(destination);
    infoWindow2.setContent("Destination");
    infoWindow2.open(map);

    /* directions source: google API services*/
    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map); 
    // Existing map object displays directions
    // Create route from existing points used for markers
    const route = {
      origin: orgin,
      destination: destination,
      travelMode: 'DRIVING'
  }

  directionsService.route(route,
    function(response, status) 
    { // anonymous function to capture directions
      if (status !== 'OK') 
      {
        window.alert('Directions request failed due to ' + status);
        return;
      } 
      else 
      {
        directionsRenderer.setDirections(response); // Add route to the map
        var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
        if (!directionsData) 
        {
          window.alert('Directions request failed');
          return;
        }
        else 
        {
          document.getElementById('msg').innerHTML += " Driving distance is " + directionsData.distance.text + " (" + directionsData.duration.text + ").";
        }
      }
    });

  },

  function errorCallback(error) /*just incase there was an error fetching location or displaying map*/
  {
    console.log(error)
  });

  
    

