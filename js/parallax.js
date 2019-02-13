$(window).scroll(function() {
	var st = $(this).scrollTop();
	console.log(st);
	$('.banner__content').css({
		"transform" : "translate(0%, "+ st/18 +"%)"
	});
	$('.header').css({
		"transform" : "translate(0%, "+ st +"%)"
	});
	if(st > 200){
		$('#top').fadeIn();
		$('#top').click(function() {
    		$('html, body').animate({scrollTop: 0},500);
    	return false;
  		});
	}else{
		$('#top').fadeOut();
	}

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