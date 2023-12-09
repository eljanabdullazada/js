$(document).ready(function() {
    var clicked = false;

    $('.hiding-button').on('click', function() {
      $('.paragraph-one').toggle(); 
      $('.paragraph-two').toggle(); 

      if (!clicked) {
        $(this).text('Click again!');
      } else {
        $(this).text('Click Me!');
      }
      
      clicked = !clicked; 
    });
});
