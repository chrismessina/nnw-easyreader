/* 
	// Document ready - when image loading is not critical
	$(function(){
	
	});
*/

// Document ready is too soon for messing with images
$(window).load(function(){
	$('.newsItemDescription').imagefit();
});