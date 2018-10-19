$(document).ready(function(){

	// Animated modal
	$("#myAnimatedModal").animatedModal();
	//modal 01
    $("#modal01").animatedModal();
    //modal 02
    $("#modal02").animatedModal({
        modalTarget:'modal-02'
    });
    $("#modal02g").animatedModal({
        modalTarget:'modal-02'
    });
    $("#modal03").animatedModal({
        modalTarget:'leafModal'
    });

    // Slick 3 carousel
	// $(".carousel-insights-18").slick({
	// 	speed: 300,
	// 	slidesToShow: 1,
	// 	adaptiveHeight: true,
	// 	dots: true,
	// 	arrows: true,
	// 	autoplay: false,
 //  		//autoplaySpeed: 300,
	// 	// the magic
	// 	responsive: [{
	// 		breakpoint: 768,
	// 		settings: "unslick" // destroys slick
	// 	}]
	// });

    // Slick 2 carousel
	$(".carousel-methodology").slick({
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true,
		dots: true,
		arrows: true,
		//autoplay: true,
  		//autoplaySpeed: 300,
		// the magic
		responsive: [{
			breakpoint: 768,
			settings: "unslick" // destroys slick
		}]
	});

	// Slick siri
	$("#siriSlider").slick({
		slidesToShow: 1,
		adaptiveHeight: true,
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 8000,
		// the magic
		responsive: [{
			breakpoint: 768,
			settings: "unslick" // destroys slick
		}]
	});

	// Slick carousel
	// $(".carousel-box-shadow").slick({
	// 	dots: false,
	// 	arrows: false,
	// 	infinite: false,
	// 	speed: 300,
	// 	slidesToShow: 1,
	// 	adaptiveHeight: true,
	// 	fade: true,
	// 	nextArrow: $('.next-btn'),
	// 	prevArrow: false,
	// 	responsive: [{
	// 		breakpoint: 768,
	// 		settings: "unslick" // destroys slick
	// 	}],
	// 	onAfterChange: function(slide, index) {
	// 	       if(index === 2) {
	// 	           $('.slick-next').css('pointer-events', 'none');
	// 	       }
	// 	       else {
	// 	           $('.slick-next').css('pointer-events', 'all');
	// 	       }
	// 	   }
	// });

	$('.next-btn').click(function(){
		$('.carousel-box-shadow').slick('slickNext');
	});


	$("#share").jsSocials({
		showLabel: false,
    	showCount: false,
        shares: ["twitter", "facebook", "googleplus", "linkedin", "email"]
    });

/**SIRI***/
	//extra library items
	$('ul.hidden-reports-list').hide();

	$('a#more-insights').click(function(e){
		e.preventDefault();
		var less = 'View Less';
		var more = 'View More';
		
		$('ul.hidden-reports-list').slideToggle(400);
		if ($('a#more-insights').html() == less){
			$('a#more-insights').html( more );
		} else {
			$('a#more-insights').html( less );
		}
	});

    //Methodolgy pop up window
	$('.methodology').hide();

	$('#introPop').click(function(){
		$('.methodology').slideToggle(400);
	});

	$('#about-method').click(function(e){
		$('#methodology').slideToggle(400)();

	});

	/**
	 * Toggle Controls
	 */
	var elements = document.querySelectorAll('.toggle');
	Array.prototype.forEach.call(elements, function(element){
	    element.addEventListener('click', function(e){
	        if(e.target.classList.contains('toggle-button')){
	            e.stopPropagation();
	            
	            //close other open elements
	            var openElements = document.querySelectorAll('.open');
	            Array.prototype.forEach.call(openElements, function(element){
	                if(e.currentTarget !== element){
	                    element.classList.remove('open');
	                }
	            });

	            e.currentTarget.classList.toggle('open');

	       
	            //prevent the body from scrolling while the mobile nav is open.
	            if(e.currentTarget.nodeName === 'HEADER' && e.currentTarget.classList.contains('open')){
	                document.getElementsByTagName('body')[0].classList.add('no-scroll');
	            } else {
	                document.getElementsByTagName('body')[0].classList.remove('no-scroll');
	            }


	        }
	    });
	});

	$('a.section-title').click(function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		var str = $(this).text();
		$( ".label" ).html( str );
		$('div.cp-resource-section.toggle').removeClass('open');
		$('#download-infographic').attr('href', href);
	});

});