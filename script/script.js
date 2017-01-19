$(function(){
	var carouselList = $('#carousel ul');

	setInterval(changeSlide, 5000);

	function changeSlide() {
		carouselList.animate({'marginLeft': -400}, 1000, moveFirstSlide);
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find('li:first');
		var lastItem = carouselList.find('li:last');

		lastItem.after(firstItem);
		carouselList.css({'marginLeft': 0});
	};

})

var carouselMenuLeft = $('.carousel-cont::before');

//Dorób po bokach przyciski służące do zmiany slajdu.

//Dodaj kontrolki (mogą być kółka) wskazujące który slajd jest aktualnie wyświetlany (np aktualny slajd to pełne kółko a pozostałe są puste).
//Zrób tak żeby kliknięcie w kontrolkę przewijało karuzelę tak by widoczny był slajd do niej przypisany.