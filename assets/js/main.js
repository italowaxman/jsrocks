$(document).ready(function() {     
	
	setTimeout(function() { $(".logo").addClass("fadeIn")}, 100);
	setTimeout(function() { $(".search").addClass("slideLeft")}, 400);
	setTimeout(function() { $(".main-menu").addClass("slideRight")}, 400);
	setTimeout(function() { $(".row-down").addClass("slideDown")}, 1000);
	setTimeout(function() { $(".row-button").addClass("bigEntrance")}, 1000);

	$(window).scroll(function() {
		$('.item-post').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+2000) {
				$(this).addClass("fadeInBox");
			}
		});
	});

	$(window).scroll(function() {
		$('.row-more-posts').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1400) {
				$(this).addClass("bigEntrance");
			}
		});
	});

	$(window).scroll(function() {
		$('.testemonials').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1200) {
				$(this).addClass("fadeInBox");
			}
		});
	});

	$(window).scroll(function() {
		$('.footer').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+1600) {
				$(this).addClass("slideUp");
			}
		});
	});


	$(".button-post").hover(function() {
		$(this).toggleClass("button-thunder");
	});

	$(".input-search").hover(function () {
	  $(".icon-search-white").toggleClass("icon-search-hover");
	});

	$(".input-search").on('focus blur', function(){
    	$(".icon-search-white").toggleClass("icon-search-focus");
    	$(".icon-search").toggleClass("hide-bg");
	});

	$(".button-top").hover(function() {
		$(".button-top img").toggleClass("floating");
	});

});   

