'use strict';

/* Silders */
{
    let headerSlider = new Swiper('.header-slider', {
        loop: true,
        
        pagination: {
            el: '.header-slider .swiper-pagination',
            clickable: true,
        },

        autoplay: {
            delay: 5000,
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
            clickable: true,
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
            clickable: true,
        },
        debugger: true,
    });

    let videoSlider = new Swiper('.video-slider', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlides: true,
        a11y: true,

        pagination: {
            el: '.video-slider .swiper-pagination',
            clickable: true,
        },

        debugger: true,

        breakpoints: {
            480: {
                spaceBetween: 36,
            }
        }
    });

    let teamSlider = new Swiper('.team-slider', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,

        pagination: {
            el: '.team-slider .swiper-pagination',
            clickable: true,
        },

        debugger: true,

        breakpoints: {
            531: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            }
        },
    });

    let photoGalleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,

        breakpoints: {
            600: {
                slidesPerView: 5,
            },
            530: {
                slidesPerView: 4,
            }
        }
    });

    let galleryTop = new Swiper('.photo-slider .gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.photo-slider .swiper-button-next',
            prevEl: '.photo-slider .swiper-button-prev',
        },
        thumbs: {
            swiper: photoGalleryThumbs
        }
    });

    let blogSlider = new Swiper('.blog-slider', {
        slidesPerView: 1,
        spaceBetween: 0,

        pagination: {
            el: '.blog-slider .swiper-pagination',
            clickable: true,
        },

        debugger: true,

        breakpoints: {
            531: {
                slidesPerView: 2,
            }
        }
    });
}

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


        // PRELOADER
        document.body.classList.add('loaded');
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
            //pageWrapper.classList.add('is-moved');
            pageWrapper.classList.add('overlay');
        });

        menuClose.addEventListener('click', () => {
            offCanvasWrapper.classList.remove('is-opened');
            //pageWrapper.classList.remove('is-moved');
            pageWrapper.classList.remove('overlay');
        });
    }

    toggleMenu();

    //Swipe for off canvas

    function offCanvasSwiper() {
        if (window.matchMedia("(max-width: 1000px)").matches) {
            $('.page-wrapper').swipe({
                swipeStatus: function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {

                    if (phase == 'end') {
                        //Swipe in threshold px
                        if (direction == 'right') {
                            offCanvasWrapper.classList.add('is-opened');
                            //pageWrapper.classList.add('is-moved');
                            pageWrapper.classList.add('overlay');
                        }

                        if (direction == 'left') {
                            offCanvasWrapper.classList.remove('is-opened');
                            //pageWrapper.classList.remove('is-moved');
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
        if (window.matchMedia("(max-width: 1000px)").matches) {
            offCanvasSwiper();
        } else {
            $('.page-wrapper').swipe('destroy');
        }

        offCanvasSwiper();
    });

    //hide off canvas first a second for fix bug transition
    setTimeout(() => offCanvasWrapper.style.opacity = 1, 1000);

/*
    function offCanvasSwiper() {
        if (window.matchMedia("(min-width: 481px) and (max-width: 1000px)").matches) {

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

    //hide off canvas first a second for fix bug transition
    setTimeout(() => offCanvasWrapper.style.opacity = 1, 1000);
*/

}


// videos

{
    let videos = document.querySelectorAll('.videos .video');

    for (let video of videos) {

        video.addEventListener('click', () => {
            if (video.paused) {
                video.nextElementSibling.getElementsByClassName('play-icon')[0].style.display = 'none';
                video.controls = true;
            }
        });

        video.nextElementSibling.addEventListener('click', () => {
            if (video.paused) {
                video.nextElementSibling.getElementsByClassName('play-icon')[0].style.display = 'none';
                video.controls = true;
                video.play();
            }
        });
    }

}


// parallax umbrella svg in about section
{
    const umbrellaContainer = document.querySelector('.main-content .about');
    const umbrella = document.querySelector('.main-content .umbrella');
    const maxMove = umbrellaContainer.offsetWidth / 30;
    const umbrellaCenterX = umbrella.offsetLeft + (umbrella.offsetWidth / 2);
    const umbrellaCenterY = umbrella.offsetTop + (umbrella.offsetHeight / 2);

    function getMousePos(xRef, yRef) {
        let panelRect = umbrellaContainer.getBoundingClientRect();
        return {
            x: Math.floor(xRef - panelRect.left) / (panelRect.right - panelRect.left) * umbrellaContainer.offsetWidth,
            y: Math.floor(yRef - panelRect.top) / (panelRect.bottom - panelRect.top) * umbrellaContainer.offsetHeight
        }
    }

    document.body.addEventListener('mousemove', (e) => {
        let mousePos = getMousePos(e.clientX, e.clientY);
        let distX = mousePos.x - umbrellaCenterX;
        let distY = mousePos.y - umbrellaCenterY;

        umbrella.style.transform = "translate("+(-1*distX)/70+"px,"+(-1*distY)/70+"px)";
    
    });
}


// parallax in header-slider

{
    const parallaxHeaderList = document.querySelectorAll('.header .swiper-slide');
 
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        
        if (window.matchMedia("(min-width: 1000px)").matches) {
            for (let parallaxItem of parallaxHeaderList) {
                parallaxItem.style.backgroundPositionY = offset * 0.7 + 'px';
            }
        }
    });
    
}


//Parallax in newsletter section

{
    document.querySelectorAll('.img-parallax').forEach(img => {
        let imgParent = img.parentElement;

        function parallaxImg() {
            let speed = img.dataset.speed;
            let imgY = imgParent.getBoundingClientRect().top;
            let winY = img.scrollTop;
            let winH = img.offsetHeight;
            let parentH = imgParent.offsetHeight;

            let winBottom = winY + winH;
            
            let imgBottom;
            let imgTop;
            let imgPercent;

            if (winBottom > imgY && winY < imgY + parentH) {
                imgBottom = ((winBottom - imgY) * speed);
                imgTop = winH + parentH;
                imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
            }

            img.style.top = `${imgPercent}%`;
            img.style.transform = `translate(-50%, -${imgPercent}%)`;
        }

        document.addEventListener('scroll', parallaxImg);
        document.addEventListener('DOMContentLoaded', parallaxImg);
    });
}


//maps 

//Yandex map
{

    ymaps.ready(init);

    function init() {
        let yandexMap;

        function makeMap() {
            yandexMap = new ymaps.Map('yandex-map', {
                center: [53.297642, 60.101732],
                zoom: 14,
                controls: []
            });
        }

        makeMap();

        yandexMap.behaviors.disable('scrollZoom');

        let body = document.querySelector('body');
        body.onkeydown = callbackDown;
        body.onkeyup = callbackUp;
        
        function callbackDown(e){
            if(e.keyCode === 17){
                yandexMap.behaviors.enable('scrollZoom');
            }
        }
        function callbackUp(e){
            if(e.keyCode === 17){
                yandexMap.behaviors.disable('scrollZoom');
            }
        }
    }

}


/* Google maps

function initMap() {
    let parisRussia = { lat: 53.303136, lng: 60.114432 };

    let map = new google.maps.Map(document.getElementById('google-map'), {
        center: parisRussia,
        zoom: 9,
        mapTypeId: 'roadmap',
        disableDefaultUI: true
    });

    let marker = new google.maps.Marker({
        position: parisRussia, 
        map: map
    });
} */


// lazy load for images 

const observer = lozad(); 
observer.observe();


// Smooth scroll for anchor

{
    function smoothAnchors() {
        const anchors = document.querySelectorAll('a[href*="#"');

        for (let anchor of anchors) {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();

                const blockId = anchor.getAttribute('href').substr(1);

                document.getElementById(blockId).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                })
            })
        }

    }

    window.addEventListener('load', () => {
        smoothAnchors();
    });

    window.addEventListener('resize', () => {
        smoothAnchors();
    });

    window.addEventListener('orientationchange', () => {
        smoothAnchors();
    });

}

