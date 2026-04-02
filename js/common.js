$(document).ready(function() {


	//кнопка sandwich
	$(".sandwich").click(function () {
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
			$(".sandwich").addClass("active");
			$("body").addClass("no-scroll");
			$(".menu-overlay").fadeIn(200);
		} else {
			$(".menu-mobile").slideUp(200);
			$(".sandwich").removeClass("active");
			$("body").removeClass("no-scroll");
			$(".menu-overlay").fadeOut(200);
		}
	});

	$(".menu-overlay").click(function () {
		$(".menu-mobile").slideUp(200);
		$(".sandwich").removeClass("active");
		$("body").removeClass("no-scroll");
		$(".menu-overlay").fadeOut(200);
	});

	//questions

	 $(".item-question__head").click(function() {
    $(this).parent().toggleClass("active");
    $(this).siblings().slideToggle(200);
    $(this).parent().siblings(".item-question").removeClass("active");
    $(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
  });

	//слайдер

	$('.slider').slick({
		arrows: true,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 //tabs

	   $('.tabs li a').click(function(event) {
    event.preventDefault();
    $(this).parent().parent().find("li").removeClass('active');
    $(this).parent().addClass('active');
    $(".tab-pane").fadeOut(0);
    var selectTab = $(this).attr("href");
    $(selectTab).fadeIn(200);
  });

	//Попап менеджер FancyBox
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});


});

