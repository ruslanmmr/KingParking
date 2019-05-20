$(document).ready(function () {
  lazy();
  cover();
  banner();
  mask();
  galery();
  scrollInit();
  form();
  scroll();
  popup();
});
$(window).resize(function () {
  innerWidth = $('body').innerWidth();
});

//global variables
var innerWidth = $('body').innerWidth();

//mask
function mask() {
  jQuery(function($){
    $(".masked-input").mask("+7 (999) 999 - 99 - 99");
 });
}
//lazy
function lazy() {
  $(".lazy").Lazy({
    visibleOnly: true,
    effect: 'fadeIn',
    effectTime: '300',
    afterLoad: function() {
      cover();
    }
  });
}
//image-cover-box
function cover() {
  $('.cover-box').each(function() {
    //set size
    var th = $(this).height(),//box height
        tw = $(this).width(),//box width
        im = $(this).children('img'),//image
        ih = im.height(),
        iw = im.width();
    if ((tw/th) >= (iw/ih)) {
        im.addClass('ww').removeClass('wh');
    } else {
        im.addClass('wh').removeClass('ww');
    }
  });
}
//banner
function banner() {
  var $slider = $('.home__slider');

  $slider.slick({
    infinite: true,
    dots: true,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1
  });
}
//banner
function galery() {
  var $slider = $('.gallery-slider'),
      $nav1 = $('.gallery .gallery-nav'),
      $nav2 = $('.about .gallery-nav');
  
    $('.gallery-slider').on('init reInit afterChange', function(){
      lazy();
    });
    $('.gallery-nav').on('init reInit afterChange', function(){
      lazy();
    });

  $slider.each(function() {
    let $navSlider = $(this).siblings('.gallery-nav'),
        $this = $(this);

    $(this).slick({
      infinite: true,
      dots: false,
      arrows: false,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'progressive',
      asNavFor: $navSlider
    });
  })
  $nav1.slick({
    infinite: true,
    dots: false,
    arrows: false,
    speed: 400,
    slidesToShow: 7,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    asNavFor: $('.gallery .gallery-slider'),
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3
        }
      }
    ]
  });
  $nav2.slick({
    infinite: true,
    dots: false,
    arrows: false,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
    asNavFor: $('.about .gallery-slider'),
    centerMode: true,
    focusOnSelect: true,
  });
}
//scroll 
function scroll() {
  var $scrolllink = $('.scroll-link');

  $scrolllink.on('click', function(event) {
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    event.preventDefault();

    $('body,html').animate({
      scrollTop: top
    }, 400);
  })
}

//popup
function popup() {

  $('[data-fancybox="certificates"]').fancybox({
    autoFocus: false,
    loop: true,
    animationEffect: "fade"
  });

  $('.gallery-slide').on('click', function() {
    var $selector = $(this).parents('.gallery-area').find('.slick-slide:not(.slick-cloned)');

    $.fancybox.open( $selector, {
        selector : $selector,
        backFocus : false,
        loop: true,
        animationEffect: "fade"
    }, $selector.index( this ) );

    return false;
  });

  $('body').removeClass('compensate-for-scrollbar');
}

function scrollInit() {
  //scroll-styling
  var cursorcolorVar = "#e6e6e6",
  cursorwidthVar = "7px",
  cursorborderVar = "0",
  cursorborderradiusVar = "7px",
  zindexVar = [100],
  bouncescrollVar = false,
  $scrollbox = $('.scroll-box__container');

  $scrollbox.niceScroll({
    cursorcolor: cursorcolorVar,
    cursorwidth: cursorwidthVar,
    cursorborder: cursorborderVar,
    cursorborderradius: cursorborderradiusVar,
    zindex: zindexVar,
    bouncescroll: bouncescrollVar,
    autohidemode: false
  });
};

function form() {
  $(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "../mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.modal-request').fadeIn(300);
			setTimeout(function() {
				$('.modal-request').fadeOut(300);
				th.trigger("reset");
			}, 1500);
		});
		return false;
	});
}