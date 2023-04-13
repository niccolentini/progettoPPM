function navbar_opacity () {
var navbar = document.querySelector("nav.navbar");
if (this.scrollY > 0) {
   /* navbar.style.backgroundColor = "#8b351d" */
    navbar.classList.add("colored-background");
}
else {
    /* navbar.style.backgroundColor = "transparent"; */
    navbar.classList.remove("colored-background");
}
}

window.addEventListener("scroll", navbar_opacity, false)


function initSwiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

window.addEventListener('load', initSwiper);


const searchButton = document.getElementById("search-button");
const searchOverlay = document.getElementById("search-overlay");
const searchClose = document.getElementById("search-close");

searchButton.addEventListener("click", function() {
    searchOverlay.style.display = "block";
});

searchClose.addEventListener("click", function() {
    searchOverlay.style.display = "none";
});

searchOverlay.addEventListener("click", function(event) {
    if (event.target === searchOverlay) {
        searchOverlay.style.display = "none";
    }
});


