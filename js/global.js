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





    // if ($('#main-buy-field').isInViewport()) {} else {}

// $(window).on('scroll', function(){
//     var iWrapH = $('.info-wrap').height();
//     if($(window).scrollTop() >= iWrapH){
//     //    $('.navigation').addClass('fixed');
//        $('.navigation').removeClass('large');
//     }else{
//         // $('.navigation').removeClass('fixed');
//         $('.navigation').addClass('large');
//     }
// });






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

