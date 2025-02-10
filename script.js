const menu_open = document.querySelector("#open_menu");
const menu_close = document.querySelector("#close_sidebar_menu");
const sidebar_menu = document.querySelector(".sidebar_menu");

menu_open.addEventListener("click", function(){
    sidebar_menu.classList.add("show");
});

menu_close.addEventListener("click", function(){
    sidebar_menu.classList.remove("show");
});

// Hero Splide
var heroSplide = new Splide('.hero_Splide', {
    type: 'loop',
    loop: true,
    autoplay: true,
    interval: 5000,
    pauseOnHover: false
});
heroSplide.mount();

// Travels Style Splide
var travelSplide = new Splide('.Travels_Splide', {
    type: 'loop',
    loop: true,
    autoplay: true,
    drag: 'free',
    perPage: 4.5,
    perMove: 1,
    gap: '1.4rem',
    snap: true,
    breakpoints: {
        1400: {
            perPage: 4,
            gap: '0.5em'
        },
        1200: {
            perPage: 3.5,
            gap: '0.5em'
        },
        1000: {
            perPage: 3
        },
        900: {
            perPage: 2.5,
            gap: '1.5em'
        },
        768: {
            perPage: 2
        },
        600: {
            perPage: 1,
            gap: '1em'
        }
    }
});
travelSplide.mount();

// Feature Style Splide
var travelSplide = new Splide('.Feature_Splide', {
    type: 'loop',
    loop: true,
    autoplay: true,
    drag: 'free',
    perPage: 3,
    perMove: 1,
    gap: '1.2em',
    pagination:false,
    snap: true,
    breakpoints: {
        1600: {
            perPage: 4,
            gap: '0.5em'
        },
        1200: {
            perPage: 2,
            gap: '0.5em'
        },
        1000: {
            perPage: 1.5
        },
        900: {
            perPage: 1,
            gap: '1.5em'
        },
    }
});
travelSplide.mount();