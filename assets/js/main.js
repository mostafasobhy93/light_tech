$(document).ready(function () {
    'use strict';
    
// sticky header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
	
 // preloader
$(window).on('load', function () {
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({
		'overflow': 'visible'
	});
});
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
        $(this).children('i').toggleClass('fa-bars fa-times');
    });
    
    
//    scroll top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
    
    
//    Main Slider
    $(".main-slider .banner-slides").owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        dots: true,
        nav: true,
        animateOut: "slideOutDown",
        animateIn: "fadeIn",
        active: true,
        smartSpeed: 1000,
//        autoplay: true,
        autoplaySpeed: 3000,
        responsive : {
            0 : {
                mouseDrag: true
            },
            768 : {
                mouseDrag: false
            }
        }
    });
    $(".main-slider .banner-carousel-btn .left-btn").on("click", function() {
        $(".main-slider .banner-slides").trigger("next.owl.carousel");
    });
    $(".main-slider .banner-carousel-btn .right-btn").on("click", function() {
        $(".main-slider .banner-slides").trigger("prev.owl.carousel");
    });
    
//    products slider
    $(".products-slider .pslides").owlCarousel({
        loop: true,
        items: 3,
        dots: false,
        nav: true,
        active: true,
        margin: 20,
//        smartSpeed: 300,
        autoplay: true,
        autoplaySpeed: 6000,
        responsive : {
            0 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 3,
            }
        }
    });
    $(".products-slider .banner-carousel-btn .left-btn").on("click", function() {
        $(".products-slider .pslides").trigger("next.owl.carousel");
    });
    $(".products-slider .banner-carousel-btn .right-btn").on("click", function() {
        $(".products-slider .pslides").trigger("prev.owl.carousel");
    });
    
//    clients slider
    $(".clients-section .clients-slider").owlCarousel({
        loop: true,
        items: 6,
        dots: false,
        nav: false,
        active: true,
        margin: 30,
        smartSpeed: 1500,
        autoplay: true,
        autoplaySpeed: 4500,
        responsive : {
            0 : {
                items: 3
            },
            768 : {
                items: 4
            },
            992 : {
                items: 6
            }
        }
    });
	
//    product details slider
	$('.product-details-area .pdetails-slides').owlCarousel({
		loop:true,
		margin: 30,
		items: 1,
		nav: false,
		autoplay: true,
		smartSpeed: 1500,
		dots:true, 
	});
	
//    project details slider
    $(".project-details-slider .pslides").owlCarousel({
        loop: true,
        items: 1,
        dots: true,
        nav: false,
        active: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: true,
        autoplaySpeed: 4500
    });
    
});

