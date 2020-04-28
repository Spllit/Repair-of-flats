$('.slider').slick({
    centerMode: false,
    centerPadding: '30px',
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.left-arrow'),
    nextArrow: $('.right-arrow'),
    responsive: [{
            breakpoint: 1200,
            settings: {
                arrows: true,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 812,
            settings: {
                arrows: true,
                centerMode: false,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});