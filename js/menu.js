//Preloader Start
$(window).load(function () {
	$('.preloader').fadeOut('slow', function () {
		$(this).remove();
	});
});
//Preloader End

//wow js start
new WOW().init();
//wow js end

$('.main_menu_slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	//	autoplay: true,
	//	autoplaySpeed: 2000,
	fade: true,
	cssEase: 'linear',
	asNavFor: '.menu_item_slider'
});


$('.menu_item_slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	//	autoplay: true,
	//	autoplaySpeed: 2000,
	fade: true,
	cssEase: 'linear',
	asNavFor: '.main_menu_slider'
});


$('.main_desert_slider').slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	centerMode: true,
	centerPadding: '0px',
	autoplay: true,
	autoplaySpeed: 3000,
	asNavFor: '.desert_item_slider'
});

$('.desert_item_slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
	fade: true,
	cssEase: 'linear',
	asNavFor: '.main_desert_slider'
});


//Menu Fixed start
$('.top_btn').click(function () {


	$('html,body').animate({

		scrollTop: 0

	}, 1000);


});

var $nav = $('.header').offset().top;

$(window).scroll(function () {

	$scrolling = $(this).scrollTop();

	if ($scrolling >= $nav) {

		$('.header').addClass('fixedmenu');


	} else {

		$('.header').removeClass('fixedmenu');


	}

	//Top Button
	if ($scrolling >= 500) {

		$('.top_btn').fadeIn();

	} else {

		$('.top_btn').fadeOut();

	}

});
//Menu Fixed End


//Smooth Scroll start
$('.header a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1500, function () {
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex', '-1');
						$target.focus();
					};
				});
			}
		}
	});
//Smooth SCroll End
