$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky')
        } else {
            $('.navbar').removeClass('sticky')
        }
        if(this.scrollY > 20){
            $('.logo2').addClass('sticky2')
        } else {
            $('.logo2').removeClass('sticky2')
        }
        if(this.scrollY > 20){
            $('.menu li a').css('color', '#212121')
        } else {
            $('.menu li a').css('color', '#fff')
        }
        if(this.scrollY > 20){
            $('.menu-btn').css('color', '#212121')
        } else {
            $('.menu-btn').css('color', '#fff')
        }
        if(this.scrollY > 300){
            $('.scroll-up-btn').addClass('show')
        } else {
            $('.scroll-up-btn').removeClass('show')
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });

    $('.menu-btn').click(function(){
        $('.max-width-logo').toggleClass('active1');
    })
    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active");
    });
})
