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

//  Печатный текст
function printText( el ){

	let letterTimeout = 100

	let text = el.innerHTML
	let i = 1

	let print__fn = function(){

			if( i <= text.length ){
				el.innerHTML = text.substr( 0, i );
				setTimeout( arguments.callee, letterTimeout );
			}

			i++;
		}

	print__fn() // init
};

// init
let elements = document.getElementsByClassName( 'my-text' )
let elemArray = Array.from(elements);
elemArray.forEach((item) => printText(item));

				




