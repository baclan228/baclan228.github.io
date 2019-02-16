

$(window).scroll(function() {
	var st = $(this).scrollTop();

	$('.bg_head img').css({
		"transform" : "translate(0%, -"+ st/25 +"%)"
	});

	$('.bg img').css({
		"transform" : "translate(0%, -"+ st/20 +"%)"
	});
	/* animation progress skil */
	if (st > 609){
		$('.progress_one').css("width", "75%");
		$('.progress_two').css("width", "90%");
		$('.progress_three').css("width", "65%");
		$('.skills_img').css("opacity", "1");
	}else{
		$('.progress_one').css("width", "0%");
		$('.progress_two').css("width", "0%");
		$('.progress_three').css("width", "0%");
		$('.skills_img').css("opacity", "0");
	}

	if(st > 2654){
		$('.services_box').css("opacity", "1");
	}
});

$(window).ready(function(){

	if ($(window).width() <= '460'){
	$('.banner__content').delay(800).animate({
		'margin-top': '60px', 'opacity': '1'
	}, 1000);
	}else{
		$('.banner__content').delay(800).animate({
		'margin-top': '143px', 'opacity': '1'
	}, 1000);
	}

	$('#bt').animate({
		'background': 'red', 'opacity': '1'
	}, 100);


});

