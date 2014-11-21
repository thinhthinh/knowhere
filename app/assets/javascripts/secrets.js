$(document).ready(function(){

$('.courses').on('click', '.delete', function(event){
    event.stopPropagation();
    var id = $(this).data('id');
    $.ajax({url: '/courses/' + id, type: "DELETE"}).done(
      function(result){
        var id = result.id;
        $('[data-id=' + id + ']').parent('.course').remove()
      }
    )
  });

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
}
// function fillInAddress() {
//   // Get the place details from the autocomplete object.
//   var place = autocomplete.getPlace();

//   for (var component in componentForm) {
//     document.getElementById(component).value = '';
//     document.getElementById(component).disabled = false;
//   }

//   // Get each component of the address from the place details
//   // and fill the corresponding field on the form.
//   for (var i = 0; i < place.address_components.length; i++) {
//     var addressType = place.address_components[i].types[0];
//     if (componentForm[addressType]) {
//       var val = place.address_components[i][componentForm[addressType]];
//       document.getElementById(addressType).value = val;
//     }
//   }
// }
// [START region_geolocation]
// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
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




