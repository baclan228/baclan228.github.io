function hide_left() {
	$('.left').hide();
	$('.grid-left').show();
}

function show_left() {
	$('.left').show();
	$('.grid-left').hide();
}

function show_left_menu() {
	$('.mask').show();
	$('.left').show();
	$('.grid-left').hide();
}

function mask() {
	$('.mask').hide();
	$('.left').hide();
	$('.grid-left').hide();
}

function grid1() {
	$('.center__img img').css("width", "260px", "height", "173px");
	$('.box').css("width", "260px");
}

function grid2() {
	$('.center__img img').css("width", "200px", "height", "50px");
	$('.box').css("width", "200px", "height", "50px");
}

