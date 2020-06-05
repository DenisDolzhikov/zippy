'use strict';

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
}