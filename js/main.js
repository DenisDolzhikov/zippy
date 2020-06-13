'use strict';

/* Silders */

let headerSlider = new Swiper('.header-slider', {
    loop: true,
    
    pagination: {
        el: '.header-slider .swiper-pagination',
        clickable: true,
    },
   
    debugger: true,
});

let aboutSlider = new Swiper('.about-slider', {
    loop: true,
    
    pagination: {
        el: '.about-slider .swiper-pagination',
        clickable: true,
    },

    debugger: true,
});

let projectsSlider = new Swiper('.projects-slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,

    pagination: {
        el: '.projects-slider .swiper-pagination',
    },
    debugger: true,

    breakpoints: {
        600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        800: {
            slidesPerView: 3,
            spaceBetween: 0,
        }
    }
});

let pricingSlider = new Swiper('.price-slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,

    pagination: {
        el: '.price-slider .swiper-pagination',
    },
    debugger: true,
});

let videoSlider = new Swiper('.video-slider', {
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 36,
    centeredSlides: true,
    a11y: true,

    pagination: {
        el: '.video-slider .swiper-pagination',
    },
    debugger: true,
});


/* Sticky top navigation */

{
    let stickyNav = document.querySelector('.sticky-nav');

    if (window.scrollY > 90) {
        stickyNav.classList.add('offset');
    }
    
    function onScroll() {
        window.addEventListener('scroll', callbackFunc);

        function callbackFunc() {
            let y = window.pageYOffset;

            if (y > 90) {
                stickyNav.classList.add('scroll');
                stickyNav.style.transition = '0.5s';
            } else {
                stickyNav.classList.remove('scroll');
                stickyNav.classList.remove('offset');
            }
        }
    }

    window.onload = function() {
        onScroll();
    }
}


/* Off-canvas menu */
{
    const menuOpen = document.querySelector('.sticky-nav .menu-open');
    const menuClose = document.querySelector('.off-canvas .menu-close');
    const offCanvasWrapper = document.querySelector('.off-canvas-wrapper');
    const pageWrapper = document.querySelector('.page-wrapper');

    function toggleMenu() {
        menuOpen.addEventListener('click', () => {
            offCanvasWrapper.classList.add('is-opened');
            pageWrapper.classList.add('is-moved');
            pageWrapper.classList.add('overlay');
        });

        menuClose.addEventListener('click', () => {
            offCanvasWrapper.classList.remove('is-opened');
            pageWrapper.classList.remove('is-moved');
            pageWrapper.classList.remove('overlay');
        });
    }

    toggleMenu();

    //Swipe for off canvas
    function offCanvasSwiper() {
        if (window.matchMedia("(min-width: 480px) and (max-width: 1000px)").matches) {

            $('.page-wrapper').swipe({
                swipeStatus: function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {

                    if (phase == 'end') {
                        //Swipe in threshold px
                        if (direction == 'right') {
                            offCanvasWrapper.classList.add('is-opened');
                            pageWrapper.classList.add('is-moved');
                            pageWrapper.classList.add('overlay');
                        }

                        if (direction == 'left') {
                            offCanvasWrapper.classList.remove('is-opened');
                            pageWrapper.classList.remove('is-moved');
                            pageWrapper.classList.remove('overlay');
                        }
                    }
                },
                triggerOnTouchEnd: false,
                threshold: 120 // swipe in 30px
            });
        }
    }

    offCanvasSwiper();

    window.addEventListener('resize', function(event) {
        if (!window.matchMedia("(min-width: 480px) and (max-width: 1000px)").matches) {
            $('.page-wrapper').swipe('destroy');
        }

        offCanvasSwiper();
    });
    
}

// video

