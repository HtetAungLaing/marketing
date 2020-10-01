
$(window).scroll(function () {
    let currentPosition = $(this).scrollTop();
    // console.log(currentPosition);
    let screenHeight = $(window).height();
    if (currentPosition >= screenHeight) {
        $('.navi').addClass('resnav');
    } else {
        $('.navi').removeClass('resnav');
    }
});
wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animate__animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    }
)
wow.init();
$('.pricing-slide').slick({
    dots: true,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
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
});

$('.slick-dots').addClass('wow animate__slideInRight ani2');

