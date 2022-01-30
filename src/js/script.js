// Слайдеры
$(document).ready(function() {
	$('.slider').slick({
		arrows:false,
		adaptiveHeight:true,
		slidesToShow:1,
		slidesToScroll:3,
		variableWidth:true,
		speed:300,
		waitForAnimate: true,
		easing: 'ease',
		infinite: true,
		swipe: true,
		draggable: true,
		touchMove: true,
		touchThreshold: 100,
		swipeToSlide: true
	});	
});



// Споллеры
$(document).ready(function() {
	$('.block__title').click(function(event) {
		if($('.block').hasClass('one')) {
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});

// Меню-бургер
$(document).ready(function() {
	$('.menu-burger').click(function(event) {
		$('.menu-burger,.header__menu').toggleClass('active');
		$('.body').toggleClass('lock');
	});
});





