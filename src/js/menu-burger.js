// Меню-бургер
$(document).ready(function() {
	$('.menu-burger').click(function(event) {
		$('.menu-burger,.header__menu').toggleClass('active');
		$('.body').toggleClass('lock');
	});
});