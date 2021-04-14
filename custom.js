$( ".card" ).hover(
    function() {
      $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
    }, function() {
      $(this).removeClass('shadow-lg');
    }
  );

  $( ".btn" ).hover(
    function() {
      $(this).addClass('rounded-pill btn-primary').css('cursor', 'pointer'); 
    }, function() {
        $(this).removeClass('btn-primary rounded-pill');
      }
  );