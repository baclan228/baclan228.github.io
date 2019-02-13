$(window).scroll(function() {
	var st = $(this).scrollTop();
	
	$('.banner__content').css({
		"transform" : "translate(0%, "+ st/18 +"%)"
	});
	$('.header').css({
		"transform" : "translate(0%, "+ st +"%)"
	});


	$('.bg img').css({
		"transform" : "translate(0%, -"+ st/20 +"%)"
	});

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

	if(st > 2754){
		$('.services_box').css("opacity", "1");
	}
});

