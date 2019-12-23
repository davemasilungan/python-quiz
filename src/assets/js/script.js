"use strict";
$(document).ready(function(){


    //  Password Show/Hide

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

    
    // Pre Loader

    $(window).on('load', function() {
        $('.loader-wrapper').fadeOut('slow');
        $('.loader-wrapper').remove('slow');
    });


    // Dark Header

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 60) {
            $(".navbar").addClass("darkHeader");
        } else {
            $(".navbar").removeClass("darkHeader");
        }
    });


    // mobile menu nav click hide collapse

    var mobile_menu = $( window ).width();
    if(mobile_menu < 991){
        $("nav a.nav-link").on('click', function(event) {
        	if(!$(this).hasClass('dropdown-toggle')){

    		console.log('click');
    		$(".navbar-collapse").collapse('hide');
    	}
            
        });
    }


    // To-Top Button

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

});