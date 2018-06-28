$(document).ready(function(){
// let owl_carousel = function() {	

	// document.addEventListener("DOMContentLoaded", function() { 

		//do work
		$('#select').on('click', function(e) {
			this.classList.toggle('visible');
			for(var i=0; i < document.getElementsByClassName('option').length; i++) {
				document.getElementsByClassName('option')[i].classList.toggle('visible');
			}
			e.target.classList.toggle('active');
		})		
		// $('.select').on('click', function() {
		// 	$('.option').slideToggle();
		// 	$('.active').slideToggle();
		// 	var target = $(this).parent().children();
		// 	console.log(target);
				// $(target).slideToggle();
			// if($(target)!==$(target).hasClass("active")) {
			// 	$(target).toggleClass('active');
			// console.log("hello");
			// }
		// });

		// $('.option').on('click', function() {	
		// 	$('.active').slideToggle();	
		// 	$('.option').slideToggle();
		// 	if(!$(this).hasClass('active')) {
		// 	$('.active').toggleClass();	
		// 	$(this).toggleClass('active');
		// 	}					
		// });
	
		$('.grid').masonry({
			// options
			itemSelector: '.grid-item',
			columnWidth: 200
		  });	 
	
	// Находим блок карусели
	var carousel = $("#carousel");

	// Запускаем плагин карусели
    
    carousel.owlCarousel({
		items:             4,
	
		// 5 блоков на компьютерах (экран от 1400px до 901px)
		itemsDesktop:      [1400, 4],
		
		// 3 блока на маленьких компьютерах (экран от 900px до 601px)
		itemsDesktopSmall: [900, 2],
		
		// 2 элемента на планшетах (экран от 600 до 480 пикселей)
		itemsTablet:       [600, 1],
		
		// Настройки для телефона отключены, в этом случае будут
		// использованы настройки планшета
		// itemsMobile:       false
        
});
    
       // Назад
// При клике на "Назад"
$('.js-prev').click(function () {

	// Запускаем перемотку влево
	carousel.trigger('owl.prev');

	return false;
});

// Вперед
// При клике на "Вперед"
$('.js-next').click(function () {

	// Запускаем перемотку вправо
	carousel.trigger('owl.next');

	return false;
});
    
    setInterval(function() {
        carousel.trigger('owl.next',[2000]);
    },5000);
    
 
    
// }; 
});