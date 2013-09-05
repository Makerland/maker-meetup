$(document).ready(function(){


	$('.button').click(function(){
		var to = $(this).attr('id').replace('goto_','');
		$(window).stop().scrollTo($('#'+to),400);
	});


});