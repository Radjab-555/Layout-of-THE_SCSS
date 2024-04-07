const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;

if (burger && menu); {
    burger.addEventListener('click', () => {
        
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
    })
}
                    //------Filter dropdown-------//
const filter = document.querySelector('.filter');

if (filter) {
    const items = filter.querySelectorAll('.block-filter');
    items.forEach(item => {                            
        item.addEventListener('click', event => {
            item.querySelector('.block-filter__dropdown').classList.toggle('_active');
            item.querySelector('.block-filter__icon').classList.toggle('_active');

            if (event.target.classList.contains('block-filter__item')) {
                item.querySelector('.block-filter__value').textContent = event.terget.textContent
            }
        })
    })
}

                    // ------swiper-------//
const popularSlider = new Swiper('.popular-slider', {
    // observer: true,
    spaceBetween: 20,
    slidesPerView: 1,
  navigation: {
    nextEl: '.popular-slider-prev',
    prevEl: '.popular-slider-next',
  },
  breakpoints: {
    992: {
    slidesPerView: 3,
    },
    660: {
    slidesPerView: 2,
    },
  }
} )

const reviewsSlider = new Swiper('.slider__reviews', {
    // observer: true,
    spaceBetween: 20,
    slidesPerView: 1,
    autoHeight: true,
  navigation: {
    nextEl: '.slider-reviews-next',
    prevEl: '.slider-reviews-next',
  },
  breakpoints: {
    992: {
    slidesPerView: 1,
    },
  }
} )
// gallery 
const gallereyItems = document.querySelectorAll(".gallery__item");
if (gallereyItems.length > 0) {
  galereyItems.forEach(item => {
    new Swiper(item, {
      slidesPerView: 1,
      autoplay: {
        dellay: 5000,
      },
      effect: "fade",
    }) 
  })
}