$(document).on("click", "#down", function(){
     $( 'html, body').animate({ scrollTop: $('#middle').offset().top }, 2000);
});

$(document).on("click", "#about", function(){
     $( 'html, body').animate({ scrollTop: $('#middle').offset().top }, 2000);
});

$(document).on("click", "#experience", function(){
     $( 'html, body').animate({ scrollTop: $('.experience').offset().top }, 2000);
});

$(document).on("click", "#hobbiesNav", function(){
     $( 'html, body').animate({ scrollTop: $('.MyHobbies').offset().top }, 2000);
});

$(document).on("click", "#projects", function(){
     $( 'html, body').animate({ scrollTop: $('#project-carousel').offset().top }, 2000);
});

$(document).on("click", "#contact", function(){
     $( 'html, body').animate({ scrollTop: $('.contact-me').offset().top }, 2000);
});
document.addEventListener('DOMContentLoaded', function() {
  var typed = new Typed('#type', {
    strings: ["", "an outgoing business and computer science student.", "an advocator of equality.", "an outdoor person.", "a leader."],
    typeSpeed: 30,
    loop: true,
    backSpeed: 20,
    contentType: 'text',
    showCursor: false,
    startDelay: 0
  });
});

var $document = $(document),
    $element = $('.navbar'),
    navbarDefault = 'navbarDefault';
    navbarTransparent = 'navbarTransparent';
    fadeInDown = 'fadeInDown';

$(document).scroll(function() {
   var topOfOthDiv = $("#middle").offset().top;
  if($document.scrollTop() >= topOfOthDiv){
    $element.addClass(navbarDefault);
    $element.removeClass(navbarTransparent);
    $element.addClass(fadeInDown);
      $("#down").removeClass('bounce');
    $('.navbar-collapse').addClass('addBackgroundColor');
  } else {
    $element.addClass(navbarTransparent);
    $element.removeClass(navbarDefault);
    $element.removeClass(fadeInDown);
    $("#down").addClass('bounce');
    $('.navbar-collapse').removeClass('addBackgroundColor');
  }
})


// $('body').scrollspy({ target: '#navbarTop' })

// $(window).scroll(function() {
//   if($(this).scrollTop() > 100) {
//     $('.navbar').fadeIn();
//   } else {
//     $('.navbar').fadeOut();
//   }
// })
