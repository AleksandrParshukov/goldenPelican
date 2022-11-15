/* ********** Swipers ********** */


const banner_slider = new Swiper ('.banner_slider', {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
  },
  speed: 1250,
  navigation: {
    nextEl: '.banner_slider__control--next',
    prevEl: '.banner_slider__control--prev',
  },
  pagination: {
    el: '.banner_slider__pagination',
    clickable: true,
  },
})

const reviews_swiper = new Swiper ('.reviews__list', {
  loop: false,
  slidesPerView: "auto",
  navigation: {
    nextEl: '.reviews__control--next',
    prevEl: '.reviews__control--prev',
  },
})

const certificate__promotions_swiper = new Swiper ('.certificate__promotions .promotions__list', {
  loop: false,
  slidesPerView: "auto",
  navigation: {
    nextEl: '.reviews__control--next',
    prevEl: '.reviews__control--prev',
  },
})

const recommendations_swiper = new Swiper ('.recommendations__list', {
  loop: false,
  slidesPerView: "auto",
  navigation: {
    nextEl: '.recommendations__swiper_control--next',
    prevEl: '.recommendations__swiper_control--prev',
  },
})

$.each($('.contacts__swiper--mini'), function() {
  const id = $(this).attr('id'),
        $images = $(this).find('.contacts__image');

  const contacts_swiper = new Swiper (`#${id}`, {
    loop: false,
    slidesPerView: "auto",
    navigation: {
      nextEl: `#${id} .contacts__swiper_next`,
      prevEl: `#${id} .contacts__swiper_prev`,
    },
  })

  $.each($images, function() {
    const $img = $(this);

    $img.on('click', function() {
      $(`#${id}_modal`).find('.modal_image').attr('src', $img.attr('src'));
      $(`#${id}_modal`).fadeIn();
      $(`#${id}_modal`).find('.contacts__swiper_overlay').on('click', hideModal)
    })
  })


  function hideModal() {
    $(`#${id}_modal`).fadeOut();
    $(`#${id}_modal`).find('.contacts__swiper_overlay').off('click', hideModal)
  }
})





/* ********** Filter ********** */
const $filter__checkbox = $('.filter__checkbox'),
      $filter__radio = $('.filter__radio');

$.each($filter__checkbox, function() {
  const $elem = $(this),
        $label = $elem.closest('.filter__label');

  $elem.on('click', function(evt) {
    $label.toggleClass('checked');
  })
})

$.each($filter__radio, function() {
  const $elem = $(this),
        $label = $elem.closest('.filter__label');

  $elem.on('click', function(evt) {
    $elem.closest('.filter__option').find('.filter__label.checked').removeClass('checked');
    
    $label.addClass('checked');
  })
})





/* ********** Header Menu ********** */

const $header__open_menu = $('.header__open_menu'),
      $header__close_menu = $('.header__close_menu'),
      $dropdown_links = $('.main_nav__item--dropdown .main_nav__link'),
      $submenu__close_btn = $('.submenu__close_btn'),
      $header__main_nav_container = $('.header__main_nav_container'),
      $header__search_btn = $('.header__search_btn'),
      $footer_control__open_menu = $('.footer_control__open_menu');

$header__open_menu.on('click', function(evt) {
  evt.preventDefault();

  $header__main_nav_container.addClass('open');
  $('.header').addClass('open');
})
$footer_control__open_menu.on('click', function(evt) {
  evt.preventDefault();

  $header__main_nav_container.addClass('open');
  $('.header').addClass('open');
})

$header__close_menu.on('click', function(evt) {
  evt.preventDefault();

  $header__main_nav_container.removeClass('open');
  $('.header').removeClass('open');
})

$header__search_btn.on('click', function(evt) {
  evt.preventDefault();

  $header__search_btn.parent().toggleClass('open');
})

$dropdown_links.on('click', function(evt) {
  evt.preventDefault();

  $(this).closest('.main_nav__item').find('.submenu').addClass('open');
  $('body').addClass('modal_open');
})

$submenu__close_btn.on('click', function(evt) {
  evt.preventDefault();

  $submenu__close_btn.closest('.submenu').removeClass('open');
  $('body').removeClass('modal_open');
})





/* ********** Footer ********** */

const $footer_menu = $('.footer_menu'),
      $footer_control = $('.footer_control'),
      $footer_control__submenu_link = $footer_control.find('.footer_control__submenu_link'),
      $footer_control__submenu_close = $footer_control.find('.footer_control__submenu_close');

$.each($footer_menu, function() {
  const $menu = $(this);
        $title = $menu.find('.footer_menu__title');

  $title.on('click', function(evt) {
    evt.preventDefault();

    $menu.toggleClass('open');
  })
})

$footer_control__submenu_link.on('click', function(evt) {
  evt.preventDefault();

  $(this).parent().find('.footer_control__submenu').addClass('open');
})

