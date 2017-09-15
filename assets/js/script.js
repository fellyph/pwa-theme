(function ($, window, document, undefined) {

  	'use strict';

	/*********************************************
    ## Convert plain text email to clickable link
    *********************************************/

  	$(function () {
  		$("div").filter(function(){
		    var html = $(this).html();
		    var emailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/g;

		    var matched_str = $(this).html().match(emailPattern);
		    if(matched_str){
		      var text = $(this).html();
		      $.each(matched_str, function(index, value){
		          text = text.replace(value,"<a href='mailto:"+value+"'>"+value+"</a>");
		      });
		      $(this).html(text);
			  return $(this)
		    }
		})
  	});

	/*********************************************
    ## Home Slider
    *********************************************/

  	$('.home-slider').slick({
	  	nextArrow: '<i class="fa fa-arrow-right"></i>',
	  	prevArrow: '<i class="fa fa-arrow-left"></i>',
		// add the rest of your options here
	});

    /*********************************************
    ## General Slider
    *********************************************/


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        focusOnSelect: true

    });


	/*********************************************
    ## Testimonial Slider
    *********************************************/

  	$('.testimonial-slider').slick({
  		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		appendArrows: $(".arrows"),
	  	nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
	  	prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
		// add the rest of your options here
	});



	/*********************************************
    ## Youtube Popup
    *********************************************/

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
		    preloader: false,
		    fixedContentPos: false
		});



})(jQuery, window, document);
