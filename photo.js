
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

const images = document.querySelectorAll('.gallery-image');
const modal = document.getElementById('fullscreen-modal');
const fullImage = document.getElementById('full-image');
const closeBtn = document.querySelector('.close');

images.forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        fullImage.src = image.src; 
        fullImage.alt = image.alt; 
    });
});

closeBtn.addEventListener('click', () => {
     modal.style.display = 'none'; 
});