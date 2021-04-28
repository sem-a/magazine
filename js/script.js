document.addEventListener("DOMContentLoaded", function () {
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click', function () {
        document.body.style.overflow = 'hidden';
        document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click', function () {
        document.body.style.overflow = 'visible';
        document.querySelector('#openModal').style.marginLeft = '0px';
    });
});



// слайдер 
$(function () {
    $('.one').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 3000,
        dots: true,
    });
});
$(function () {
    $('.two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false,
    });
});