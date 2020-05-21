const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navMenu');
    const navMenu = document.querySelectorAll('.navMenu li');

    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //animate links
        navMenu.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.4}s`;
            }
        });
        //animate close menu
        burger.classList.toggle('toggle');
    });

}
navSlide();







// clients-carousel
if ($('.clients-carousel').length) {
    $('.clients-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        smartSpeed: 3000,
        autoplay: true,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            600:{
                items:3
            },
            800:{
                items:4
            },			
            1200:{
                items:4
            }

        }
    });    		
}