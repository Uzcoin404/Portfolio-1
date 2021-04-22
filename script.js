$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar
        if(this.scrollY > 20){
            $('nav').addClass("sticky");
        }else{
            $('nav').removeClass("sticky");
        };
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        };
    });

    // Scroll up button function
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('.nav__blog').removeClass('active');
        $('.menu-btn i').removeClass('active');
    });

        // menu Button
     $('.menu-btn').click(function(){
        $('nav .nav__blog').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('li a').click(function(){
        $('.nav__blog').removeClass('active');
        $('.menu-btn i').removeClass('active');
    });


    // Typed animating
    var type = new Typed(".typing", {
        strings: ["Web Developer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true 
    });

    var type = new Typed(".typing__two", {
        strings: ["Web Developer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true 
    });

    var type = new Typed(".typing-3", {
        strings: ["Experiences.", "Skills"],
        typeSpeed: 110,
        backSpeed: 70,
        loop: true 
    });

    var type = new Typed(".typing__four", {
        strings: ["Get in Touch", "Leave a Comment"],
        typeSpeed: 110,
        backSpeed: 70,
        loop: true
    });

    // Carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHover: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }

    });

});