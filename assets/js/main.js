$(document).ready(function() {     
	
	//Animations Timing
	setTimeout(function() { $(".logo").addClass("fadeIn")}, 100);

	setTimeout(function() { $(".search").addClass("slideLeft")}, 200);
	setTimeout(function() { $(".main-menu").addClass("slideRight")}, 200);

	setTimeout(function() { $(".row-button").addClass("slideUp")}, 500);

	setTimeout(function() { $(".row-down").addClass("slideDown")}, 600);
	setTimeout(function() { $(".item-post").addClass("fadeInBox")}, 600);
	setTimeout(function() { $(".row-comments").addClass("fadeInBox")}, 600);
	setTimeout(function() { $(".row-other-posts").addClass("fadeInBox")}, 600);
	setTimeout(function() { $(".header-article").addClass("slideUp")}, 600);
	setTimeout(function() { $(".article-content").addClass("slideUp")}, 600);

	setTimeout(function() { $(".testemonials").addClass("fadeInBox")}, 700);
	setTimeout(function() { $(".footer").addClass("slideUp")}, 700);
	setTimeout(function() { $(".row-more-posts").addClass("slideUp")}, 700);


	//Hoverbla Classes
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

