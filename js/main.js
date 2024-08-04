document.addEventListener('DOMContentLoaded', () => {
	var swiper = new Swiper(".cormSwiper", {
		effect: 'fade',
		fadeEffect: {
		  crossFade: true
		},
		speed: 800,
		spaceBetween:20,
		pagination: {
		  el: ".swiper-pagination",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		  },
	  });
	
	var swiperImg = new Swiper(".swiper-img", {
		direction: "vertical",
	  });
	
	swiper.on('slideChange', () => {
		swiperImg.slideTo(swiper.activeIndex);
	})
	swiperImg.on('slideChange', () => {
		swiper.slideTo(swiperImg.activeIndex);
	})
	
})
