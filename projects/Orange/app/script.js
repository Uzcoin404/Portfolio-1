$(document).ready(function(){
    $(window).scroll(function(){

        if(this.scrollY > 15){
            $('.nav').addClass("sticky");
        }else{
            $('.nav').removeClass("sticky");
        };

        if(this.scrollY > 200){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        };

    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });

     $('.menu-btn').click(function(){
        $('.nav__list').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        $('.menu-btn').toggleClass("show");
    });

    $('.nav__list').click(function(){
        $('.nav__list').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    var type = new Typed('.typing', {
        strings: ["Интересное"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var type = new Typed('.typing2', {
        strings: ["+998 90 900 00 00"],
        typeSpeed: 100,
        backSpeed: 60, 
        loop: true
    });

});
