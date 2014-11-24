$(document).ready(function(){
  $("#song-input").hide();

  $("#secret_message").keydown(function(){
    var wordCount = 250-($(this).val().length);
    $("#count").text(function(){
      if (wordCount < 0){
        $(".submit_button").hide();
      }else {
        $(".submit_button").show();
      }
      return wordCount;
    });
  });

  $('#song-checkbox').click(function() {
      var $this = $(this);
          // $this will contain a reference to the checkbox   
      if ($this.is(':checked')) {
          // the checkbox was checked
          $("#song-input").show(); 
        } else {
          // the checkbox was unchecked
          $("#song-input").hide();
      }
  });
});

var autocomplete;

function initialize() {
  // Create the autocomplete object, restricting the search
  // to geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {HTMLInputElement} */(document.getElementById('secret_address')),
      { types: ['geocode'] });
  google.maps.event.addListener(autocomplete, 'place_changed', function() {
    fillInAddress();
  });

  // var input = document.getElementById('secret_address');
  // google.maps.event.addDomListener(input, 'keydown', function(e){
  //   if (e.keyCode == 13){
  //     e.preventDefault();
  //   }
  // });
$("#secret_address").keypress(function(e) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { //Enter keycode
        return false;
    }
});

}

function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geolocation = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
      autocomplete.setBounds(new google.maps.LatLngBounds(geolocation,
          geolocation));
    });
  }

}




  