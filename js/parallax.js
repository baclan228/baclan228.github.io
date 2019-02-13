$(window).scroll(function() {
	var st = $(this).scrollTop();

	$('.banner__content').css({
		"transform" : "translate(0%, "+ st/18 +"%)"
	});
	$('.header').css({
		"transform" : "translate(0%, "+ st +"%)"
	});
	/*console.log(st);
	if(st > 10){
		
	}else{
		alert('меньше');
	}*/
});