var owl = $('.owl-carousel');
owl.owlCarousel({
  items: 7,
  loop: true,
  margin: 30,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  nav: false,

  responsive: {
    1200: {
      items: 7,
      nav: false,
      loop: false,
    },
    991: {
      items: 4,
      nav: false,
      loop: false,
    },
    767: {
      items: 3,
      nav: false,
      loop: false,
    },
  },
});

$('.owl-slider').owlCarousel({
  loop: true,
  margin: 30,
  responsiveClass: true,
  items: 2,
  autoplay: false,
  autoplayTimeout: 3000,
  nav: false,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 2,
      nav: false,
      loop: false,
    },
  },
});
