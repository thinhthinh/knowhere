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

