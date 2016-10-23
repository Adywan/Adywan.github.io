$(document).ready(function(){
	/*плавний перехід*/
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});

	/*Scroll to top*/
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	

	/*Slider*/
	$(function() {
    	$(".rslides").responsiveSlides({
		  pause: true,
		  timeout: 2500,
		});
  	});
});

//Contact us form

(function(d, t){
	   var g = d.createElement(t),
	       s = d.getElementsByTagName(t)[0];
	   g.src = "http://www.foxyform.com/js.php?id=818942&sec_hash=3e36a0fafd3&width=350px";
	   s.parentNode.insertBefore(g, s);
	}(document, "script"));
