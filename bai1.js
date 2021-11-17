
$(document).ready(function() {
  var fixHeight = function() {
    $('.navbar-nav').css(
      'max-height',
      document.documentElement.clientHeight - 150
    );
  };
  fixHeight();
  $(window).resize(function() {
    fixHeight();
  });
  $('.navbar .navbar-toggler').on('click', function() {
    fixHeight();
  });
  $('.navbar-toggler, .overlay').on('click', function() {
    $('.mobileMenu, .overlay').toggleClass('open');
  });
});











$(document).ready(function(){
  $("#billing").click(function(){
    $("#contact-billing-main").slideToggle("slow");
  });
});

$(document).ready(function(){
  $("#check").click(function(){
    $("#contact-check1-wrapper").slideToggle("slow");
  });
});



$(document).ready(function(){
  $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('#back-to-top').fadeIn();
      } else {
        $('#back-to-top').fadeOut();
      }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 400);
      return false;
    });
});


