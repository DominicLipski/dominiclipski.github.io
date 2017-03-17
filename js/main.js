$(document).ready(function(){
	$('.main-slider').slick({
    dots: true,
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	autoplaySpeed: 2000,
    prevArrow:'<span class="main-slider__arrow main-slider__arrow-left"></span>',
    nextArrow:'<span class="main-slider__arrow main-slider__arrow-right"></span>',
    dotsClass: 'main-slider__pagination',
  });
  $('.products-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    prevArrow:'<span class="main-slider__arrow main-slider__arrow-left"></span>',
    nextArrow:'<span class="main-slider__arrow main-slider__arrow-right"></span>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
})