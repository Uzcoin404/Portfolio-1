$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY > 20){
            $('.nav').addClass("sticky");
        }else{  
            $('.nav').removeClass("sticky");
        };

        if(this.scrollY > 250){
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
    });

    $('.nav__link').click(function(){
        $('.nav__list').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

});