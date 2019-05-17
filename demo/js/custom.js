(function($) {
 "use strict"
 
 	//Menu
 	$(document).ready(function(){
		$(window).bind('scroll', function() {
			var navHeight = $("header").height();
			($(window).scrollTop() > navHeight) ? $('nav').addClass('affixTop') : $('nav').removeClass('affixTop');
		});
	});
 
	//Slider
	jQuery(
	function($){
		$.fn.revolution&&$(".revolution-slider")
		.revolution({
			delay:5000,
			startwidth:1170,
			startheight:550,
			onHoverStop:"off",
			hideThumbs:10,
			fullWidth:"on",
			fullScreen:"off",
			forceFullWidth:"off",
			hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value
			hideTimerBar:"on",
			lazyLoad:"on",
			shadow:0
		})
	});
	
	/*Light Box */
	if ($('.venobox').length ) {
		$('.venobox').venobox({
			bgcolor: '#27292d',
			titleattr: 'data-title',
			infinigall: true
		});
	}
	
	// Login Boxes
	$("#accountlogin").click(function () {
		$(".loginpopup").fadeToggle(400);
		return false;
	});
	
	
 	//Parallax
	$(window).bind('body', function() {
		parallaxInit();
	});
	function parallaxInit() {
		$('#one-parallax').parallax("30%", 0.1);
		$('#two-parallax').parallax("30%", 0.1);
		$('#three-parallax').parallax("30%", 0.1);
		$('#four-parallax').parallax("30%", 0.4);
	}


	
	/* Scroll to Top */
	$(".totop").hide();
	$(window).scroll(function(){
	if ($(this).scrollTop() > 300) {
		$('.totop').fadeIn();
	} else {
		$('.totop').fadeOut();
	}
	});
	$(".totop a").click(function(e) {
		e.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
		
})(jQuery);