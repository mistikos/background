$(document).ready(function(){

  $("#text ul").on('click', 'a', function(event){
    event.preventDefault();
    var url_image =  $(this).attr('href');
    $('#wrapper').css({'background-image': "url(" +$(this).attr('href') + ")"}).hide().fadeIn('slow');
    event.stopPropagation();
  })

  var window_x = $( document ).width();
  var mid = window_x / 2

  $('body').mousemove(function(event){
    move_x = event.pageX;
    var factor = ((mid - move_x) / mid) * 30 - 30
    // console.log(event.pageX);
    console.log(factor);
    $('#wrapper').css({'background-position': factor + ' center'})
  })

})
