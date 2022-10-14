/*sticky header*/
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $("header.navbar").addClass("darkHeader");
    $("#back-to-top").fadeIn(300);
  } else {
    $("header.navbar").removeClass("darkHeader");
    $("#back-to-top").fadeOut(300);
  }
});

$(document).ready(function () {
  /* Slider */
  $(".os-items-bx").slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
