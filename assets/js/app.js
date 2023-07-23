$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav:true,
    dots: false,
    navText:['<i class="fa-solid fa-angles-left fa-2x"></i>' ,'<i class="fa-solid fa-angles-right fa-2x"></i>'],
    responsive:{
        0:{
            items:1
        },
        500:{
            items:2
        },
        1000:{
            items:3,
            sildeBy:3,
            smartSpeed:100
        }
    }
})