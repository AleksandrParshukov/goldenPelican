function init_mobile_menu() {
  const $toggle = $('.js_menu_toggle'),
    $header__mobile = $('.header__mobile');

  $toggle.on('click', function (evt) {
    evt.preventDefault();

    $header__mobile.toggleClass('open');
  });
}

function init_sliders() {
  const $slider_nav = $('.slider_nav');

  $('.helped__list, .other_news__list').owlCarousel({
    loop: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
        autoWidth: true,
      },
      576: {
        items: 3,
        autoWidth: false,
      },
      992: {
        items: 4,
      },
    },
  });

  $('.projects_page__slider').owlCarousel({
    loop: false,
    dots: false,
    items: 1,
  });

  $('.project_page__slider').owlCarousel({
    loop: false,
    items: 1,
    responsive: {
      0: {
        dots: true,
      },
      576: {
        dots: false,
      },
    },
  });

  if (window.innerWidth <= 576) {
    $('.projects__list, .news__gallery_list').owlCarousel({
      loop: false,
      dots: false,
      items: 1,
      autoWidth: true,
    });
  }

  $.each($slider_nav, function () {
    const $nav_item = $(this);
    move_slider($nav_item);
  });

  function move_slider($nav_item) {
    const $slider_container = $nav_item.closest('.js_slider_container'),
      $slider = $slider_container.find('.owl-carousel');

    $nav_item.on('click', function (evt) {
      evt.preventDefault();

      if ($nav_item.hasClass('slider_nav--next')) {
        $slider.trigger('next.owl.carousel');
      } else {
        $slider.trigger('prev.owl.carousel');
      }
    });
  }
}

$(document).ready(function () {
  init_sliders();

  if (window.innerWidth <= 576) {
    init_mobile_menu();
  }
});
