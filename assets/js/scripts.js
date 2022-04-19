/*
Author       : Masum Billah
Version      : 1.0
*/

(function($) {
	'use strict';
	
	jQuery(document).ready(function(){
	// one page nav
		$('#main-menu').onePageNav({
			currentClass: 'current',
			changeHash: true,
			scrollSpeed: 3000,
			scrollThreshold: 0.5,
			filter: '',
			easing: 'swing',
			begin: function() {
				//I get fired when the animation is starting
			},
			end: function() {
				//I get fired when the animation is ending
			},
			scrollChange: function(jQuerycurrentListItem) {
				//I get fired when you enter a section and I pass the list item of the section
			}
		});	
			
		/*PRELOADER JS*/
		$(window).load(function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/
		
		// Active Slick Nav 			
		$('#main-menu').slicknav({
			label: '',
			duration: 1000,
			easingOpen: "easeOutBounce", //available with jQuery UI
			prependTo:'#mobile_menu',
			closeOnClick: true,
			easingClose:"swing", 
			easingOpen:"swing", 
			openedSymbol: "&#9660;",
			closedSymbol: "&#9658;" 	
		});
	
		// Active fixed-top	
		if ($(window).scrollTop() > 200) {
              $('.fixed-top').addClass('menu-bg');
          } else {
              $('.fixed-top').removeClass('menu-bg');
          }
			$(window).on('scroll', function(){
				if ( $(window).scrollTop() > 70 ) {
					$('.site-navigation, .header-white, .header').addClass('navbar-fixed');
				} else {
					$('.site-navigation, .header-white, .header').removeClass('navbar-fixed');
				}
			});			
		/*END MENU JS*/ 			
		
		/*START HOME WATER JS*/
		
			 if (typeof $.fn.ripples == 'function') {
				try {
					$('#ripple').ripples({
						resolution: 500,
						perturbance: 0.01
					});
				} catch (e) {
					$('.error').show().text(e);
				}
			}
	
		/*END HOME WATER JS*/
		
		/* START JQUERY LIGHTBOX*/
		jQuery('.lightbox').venobox({
			numeratio: true,
			infinigall: true
		});	
		/* END JQUERY LIGHTBOX*/			
		/*START PORTFOLIO JS*/
		$('.portfolio_item').mixItUp({
		
		});		
		/*END PORTFOLIO JS*/
		
		/*END Portfolio Slider JS*/
		$('.portfolio-slider').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1
		});
		/*END Portfolio Slider JS*/
		
		/*START VIDEO JS*/
		$('.video-play').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/	

		/*START Video Play Icon JS*/
		$('.video-play-icon').magnificPopup({
            type: 'iframe'
        });
		/*END VIDEO JS*/
		
		/*START PROGRESS-BAR JS*/
	    $('.progress-bar > span').each(function(){
			var $this = $(this);
			var width = $(this).data('percent');
			$this.css({
				'transition' : 'width 2s'
			});
			
			setTimeout(function() {
				$this.appear(function() {
						$this.css('width', width + '%');
				});
			}, 500);
		});
		/*END PROGRESS-BAR JS*/
								
		/*START COUNDOWN JS*/
		$('.counter').on('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).find('.timer').each(function () {
					var $this = $(this);
					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter));
						}
					});
				});
				$(this).unbind('inview');
			}
		});
		/*END COUNDOWN JS */
			
		/* START TESTIMONIAL JS */
			$("#testimonial-slider").owlCarousel({
			    items:3,
				itemsDesktop:[1000,2],
				itemsDesktopSmall:[980,1],
				itemsTablet:[768,1],
				itemsMobile:[650,1],
				pagination:true,
				navigation:false,
				slideSpeed:1000,
				autoPlay:false
			});
		/* END TESTIMONIAL JS */		

	}); 	
	
	/* START PARALLAX JS */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */		

	/*START WOW ANIMATION JS*/
	  new WOW().init();	
	/*END WOW ANIMATION JS*/	
	
})(jQuery);


  

