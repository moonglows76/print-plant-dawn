var $window = '',
    $body = '',
    $header = '',
    $btnMenu = '',
    $btnPagetop = '',
    $secTopShopinfo__menuDetail = '',
    preScrollPos = 0,
    resultDetectSpPc = '';

// SP/PC判定
var detectSpPc = function () {
  var detectBlock = document.querySelector('.footer__sitemap');
  var style = window.getComputedStyle(detectBlock);
  if ( style.display != "grid" ){
    return "SP";
  } else {
    return "PC";
  }
};
resultDetectSpPc = detectSpPc();


$(function () {
  $window = $(window),
  $body = $('body'),
  $header = $('.header'),
  $btnMenu = $('.header__btn-menu'),
  $secTopShopinfo__menuDetail = $('.sec-top-shopinfo__menu-detail'),
  $btnPagetop = $('.btn-pagetop');

  $('.sec-top-mv__slider').slick({
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    pauseOnHover: false,
    nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-arrow" role="img"><use xlink:href="#arrow"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="icon icon-arrow" role="img"><use xlink:href="#arrow"></use></svg></button>',
    appendArrows: '.sec-top-mv__slider-arrows-dots',
    appendDots: '.sec-top-mv__slider-arrows-dots',
  });

  $('.sec-top-primary-service__slider--letterpress').slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 4000,
      settings: {
        centerMode: true,
        centerPadding: '9.5%',
        variableWidth: true,
      }
    }, {
      breakpoint: 968,
      settings: {
        centerMode: false,
        centerPadding: '0px',
      }
    }],
  });

  $('.sec-top-primary-service__slider--special-letterpress').slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 4000,
      settings: {
        centerMode: true,
        centerPadding: '9.5%',
        variableWidth: true,
      }
    }, {
      breakpoint: 968,
      settings: {
        centerMode: false,
        centerPadding: '0px',
      }
    }],
  });

  $('.sec-top-shopinfo__slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 3000,
    pauseOnHover: false,
    speed: 500,
    nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-arrow" role="img"><use xlink:href="#arrow"></use></svg></button>',
    prevArrow: '<button type="button" class="slick-prev"><svg class="icon icon-arrow" role="img"><use xlink:href="#arrow"></use></svg></button>',
    appendArrows: '.sec-top-shopinfo__slider-arrows-dots',
    appendDots: '.sec-top-shopinfo__slider-arrows-dots',
  });

  // スムーズスクロールの設定
  $('a[href*="#"]').smoothScroll({
    easing: 'swing',
    speed: 500,
    preventDefault: true,
    afterScroll: function() {
      if ($body.hasClass('is-nav-active') ) {
        $body.removeClass('is-nav-active');
      }
    },
  });

  // スクロールで表示
  AOS.init({
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    duration: 700, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
  });

  // click evnet for header buttons
  $btnMenu.on('click', function () {
    $(this).toggleClass('is-active');
    $body.toggleClass('is-nav-active');
  });

  // SP版トップの店舗情報開閉
  $('.sec-top-shopinfo__menu-btn').on('click', function () {
    $(this).toggleClass('is-active');
    $(this).next().toggle();
  });

  // click event for document
  $(document).on('click', function(e) {
    if ( $body.hasClass('is-nav-active') ) {
      // menu
      // detect click position
      if( !$(e.target).closest('.nav').length && !$(e.target).closest('.header__btn-menu').length ){
        $body.removeClass('is-nav-active');
        $btnMenu.removeClass('is-active');
      }
    }
  });

  // resize event for window
  $window.on('resize', function () {
    // SP/PC判定
    detectSpPc();
  });

  // scroll event for window
  $window.on('scroll', function () {

    // ページの先頭へリンクの表示
    if($window.scrollTop() < preScrollPos) {
      $body.addClass('is-scrollup').removeClass('is-scrolldown');
      $btnPagetop.addClass('is-active');
      if ($window.scrollTop() <= 0) {
        $btnPagetop.removeClass('is-active');
      }
    } else {
      $body.removeClass('is-scrollup').addClass('is-scrolldown');
      $btnPagetop.removeClass('is-active');
    }

    preScrollPos = $window.scrollTop();
  });

});