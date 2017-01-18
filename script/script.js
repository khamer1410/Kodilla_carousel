// alert('hej')

$(function(){
	var carouselList = $('#carousel ul');

	setInterval(changeSlide, 3000);

	function changeSlide() {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	};

})
