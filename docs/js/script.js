function init_mobile_menu() {
  const $toggle = $('.js_menu_toggle'),
    $header__mobile = $('.header__mobile');

  $toggle.on('click', function (evt) {
    evt.preventDefault();

    $header__mobile.toggleClass('open');
  });
}

function init_sliders() {}

$(document).ready(function () {
  init_sliders();

  if (window.innerWidth <= 576) {
    init_mobile_menu();
  }
});
