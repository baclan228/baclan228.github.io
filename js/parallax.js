$(window).scroll(function() {
	var st = $(this).scrollTop();

	$('.banner__content').css({
		"transform" : "translate(0%, "+ st/18 +"%)"
	});
	$('.header').css({
		"transform" : "translate(0%, "+ st +"%)"
	});
	/*console.log(st);*/
	

	if (st > 609){
		$('.progress_one').css("width", "60%");
		$('.progress_two').css("width", "80%");
		$('.progress_three').css("width", "50%");
		
		/*var num = 1;
		setInterval(function lol() {
    		num++;

    		if(num > 60){
    			clearInterval(lol);
    			$('.progress_one').css("width", "60%");
    		}else{
    			console.log(num);
    			$('.progress_one').css("width", ""+num+"%");
    		}
		}, 100);*/
		
		

	}else{
		$('.progress_one').css("width", "0%");
		$('.progress_two').css("width", "0%");
		$('.progress_three').css("width", "0%");
	}

	if(st > 2754){
		$('.services_box').css("opacity", "1");
	}
});