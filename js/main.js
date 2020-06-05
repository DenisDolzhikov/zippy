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