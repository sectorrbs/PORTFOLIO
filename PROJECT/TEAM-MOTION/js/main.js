$(function () {

    $('.review__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        responsive: [{
                breakpoint: 1175,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 487,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
    $('.articles__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: false,
        responsive: [{
                breakpoint: 1175,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 487,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });


    $('.services__item1').on('click', function () {
        $('.services__item2-list').removeClass('list--active');
        $('.services__item3-list').removeClass('list--active');
        $('.services__item4-list').removeClass('list--active');
        $('.services__item5-list').removeClass('list--active');
        $('.services__item1-list').addClass('list--active');

    })
    $('.services__item2').on('click', function () {
        $('.services__item1-list').removeClass('list--active');
        $('.services__item3-list').removeClass('list--active');
        $('.services__item4-list').removeClass('list--active');
        $('.services__item5-list').removeClass('list--active');
        $('.services__item2-list').addClass('list--active');

    })
    $('.services__item3').on('click', function () {
        $('.services__item1-list').removeClass('list--active');
        $('.services__item2-list').removeClass('list--active');
        $('.services__item4-list').removeClass('list--active');
        $('.services__item5-list').removeClass('list--active');
        $('.services__item3-list').addClass('list--active');

    })
    $('.services__item4').on('click', function () {
        $('.services__item1-list').removeClass('list--active');
        $('.services__item2-list').removeClass('list--active');
        $('.services__item3-list').removeClass('list--active');
        $('.services__item5-list').removeClass('list--active');
        $('.services__item4-list').addClass('list--active');

    })
    $('.services__item5').on('click', function () {
        $('.services__item1-list').removeClass('list--active');
        $('.services__item2-list').removeClass('list--active');
        $('.services__item3-list').removeClass('list--active');
        $('.services__item4-list').removeClass('list--active');
        $('.services__item5-list').addClass('list--active');

    })

    $('.menu__btn').on('click', function () {
        $('.menu').toggleClass('menu__active')
    })

    $('.menu__btn').on('click', function () {
        $('.menu__btn').toggleClass('menu__btn--active')
    })

});