$(document).ready(function(){
	"use strict";
    
        /*==================================
* Author        : "Jubayer Alam Khan"
* Template Name : Developer_portfolio  HTML Template
* Version       : 1.0
==================================== */




        /*=========== TABLE OF CONTENTS ===========
1. Pre-loader 
2. Smooth scroll-spy
3. Light slider
4. Scroll To Top
5. Wow js
======================================*/

	
	// 1. Pre-loader 
		
		$(window).load(function() {
            $('.preloader').fadeOut(2000);
        });
	
	// 2. Smooth Scroll spy

		$('a.data-scroll').on("click", function(e) {
			e.preventDefault();
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 0
			}, 1200);
		});
		
	
	// 3. light-slider
		
		$(".testimonial-list").lightSlider({
			
			item:1,
			gallery: true,
			thumbItem:3,
			controls:false,
			auto:true,
			loop:true, 
			
		});
		

	
	// 4. Scroll To Top 
		$(window).on('scroll',function () {
			if ($(this).scrollTop() > 600) {
				$('.return-to-top').fadeIn();
			} else {
				$('.return-to-top').fadeOut();
			}
		});
		$('.return-to-top').on('click',function(){
				$('html, body').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
		
	
		
	// 5. Wow js active
	
		new WOW().init();
		
		
});