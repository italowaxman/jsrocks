$(document).ready(function() {     
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

});   


