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

  var container = document.querySelector('#container');
  var msnry = new Masonry( container, {
    // options...
    itemSelector: '.item'
    
  });
});