$(window).on('load', function () {
    $('.loadc').fadeOut(500);
})
let prevpos = $(window).scrollTop();
$(window).scroll(function () {
    let currentPosition = $(this).scrollTop();
    if (prevpos > currentPosition) {
        $('.navi').css('top', '0')
    } else {
        $('.navi').css('top', '-250px')
    }
    prevpos = currentPosition;
    let screenHeight = $(window).height();
    if (currentPosition >= screenHeight - 200) {
        // $('.navi').addClass('resnav');
        // console.log('helo');
    } else {
        $('.navbar-nav a').removeClass('indicator');
        $('.navbar-nav a[href="#home"]').addClass('indicator');
        $('.navi').removeClass('resnav');
    }
});
$('.navbar-toggler').click(function () {
    $('.navbar-toggler i').toggleClass('feather-menu').toggleClass('feather-x');
})
$('#about').waypoint(function (direction) {
    $('.navbar-nav a').removeClass('indicator');
    $('.navbar-nav a[href="#about"]').addClass('indicator');
}, {
    offset: '0%'
})
$('#services').waypoint(function (direction) {
    $('.navbar-nav a').removeClass('indicator');
    $('.navbar-nav a[href="#services"]').addClass('indicator');
}, {
    offset: '0%'
})
$('#pricing').waypoint(function (direction) {
    $('.navbar-nav a').removeClass('indicator');
    $('.navbar-nav a[href="#pricing"]').addClass('indicator');
}, {
    offset: '0%'
})
$('#contact').waypoint(function (direction) {
    $('.navbar-nav a').removeClass('indicator');
    $('.navbar-nav a[href="#contact"]').addClass('indicator');
}, {
    offset: '0%'
})
$('#home').waypoint(function (direction) {
    $('.navbar-nav a').removeClass('indicator');
    $('.navbar-nav a[href="#home"]').addClass('indicator');
}, {
    offset: '-10%'
})
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