$footer_control__submenu_close.on('click', function(evt) {
  evt.preventDefault();

  $(this).closest('.footer_control__submenu').removeClass('open');
})





/* ********** Materials ********** */

const $material_page__dropdown = $('.material_page__dropdown');

$.each($material_page__dropdown, function() {
  const $dropdown = $(this);
        $caption = $dropdown.find('.material_page__caption');

  $caption.on('click', function(evt) {
    evt.preventDefault();

    $dropdown.toggleClass('open');
  })
})





/* ********** Product Page ********** */

const INFO_SECTIONS = ['Описание', 'Характеристики', 'Материалы', 'Преимущества', 'Отзывы', 'Вопрос-ответ'];
const INFO_SECTIONS_MOBILE1 = ['Описание', 'Характеристики', 'Преимущества'];
const INFO_SECTIONS_MOBILE2 = ['Отзывы', 'Вопрос-ответ', 'Материалы'];

const $big_img = $('.product_page__big_image'),
      $product_page__size_wrap = $('.product_page__size_wrap'),
      $product_page__size_caption = $product_page__size_wrap.find('.product_page__size_caption'),
      $product_page__size_list = $product_page__size_wrap.find('.product_page__size_list');

const product_page__swiper = new Swiper ('.product_page__swiper', {
  loop: false,
  navigation: {
    nextEl: '.product_page__swiper_next',
    prevEl: '.product_page__swiper_prev',
  },
  slidesPerView: 'auto',
})

$('.product_page__swiper .product_page__image').on('click', function() {
  const img_path = $(this).attr("src");

  $big_img.attr("src", img_path);
  $(this).closest('.product_page__swiper').find('.swiper-slide.active').removeClass('active');
  $(this).closest('.swiper-slide').addClass('active');
})

if(window.innerWidth > 576) {
  const info_swiper1 = new Swiper ('.info__row--desktop', {
    allowTouchMove: false,
    autoHeight: true,
    loop: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
      },
    pagination: {
      el: '.info__paginnation',
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + ' info__page_btn">' + (INFO_SECTIONS[index]) + '</span>';
        },
    },
  })
} else {
  const info_swiper2 = new Swiper ('.info__row--mobile1', {
    allowTouchMove: false,
    autoHeight: true,
    loop: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
      },
    pagination: {
      el: '.info__paginnation',
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + ' info__page_btn">' + (INFO_SECTIONS_MOBILE1[index]) + '</span>';
        },
    },
  })
  
  const info_swiper3 = new Swiper ('.info__row--mobile2', {
    allowTouchMove: false,
    autoHeight: true,
    loop: false,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
      },
    pagination: {
      el: '.info__paginnation',
      clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + ' info__page_btn">' + (INFO_SECTIONS_MOBILE2[index]) + '</span>';
        },
    },
  })
}



$product_page__size_caption.on('click', function(evt) {
  evt.preventDefault();


  const $size_list = $product_page__size_wrap.find('.product_page__size_list'),
        $size_items = $size_list.find('.product_page__size_item');

  let height = 0;

  $.each($size_items, function() {
    const $item = $(this);
    
    height += $item.outerHeight(true);

    $item.on('click', function() {
    
      $product_page__size_wrap.removeClass('open');

      $product_page__size_wrap.find('.product_page__size_caption').text($item.text());
    
      if($size_list.height() !== height) {
        $size_list.height(height);
      } else {
        $size_list.height(0);
      }
    })

  })

  $product_page__size_wrap.toggleClass('open');

  if($size_list.height() !== height) {
    $size_list.height(height);
  } else {
    $size_list.height(0);
  }
})
  
  
$(document).ready(function() {

  const $cart_parent = $('.cart');

  $cart_parent.on('click', '.cart__size_btn', function(evt) {
    evt.preventDefault();

    const $cart__size_btn = $(this),
          $size_list = $cart__size_btn.closest('.cart__size_select').find('.cart__size_list'),
          $size_items = $size_list.find('.cart__size');

    let height = 0;

    $.each($size_items, function() {
      const $item = $(this);
      
      height += $item.outerHeight(true);
    })

    $cart__size_btn.parent().toggleClass('open');

    if($size_list.height() !== height) {
      $size_list.height(height);
    } else {
      $size_list.height(0);
    }
  })

  const $compare_table = $('.compare_list_table');

  if ($compare_table && window.innerWidth < 577) {
    set_compare_table_width();

    $('document').on('load', '.compare_list_table', function() {
      set_compare_table_width();
    })
  
    
    function set_compare_table_width() {
      const $cols = $('.compare-list-table-header .compare-list-table-cell');
  
      $compare_table.width(($($cols[1]).width() + 1) * ($cols.length - 1));
    }
  }

  if (window.innerWidth < 577) {

    window.onscroll = function() {myFunction()};
    // Get the header
    var header = $(".header")[0];

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    myFunction();
    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    } 
  }
})