$(document).ready(function(){


	$('.button').click(function(){
		var to = $(this).attr('id').replace('goto_','');
		$(window).stop().scrollTo($('#'+to),400);
	});


    $(document).scroll(function() {
        if ($(document).scrollTop()<364 && $('nav').css('position')=='fixed'){
            $('nav').css('position', 'static');
        } else if ($(document).scrollTop()>=364 && $('nav').css('position')=='static'){
            $('nav').css('position', 'fixed');
        }

    });

});