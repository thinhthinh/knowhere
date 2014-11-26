$(document).ready(function(){

  var map;

  function initialize() {

    var styles = [
        {
          "stylers": [
            { "visibility": "on" }
          ]
        },{
          "featureType": "landscape.natural",
          "stylers": [
            { "visibility": "simplified" },
            { "color": "#f0f0f0" }
          ]
        },{
          "featureType": "water",
          "stylers": [            
            { "visibility": "simplified" },
            { "color": "#C2E7F5" }
          ]
        },{
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            { "visibility": "simplified" },
            { "color": "#ffffff" }
          ]
        },{
          "featureType": "road.local",
          "elementType": "geometry.stroke",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "road.local",
          "elementType": "labels.icon",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "elementType": "labels.text.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#646464" }
          ]
        },{
          "featureType": "road.local",
          "elementType": "geometry.fill",
          "stylers": [
            { "visibility": "on" },
            { "weight": 1 },
            { "color": "#ffffff" }
          ]
        },{
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            { "lightness": 90 },
            { "color": "#d7d7d7" },
            { "visibility": "off" }
          ]
        },{
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            { "visibility": "on" },
            { "color": "#ffffff" }
          ]
        },{
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
            { "visibility": "on" },
            { "color": "#b8b8b8" }
          ]
        },{
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [
            { "visibility": "on" },
            { "lightness": 60 },
            { "saturation": -90 },
            { "gamma": 0.90 }
          ]
        }
      ];

    var styledMap = new google.maps.StyledMapType(styles, {
        name: "Styled Map"
    });

    var mapOptions = {
      zoom: 14
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');      

    // Try HTML5 geolocation
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude; 
        var pos = new google.maps.LatLng(latitude,
                                         longitude);

        $.post('/current_locations', {latitude: latitude, longitude: longitude}, function(result){
        }); 

        var $mapcanvas = $('#map-canvas');
        markers = [];
        $.ajax({url: $mapcanvas.data('url'), dataType: 'JSON'}).done(function(result){
          result.forEach(function(s){
            var sLatLng = new google.maps.LatLng(s.latitude, s.longitude);
            var sMarker = new google.maps.Marker({
              position: sLatLng,
              map: map
            });
            markers.push(sMarker);
          });
        });

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

        cityCircle = new google.maps.Circle(circleOptions);
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