jQuery(document).ready(function ($) {
	$('a')
		.live('touchstart', function () {
			isScrolling = false;
		})
		.live('touchmove', function (e) {
			isScrolling = true;
		})
		.live('touchend', function (e) {
			if (!isScrolling && !this.attr("boton-prueba")) {
				window.location = $(this).attr('href');
			}
		});

	$(".wpcf7-disabled").attr("disabled", "disabled");

	// MENU
	$('.navbar-toggler').click(function () {
		if ($('.wrapper-menu').hasClass("active")) {
			$('.wrapper-menu, .navbar-toggler').removeClass("active");
			$('.wrapper-menu').addClass("unactive");
			$('.navbar-text').html('MENU');
			if ($('html').attr('lang') == 'es-ES') {
				$('.navbar-text').html('MENU');
			}
		} else {
			$('.wrapper-menu, .navbar-toggler').addClass("active");
			$('.wrapper-menu').removeClass("unactive");
			$('.navbar-text').html('CLOSE');
			if ($('html').attr('lang') == 'es-ES') {
				$('.navbar-text').html('CERRAR');
			}
		}
	});


	$(function () {
		$(window).scroll(function () {
			// get the scroll position of the document + half the window height
			var scrollTop = $(document).scrollTop() + ($(window).height() / 2);
			var positions = [];

			// push each of the items we want to check against to an array with their position and selector
			var idarticle = $('article.active').attr('id');
			$('article').each(function () {
				positions.push({
					position: $(this).position().top,
					element: $(this)
				});
			});

			idClose = $('.side-link.active').attr('data-navbar');
			var getClosest = closest(positions, scrollTop);
			activeNavbar = $(getClosest).attr('id');

			if ($(getClosest).attr('id') != idClose) {
				$("a[data-navbar='" + activeNavbar + "']").addClass("active"); // the element closest to the middle of the screen

				$("a[data-navbar='" + idClose + "']").removeClass("active");
			}
		});

		// finds the nearest position (from an array of objects) to the specified number
		function closest(array, number) {
			var num = 0;
			for (var i = array.length - 1; i >= 0; i--) {
				console.log(array[i]);
				a = array[i].element.height();
				b = array[num].element.height();

				if (Math.abs(number - array[i].position - a / 2) < Math.abs(number - array[num].position - b / 2)) {
					num = i;

				}
			}
			return array[num].element;
		}
	});


	// Disable acordion Hide



	// ANIMACIÃ“N SIDE NAVBAR
	// var carouselHeight = $('.carousel').height();
	// var y = $('.side-navbar').offset().top;
	//
	// if (y > carouselHeight) {
	//   $('.side-navbar').css({"opacity":"1","left":"4%"});
	// }
	// $(document).scroll(function() {
	//    carouselHeight = $('.carousel').height();
	//    y = $('.side-navbar').offset().top;
	//   if (y > carouselHeight) {
	//     $('.side-navbar').css({"opacity":"1","left":"4%"});
	//   } else {
	//     $('.side-navbar').css({"opacity":"0","left":"-100px"});
	//   }
	// });

	// Animation Fixed NAVBAR
	/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

	$('a[data-navbar], .card-component a, .card-container-link').click(function (event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function () {

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});

	//letras
	window.sr = ScrollReveal({
		reset: true
	});
	// Custom Settings
	// sr.reveal('.area_h3', { duration: 200 });



	if ($(window).width() >= 768) {
		sr.reveal('.efecto1', {
			origin: 'right',
			duration: 2000
		});

		sr.reveal('.efecto2', {
			origin: 'right',
			duration: 2000
		});

		sr.reveal('.efecto2r', {
			origin: 'right',
			duration: 1500
		});

		sr.reveal('.efecto3', {
			origin: 'left',
			duration: 2000
		});

		sr.reveal('.efecto4', {
			origin: 'top',
			enter: 'top',
			duration: 2000
		});
		sr.reveal('.galleryEfect div', {
			delay: 500,
			useDelay: 'onload',
			reset: false,
			scale: 0.85,
			duration: 1500,
		});
		sr.reveal('.img-cuadro_superior_producto', {
			delay: 500,
			useDelay: 'onload',
			reset: false,
			scale: 0.85,
			duration: 1500,
		});

		sr.reveal('.efecto5', {
			origin: 'bottom',
			duration: 2000
		});

		sr.reveal('.foo-4', {
			viewFactor: 0.5
		});
	}

	sr.reveal('.foo-3', {
		rotate: {
			x: 100,
			y: 100,
			z: 0
		},
		duration: 1000
	});

	sr.reveal('.foo-5', {
		duration: 200
	});

	// CAROUSEL
	$('.carousel').carousel({
		pause: "false"
	});


	// Formulario JS
	jQuery('input[type=file]').change(function () {
		var filename = jQuery(this).val().split('\\').pop();
		var idname = jQuery(this).attr('id');
		jQuery('#curriculum').find('span.label-file').html(filename);
		if (filename != "") {
			jQuery('.text-btn-file').text('Cambiar archivo');
		} else {
			jQuery('.text-btn-file').text('Seleccionar archivo');
		}
	});


	$(".desplegable").click(function () {
		$("i", this).toggleClass("fa-plus-circle fa-minus-circle");
	});

	if (window.innerWidth < 992) {
		if (!$('.blog-widgets .widget_categories').hasClass("collapse")) {
			$('.blog-widgets .widget_categories').addClass("collapse");
			$('.blog-widgets .widget_recent_entries').addClass("collapse");
		}
	} else {
		$('.blog-widgets .widget_categories').removeClass("collapse");
		$('.blog-widgets .widget_recent_entries').removeClass("collapse");
	}
	$(window).resize(function () {
		if (window.innerWidth < 992) {
			if (!$('.blog-widgets .widget_categories').hasClass("collapse")) {
				$('.blog-widgets .widget_categories').addClass("collapse");
				$('.blog-widgets .widget_recent_entries').addClass("collapse");
			}
		} else {
			if ($('.blog-widgets .widget_categories').hasClass("collapse")) {
				$('.blog-widgets .widget_categories').removeClass("collapse");
				$('.blog-widgets .widget_recent_entries').removeClass("collapse");
			}
		}
	});

	$(function () {
		// get the scroll position of the document + half the window height
		var scrollTop = $(document).scrollTop() + ($(window).height() / 2);
		var positions = [];

		// push each of the items we want to check against to an array with their position and selector
		var idarticle = $('article.active').attr('id');
		$('article').each(function () {
			positions.push({
				position: $(this).position().top,
				element: $(this)
			});
		});

		idClose = $('.side-link.active').attr('data-navbar');
		var getClosest = closest(positions, scrollTop);
		activeNavbar = $(getClosest).attr('id');

		if ($(getClosest).attr('id') != idClose) {
			$("a[data-navbar='" + activeNavbar + "']").addClass("active"); // the element closest to the middle of the screen

			$("a[data-navbar='" + idClose + "']").removeClass("active");
		}
	});

	// finds the nearest position (from an array of objects) to the specified number
	function closest(array, number) {
		var num = 0;
		for (var i = array.length - 1; i >= 0; i--) {
			console.log(array[i]);
			a = array[i].element.height();
			b = array[num].element.height();

			if (Math.abs(number - array[i].position - a / 2) < Math.abs(number - array[num].position - b / 2)) {
				num = i;

			}
		}
		return array[num].element;
	}


});
