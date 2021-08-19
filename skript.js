$('#menu_toggler').click(function(e){
        e.preventDefault();
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
    $('body').toggleClass('noscroll');
  })
