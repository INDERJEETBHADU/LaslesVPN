$('.slick').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  arrow: true,
  prevArrow: '.back',
  nextArrow: '.next',
  responsive: [
    {
      breakpoint: 986,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 985,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
})