/* parallax */
$(document).on('mousemove', function (e) {
    $('.add').css({
        left: -e.pageX / 20 + 362,
        top: -e.pageY / 20 + 536
    });
    $('.add2').css({
        left: e.pageX / 20 + 336,
        top: e.pageY / 20 + 200
    });
    $('.add3').css({
        left: e.pageX / 20 + 866,
        top: e.pageY / 20 + 200
    });
    $('.add4').css({
        left: e.pageX / -10 + 266,
        top: e.pageY / 30 + 36
    });
    $('.add5').css({
        left: e.pageX / 60 + 652,
        top: e.pageY / 30 + 626
    });
    $('.add6').css({
        left: e.pageX / 22 + 800,
        top: e.pageY / 56 + 300
    });
    $('.add7').css({
        left: e.pageX / 22 + 60,
        top: e.pageY / 56 + 400
    });
    $('.add8').css({
        left: e.pageX / 22 + 1000,
        top: e.pageY / 56 + 456
    });
});

/* slide */
// запускаем наш слайдер
$("#slideshow > div:gt(0)").hide();
setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(500) // скорость исчезания блока
        .next()
        .fadeIn(1000) // скорость появления блока
        .end()
        .appendTo('#slideshow');
}, 9000); // скорость смены блоков