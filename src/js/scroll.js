(function($){

	$('ul.pagination li a').on('click', function() {

	    var scrollAnchor = $(this).attr('data-scroll'),
	        scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 100;

	    $('body,html').animate({
	        scrollTop: scrollPoint
	    }, 500);

	    return false;

	});

	$(window).scroll(function() {
	    var windscroll = $(window).scrollTop();
	    if (windscroll >= 100) {
	        $('ul.pagination').addClass('fixed');
	        $('section').each(function(i) {
	            if ($(this).position().top <= windscroll + 125) {
	                $('ul.pagination li a.active').removeClass('active');
	                $('ul.pagination li a').eq(i).addClass('active');
	            }
	        });

	    } else {

	        $('ul.pagination').removeClass('fixed');
	        $('ul.pagination li a.active').removeClass('active');
	        $('ul.pagination li a:first').addClass('active');
	    }

	}).scroll();		

})(jQuery);