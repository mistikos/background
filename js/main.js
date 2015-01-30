$(document).ready(function(){

  $("#text ul").on('click', 'a', function(event){
    event.preventDefault();
    var url_image =  $(this).attr('href');
    $('#wrapper').css({'background-image': "url(" +$(this).attr('href') + ")"}).hide().fadeIn('slow');
    event.stopPropagation();
  })

})
