$(function(){
    var mixer = mixitup('.gallery__content');
})

$('.blog-slider__inner').slick({
    dots: true,
    slidesToShow: 1,
    arrows: false
  });

  $(document).ready(function(){
	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$('.menu-burger').on('click', function(){
$('.menu__list').toggleClass('menu__list--active')
	});
});

