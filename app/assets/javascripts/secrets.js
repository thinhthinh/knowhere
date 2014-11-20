$('.courses').on('click', '.delete', function(event){
    event.stopPropagation();
    var id = $(this).data('id');
    $.ajax({url: '/courses/' + id, type: "DELETE"}).done(
      function(result){
        var id = result.id;
        $('[data-id=' + id + ']').parent('.course').remove()
      }
    )
  })