$(document).ready(function(){

    $(window).scroll(function(){

        if(this.scrollY > 300){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    var type = new Typed (".typing2", {
        strings: ["пиццу"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});