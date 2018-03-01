$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
    $('.navbar').css('background','rgba(15,13,13,0.85');
    } else {
    $('.navbar').css('background','transparent');
    }
    });

  

$(document).ready(function(){
 
    // hide our element on page load
    $('#card-img-top').css('opacity', 0);
   
    $('#card-img-top').waypoint(function() {
        $('#card-img-top').addClass('zoomIn');
    }, { offset: '05%' });
   
  });


