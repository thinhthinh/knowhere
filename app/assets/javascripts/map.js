// $(document).ready(function(){

//   var handler = Gmaps.build('Google');
//   handler.buildMap({ internal: {id: 'multi_markers'}}, function(){
    
//     var secrets = [];
    
//     $.getJSON('/', function(result){
//       secrets = result;
//     })

//     debugger;
//     var markers = handler.addMarkers(secrets);
//     handler.bounds.extendWith(markers);
//     handler.fitMapToBounds();
//   });

// });