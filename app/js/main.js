$(function(){
    $('.first__slider-inner').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slick-arrow"><img src="../images/arrow-prew.png" alt=""> </button>',
        nextArrow: '<button class="slick-prev slick-arrow"><img src="../images/arrow-next.png" alt=""> </button>'
    });
});

var mixer = mixitup('.portfolio__inner');