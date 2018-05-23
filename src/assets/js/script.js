// $(document).ready(function(){
// let owl_carousel = function() {	

	document.addEventListener("DOMContentLoaded", function(event) { 
		//do work
	
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
        carousel.trigger('owl.next',[1000]);
    },3000);
    
 
    
// }; 
});