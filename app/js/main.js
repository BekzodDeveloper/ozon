$(document).ready((function () {
  $('.main-stocks__slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    variableWidth: true,
    responsive: [
      // {
      //   breakpoint: 1260,
      //   settings: {
      //     // centerMode: true,
      //   }
      // },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //     }
      //   }
      //   // You can unslick at a given breakpoint now by adding:
      //   // settings: "unslick"
      //   // instead of a settings object
    ]
  });
  $('.new-items__products-slider').slick({
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    variableWidth: true,
    // focusOnSelect: true,
    // initialSlide: 2,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: true,

        }
      },
    ]
  });

  $('.discounts__products-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    variableWidth: true,
    // focusOnSelect: true,
    // initialSlide: 2,
    responsive: [
      // {
      //   breakpoint: 1260,
      //   settings: {
      //     slidesToShow: 1,
      //   }
      // },
    ]
  });

  $('.bestsellers__products-slider').slick({
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    centerMode: false,
    variableWidth: true,
    responsive: [
      // {
      //   breakpoint: 450,
      //   settings: {
      //     variableWidth: false,
      //     slidesToShow: 1,
      //     centerMode: true,

      //   }
      // },
      //   {
      //     breakpoint: 600,
      //     settings: {
      //       slidesToShow: 2,
      //       slidesToScroll: 2
      //     }
      //   },
      //   {
      //     breakpoint: 480,
      //     settings: {
      //       slidesToShow: 1,
      //       slidesToScroll: 1
      //     }
      //   }
      //   // You can unslick at a given breakpoint now by adding:
      //   // settings: "unslick"
      //   // instead of a settings object
    ]
  });

  $('.brands__slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          infinite: true,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  $("#new-items__star-1").click(function () {
    $(".new-items__star").css("color", "");
    $("#new-items__star-1").css("color", "#ffc600");
  });
  $("#new-items__star-2").click(function () {
    $(".new-items__star").css("color", "");
    $("#new-items__star-1, #new-items__star-2").css("color", "#ffc600");
  });
  $("#new-items__star-3").click(function () {
    $(".new-items__star").css("color", "");
    $("#new-items__star-1, #new-items__star-2, #new-items__star-3").css("color", "#ffc600");
  });
  $("#new-items__star-4").click(function () {
    $(".new-items__star").css("color", "");
    $("#new-items__star-1, #new-items__star-2, #new-items__star-3, #new-items__star-4").css("color", "#ffc600");
  });
  $("#new-items__star-5").click(function () {
    $(".new-items__star").css("color", "transparent");
    $(".new-items__star").css("color", "#ffc600");
  });

  $("#discounts__star-1").click(function () {
    $(".discounts__star").css("color", "");
    $("#discounts__star-1").css("color", "#ffc600");
  });
  $("#discounts__star-2").click(function () {
    $(".discounts__star").css("color", "");
    $("#discounts__star-1, #discounts__star-2").css("color", "#ffc600");
  });
  $("#discounts__star-3").click(function () {
    $(".discounts__star").css("color", "");
    $("#discounts__star-1, #discounts__star-2, #discounts__star-3").css("color", "#ffc600");
  });
  $("#discounts__star-4").click(function () {
    $(".discounts__star").css("color", "");
    $("#discounts__star-1, #discounts__star-2, #discounts__star-3, #discounts__star-4").css("color", "#ffc600");
  });
  $("#discounts__star-5").click(function () {
    $(".discounts__star").css("color", "transparent");
    $(".discounts__star").css("color", "#ffc600");
  });

  $("#bestsellers__star-1").click(function () {
    $(".bestsellers__star").css("color", "");
    $("#bestsellers__star-1").css("color", "#ffc600");
  });
  $("#bestsellers__star-2").click(function () {
    $(".bestsellers__star").css("color", "");
    $("#bestsellers__star-1, #bestsellers__star-2").css("color", "#ffc600");
  });
  $("#bestsellers__star-3").click(function () {
    $(".bestsellers__star").css("color", "");
    $("#bestsellers__star-1, #bestsellers__star-2, #bestsellers__star-3").css("color", "#ffc600");
  });
  $("#bestsellers__star-4").click(function () {
    $(".bestsellers__star").css("color", "");
    $("#bestsellers__star-1, #bestsellers__star-2, #bestsellers__star-3, #bestsellers__star-4").css("color", "#ffc600");
  });
  $("#bestsellers__star-5").click(function () {
    $(".bestsellers__star").css("color", "transparent");
    $(".bestsellers__star").css("color", "#ffc600");
  });


  $("#new-items__hover-item-star-1").click(function () {
    $(".new-items__hover-item-star").css("color", "");
    $("#new-items__hover-item-star-1").css("color", "#ffc600");
  });
  $("#new-items__hover-item-star-2").click(function () {
    $(".new-items__hover-item-star").css("color", "");
    $("#new-items__hover-item-star-1, #new-items__hover-item-star-2").css("color", "#ffc600");
  });
  $("#new-items__hover-item-star-3").click(function () {
    $(".new-items__hover-item-star").css("color", "");
    $("#new-items__hover-item-star-1, #new-items__hover-item-star-2, #new-items__hover-item-star-3").css("color", "#ffc600");
  });
  $("#new-items__hover-item-star-4").click(function () {
    $(".new-items__hover-item-star").css("color", "");
    $("#new-items__hover-item-star-1, #new-items__hover-item-star-2, #new-items__hover-item-star-3, #new-items__hover-item-star-4").css("color", "#ffc600");
  });
  $("#new-items__hover-item-star-5").click(function () {
    $(".new-items__hover-item-star").css("color", "transparent");
    $(".new-items__hover-item-star").css("color", "#ffc600");
  });




  $("#discounts__hover-item-star-1").click(function () {
    $(".discounts__hover-item-star").css("color", "");
    $("#discounts__hover-item-star-1").css("color", "#ffc600");
  });
  $("#discounts__hover-item-star-2").click(function () {
    $(".discounts__hover-item-star").css("color", "");
    $("#discounts__hover-item-star-1, #discounts__hover-item-star-2").css("color", "#ffc600");
  });
  $("#discounts__hover-item-star-3").click(function () {
    $(".discounts__hover-item-star").css("color", "");
    $("#discounts__hover-item-star-1, #discounts__hover-item-star-2, #discounts__hover-item-star-3").css("color", "#ffc600");
  });
  $("#discounts__hover-item-star-4").click(function () {
    $(".discounts__hover-item-star").css("color", "");
    $("#discounts__hover-item-star-1, #discounts__hover-item-star-2, #discounts__hover-item-star-3, #discounts__hover-item-star-4").css("color", "#ffc600");
  });
  $("#discounts__hover-item-star-5").click(function () {
    $(".discounts__hover-item-star").css("color", "transparent");
    $(".discounts__hover-item-star").css("color", "#ffc600");
  });

  $("#menu__btn").click(function () {
    $("#menu__list").toggleClass("open-menu");
  });

}));
