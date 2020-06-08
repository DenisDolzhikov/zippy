'use strict';

/* Silders */

let headerSlider = new Swiper('.header-slider', {
    loop: true,
    
    pagination: {
        el: '.header-slider .swiper-pagination',
        clickable: true,
    },
    // Enable debugger
    debugger: true,
});

let aboutSlider = new Swiper('.about-slider', {
    loop: true,
    
    pagination: {
        el: '.about .swiper-pagination',
        clickable: true,
    },
    // Enable debugger
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
        });

        menuClose.addEventListener('click', () => {
            offCanvasWrapper.classList.remove('is-opened');
            pageWrapper.classList.remove('is-moved');
        });
    }

    toggleMenu();

    //Swipe for off canvas
    if (window.matchMedia("(min-width: 300px) and (max-width: 1000px)").matches) {

        jQuery('.page-wrapper').swipe({
            swipeStatus: function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {

                if (phase == 'end') {
                    //Swipe in threshold px
                    if (direction == 'right') {
                        offCanvasWrapper.classList.add('is-opened');
                        pageWrapper.classList.add('is-moved');
                    }

                    if (direction == 'left') {
                        offCanvasWrapper.classList.remove('is-opened');
                        pageWrapper.classList.remove('is-moved');
                    }
                }
            },
            triggerOnTouchEnd: false,
            threshold: 120 // swipe in 30px
        });
    }
}