$(document).ready(function(){

    $(window).scroll(function(){
    
        if(this.scrollY > 10){
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
        $('html').animate({scrollTop: 0});
        $('.nav__blog').removeClass('active');
        $('.menu-btn i').removeClass('active');
    });

    type = new Typed(".typing", {
        strings: ['гамбургер', 'Чизбургер', 'Хот-дог'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.menu-btn').click(function(){
        $('.nav__list').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.nav__link').click(function(){
        $('.nav__list').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    

});