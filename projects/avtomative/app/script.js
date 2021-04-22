$(document).ready(function(){
    
    $(window).scroll(function(){

        if(this.scrollY > 10){
            $('.nav').addClass('sticky');
        }else{
            $('.nav').removeClass('sticky');
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        };
    });

    // Menu-btn 
    $('.menu-btn').click(function(){
        $('.nav__part').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    $('li a').click(function(){
        $('.nav__part').removeClass('active');
        $('.menu-btn i').removeClass('active');
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('.nav__part').removeClass('active');
        $('.menu-btn i').removeClass('active');
    });
   

    var type = new Typed(".typing", {
        strings: ["CAR NOW"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    
   
});