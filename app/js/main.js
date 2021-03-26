$(function() {

    /* Mixitup */
    var mixer = document.querySelector('.prodcut__box');
    var mix = mixitup(mixer);


    /* Slider */
    $('.slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });
})


