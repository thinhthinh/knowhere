$(document).ready(function(){

  function getLocation() {
    navigator.geolocation.getCurrentPosition(sendPosition)
  };

  function sendPosition(position) {
    

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude; 
    $.post('/current_locations', {latitude: latitude, longitude: longitude}, function(result){
      console.log(result)
    }); 
  };
  
  getLocation();

});