$(document).ready(function(){

  var map;

  function initialize() {
    var mapOptions = {
      zoom: 16
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    // Try HTML5 geolocation
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude; 
        var pos = new google.maps.LatLng(latitude,
                                         longitude);

        $.post('/current_locations', {latitude: latitude, longitude: longitude}, function(result){
        }); 

        markers = []

        $.ajax({url: '/all_secrets', dataType: 'JSON'}).done(function(result){
          result.forEach(function(s){
            var sLatLng = new google.maps.LatLng(s.latitude, s.longitude);
            var sMarker = new google.maps.Marker({
              position: sLatLng,
              map: map,
            });
            markers.push(sMarker)
          });
        });

        // To add the marker to the map, use the 'map' property
        // var marker = new google.maps.Marker({
        //     position: pos,
        //     map: map,
        // });

        var circleOptions = {
          strokeColor: '#55AFED',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#55AFED',
          fillOpacity: 0.35,
          map: map,
          center: pos,
          radius: 250
        };
        // Add the circle for this city to the map.
        cityCircle = new google.maps.Circle(circleOptions);
        
        // var infowindow = new google.maps.InfoWindow({
        //   map: map,
        //   position: pos,
        //   content: 'Location found using HTML5.'
        // });

        map.setCenter(pos);
      }, function() {
        handleNoGeolocation(true);
      });
    } else {
      // Browser doesn't support Geolocation
      handleNoGeolocation(false);
    }
  }

  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
      map: map,
      position: new google.maps.LatLng(60, 105),
      content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});