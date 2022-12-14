function init_mobile_menu() {
  const $toggle = $('.js_menu_toggle'),
    $header__mobile = $('.header__mobile');

  $toggle.on('click', function (evt) {
    evt.preventDefault();

    $header__mobile.toggleClass('open');
    $('body').toggleClass('modal_open');
  });
}

function init_sliders() {
  const $slider_nav = $('.slider_nav');

  $('.helped__list, .other_news__list').owlCarousel({
		loop: false,
		dots: false,
		autoWidth: true,
		responsive: {
			0: {
				items: 1,
			},
			576: {
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

function init_custom_select() {
  const $selects = $('.select');

  $.each($selects, function () {
    const $select = $(this),
      $select_current = $select.find('.select__current'),
      $select_body = $select.find('.select__body'),
      $select_options = $select_body.find('.select__option');

    let height = 0;

    $.each($select_options, function () {
      const $item = $(this);

      height += $item.outerHeight(true);

      $item.on('click', function (evt) {
        evt.preventDefault();

        $select_current.html($item.html());

        $select_body.height(0);
        $select_body.removeClass('open');
      });
    });

    $select_current.on('click', function (evt) {
      evt.preventDefault();

      if ($select_body.hasClass('open')) {
        $select_body.height(0);
        $select_body.removeClass('open');
      } else {
        $select_body.height(height);
        $select_body.addClass('open');
      }
    });
  });
}

function init_popup() {
	const $modal_open = $('.js_modal_open'),
		$modal = $('.modal'),
		$modal_overflow = $modal.find('.modal__overflow'),
		$modal_close = $modal.find('.modal__close');

	$modal_open.on('click', function (evt) {
		evt.preventDefault();
		open_modal();
	});

	$modal_close.on('click', function (evt) {
		evt.preventDefault();
		close_modal();
	});

	function open_modal() {
		$modal.addClass('open');
		const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
		const body = document.body;
		body.style.position = 'fixed';
		body.style.top = `-${scrollY}`;
		body.style.left = '0';
		body.style.right = '0';
	}

	function close_modal() {
		$modal.removeClass('open');

		const body = document.body;
		const scrollY = body.style.top;
		body.style.position = '';
		body.style.top = '';
		window.scrollTo(0, parseInt(scrollY || '0') * -1, 'auto');
	}

	window.addEventListener('scroll', () => {
		document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
	});
}

function init_progress_bar() {
	const $progress_bar = $('.hall_of_fame__progress');

	if (!$progress_bar.length) {
		return false;
	}

	const current_sum = $progress_bar.data('current'),
		goal = $progress_bar.data('goal'),
		progress = current_sum < goal ? current_sum / goal : 1;

	$progress_bar.find('#fill_circle').attr('stroke-dasharray', `${progress * 251.2}, 251.2`);
}

function init_list_loader() {
	const $load_btns = $('.load_btn');

	$.each($load_btns, function () {
		const $load_btn = $(this),
			$list = $(`#${$load_btn.data('for')}`),
			items_to_show = $list.data('items_to_show');

		$list.height(get_visible_height());

		$load_btn.on('click', function (evt) {
			evt.preventDefault();

			const $hidden_items = $list.children(':not(.mobile_visible)');
			for (let i = 0; i < items_to_show; i++) {
				$($hidden_items[i]).addClass('mobile_visible');
			}

			if ($hidden_items.length < items_to_show) {
				$load_btn.slideUp(500, function () {
					$load_btn.remove();
				});
			}

			$list.height(get_visible_height());
		});

		function get_visible_height() {
			const $visible_items = $list.children('.mobile_visible');
			let height = 0;

			$.each($visible_items, function () {
				const $item = $(this);

				height += $item.outerHeight(true);
				console.log(`cur: ${$item.outerHeight(true)}`);
				console.log(`tot: ${height}`);
			});

			return height;
		}
	});
}

$(document).ready(function () {
	init_sliders();
	init_custom_select();
	init_popup();
	init_progress_bar();

	if (window.innerWidth <= 576) {
		init_mobile_menu();
		init_list_loader();
	}
});
