document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.logoSwiper', {
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true, // Centra los slides en el carrusel
        autoplay: {
            delay: 1000,
        },
        breakpoints: {
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
            320: { slidesPerView: 1 }
        }
    });
});

const bar = document.querySelector('.bars');

const menu = document.querySelector('.menu');

bar.addEventListener('click', () => {
    menu.classList.toggle('show_menu');
});