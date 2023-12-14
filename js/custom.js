$(function () {

  //animation scroll js
  var html_body = $('html, body');
  $('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        html_body.animate({
          scrollTop: target.offset().top - 80
        }, 1500);
        return false;
      }
    }
  });


  //banner-slider

  $('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
  })

  //about video

  $('.venobox').venobox();

  //testimonial slider

  $('.test-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })

  //counter part

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  //sponsor slider

  $('.sponsor-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fa fa-chevron-right nxt" aria-hidden="true"></i>',
    responsive: [{
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
    ]
  });


  // Sticky Menu

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 150) {
      $('.main-menu').addClass('bg');
    } else {
      $('.main-menu').removeClass('bg');
    }
    if (scrolling > 300) {
      $('.back-to-top').fadeIn(500);
    } else {
      $('.back-to-top').fadeOut(500);
    }
  });


  // Back To Top:

  $('.back-to-top').click(function () {
    $('html,body').animate({
      scrollTop: 0
    }, 1500)
  });


  // color switcher

  var colorSheets = [{
      color: "#e23e38",
      title: "Switch to Default",
      href: "./css/color-default.css"
    },
    {
      color: "#7900d6",
      title: "Switch to purple",
      href: "./css/purple.css"
    },
    {
      color: "#005700",
      title: "Switch to Green",
      href: "./css/green.css"
    },
    {
      color: "#0000FF",
      title: "Switch to Blue",
      href: "./css/blue.css"
    },
    {
      color: "#24ffff",
      title: "Switch to cyan",
      href: "./css/cyan.css"
    }
  ];

  ColorSwitcher.init(colorSheets);
});