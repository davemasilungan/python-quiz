"use strict";
$(document).ready(function(){


    //  Pre Loader

    $(window).on('load', function() {
        $('.loader-wrapper').fadeOut('slow');
        $('.loader-wrapper').remove('slow');
    });


    // Pin Header

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $(".navbar").addClass("darkHeader");
        } else {
            $(".navbar").removeClass("darkHeader");
        }
    });


    //  Go to top button
 
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $('.tap-top').fadeIn();
        } else {
            $('.tap-top').fadeOut();
        }
    });
    $('.tap-top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    //  Password show/hide

     $('.show-hide').show();
     $('.show-hide span').addClass('show');
 
     $('.show-hide span').click(function(){
         if( $(this).hasClass('show') ) {
             $('input[name="login[password]"]').attr('type','text');
             $(this).removeClass('show');
         } else {
             $('input[name="login[password]"]').attr('type','password');
             $(this).addClass('show');
         }
     });
     $('form button[type="submit"]').on('click', function(){
         $('.show-hide span').text('Show').addClass('show');
         $('.show-hide').parent().find('input[name="login[password]"]').attr('type','password');
     });
 
     

});