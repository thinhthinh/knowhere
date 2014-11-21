$(document).ready(function(){
  $("#song-input").hide();
  function revealSongForm() {
    // show song text field
  }
  // $( "#song-checkbox" ).on( "click", revealSongForm );


  function hideSongForm() {
    // hide sone text field
  }
  // $( "#song-checkbox" ).on( "unclick", hideSongForm );


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

})