/* document ready */
$(document).ready(function(){

$('.navigation').on('click','i.fa-bars',function(){
  setTimeout(function(){
    $('i.fa-bars').addClass('closed');
  },500);
  $('.navigation .nav-content').addClass('opened');
  $('.navigation').addClass('dark');
$('.page-content').addClass('move');

$('body').addClass('scroll-hidden');

});

$('.navigation').on('click','.nav-content i.fa-times',function(){
  $('.navigation .nav-content').removeClass('opened');
  setTimeout(function(){
    $('.navigation i.fa-bars').removeClass('closed');
  },500);
  $('body').removeClass('scroll-hidden');
  $('.navigation').removeClass('dark');
  $('.page-content').removeClass('move');

});
// NAVIGATION END




var mainNavH = $('#site-nav .nav-shell').height();
var helpNavH = $('.product #header #breadcrumb').height();
var offerH = $('#me-globalnav-banner .me-globalnav-banner-inner').height();
var helpMenu = $('#board-tabs').height();
var topH = mainNavH + helpNavH + offerH + helpMenu;


//SCORLL TO SECTION
$('.main-content li').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    /* UNACTIVE OVERVIEW SECTION AND ACTIVE INFO*/
    // $('#board-body').find('section').first().removeClass('active');
    // $('#board-body').find('section').last().addClass('active');

    $('.main-content  li').not(this).each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active');
    $target = $("#" + $(this).find('a').data("hash"));

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - topH
    }, 500, 'swing', function () {
        $(document).on("scroll", onScroll);
    });

});



function onScroll(event) {
    var scrollPos = $(document).scrollTop();

    $('.main-content li').each(function () {
        var refElement = $("#" + $(this).find('a').data("hash"))
        if ($(window).width() > 900) {
        if (refElement.length && refElement.position().top  - topH <= scrollPos && refElement.position().top + refElement.height() > scrollPos  + topH) {
            $('.main-content li').removeClass("active");
            $(this).addClass("active");
        } else {
            setTimeout(function () {
                $(this).removeClass("active");
            }, 300);
         }
    }

    if ($(window).width() < 900) {
        if (refElement.length && refElement.position().top <= scrollPos + topH && refElement.position().top + refElement.height() > scrollPos + topH) {
            $('.main-contents li').removeClass("active");
            $(this).addClass("active");
        } else {
            setTimeout(function () {
                $(this).removeClass("active");
            }, 300);
         }
    }


    });
} /* END onScroll */


/* IF ADD TO CART IS ON VIEWPORT */
$(window).on('resize scroll', __throttle(function (event) {
    if ($('#main-buy-field').isInViewport()) {
        $('#board-8th #buy-now').css({
            'opacity': '0.5',
            'cursor': 'not-allowed'
        });
    } else {
        /* BUY BUTTON */
        $('#board-8th #buy-now').css({
            'opacity': '',
            'cursor': ''
        });
    }
}, 250)); /* end IF ADD TO CART IS ON VIEWPORT */

// var whatIsInBoxTopPosition = $("#board-8th .what-is-in-box").height();
// var buySectionH = $('#main-buy-field').height();

// $('#board-8th #buy-now').click(function () {

// if (!$('#board-8th #main-buy-field').isInViewport()) {
//       if ($('#board-8th #board-body section').last().hasClass('active')) {
//           if($(window).width() < 992){
//             $('#board-8th #board-body section').last().removeClass('active');
//             $('#board-8th #board-body section#board-overview').addClass('active');
//           }else{
//             $('#board-tabs h1').trigger('click');
//           }
          
//         //   $('#board-tabs li.board-overview').trigger('click');
//       }

//       if($(window).width() < 992 )
//       {
//         $('html, body').stop().animate({
//           scrollTop: $("#board-8th #main-buy-field").offset().top -topH
//      }, 500, 'swing');
//       }
//       else if($(window).width() >= 992 && $(window).width()<1900){
//         $('html, body').stop().animate({
//           scrollTop: $("#board-8th #main-buy-field").offset().top - (screen.height - buySectionH)
//      }, 500, 'swing');
//       }
//       else if($(window).width() >= 1900 ){
//         $('html, body').stop().animate({
//           scrollTop: $("#board-8th #main-buy-field").offset().top - (whatIsInBoxTopPosition + buySectionH - 100)
//      }, 500, 'swing');
//       }
//       setTimeout(function () {
//           $('#board-8th #buy-now').css({
//               'opacity': '0.5',
//               'cursor': 'not-allowed'
//           });
//       }, 500);
// }

// setTimeout(function () {
//     $('#board-8th #board-tabs li').removeClass("active");
//   }, 500);

// }); /* END BUY BUTTON */




/* ON VIEWPORT */
$.fn.isInViewport = function () {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
}; /* end - ON VIEWPORT */

 // id_product:id_product_attribute
 var parseDynamicHiddenField = function (el, mappedTo) {
     var result = {};

     if ($(el).length) {
         var split = $(el).val().split(':');

         if ($.isArray(mappedTo)) {
             $.each(mappedTo, function (key, value) {
                 result[value] = split[key];
             });
         }

     }
     return result;
 };




    
});/*document ready END */

