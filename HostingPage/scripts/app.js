let icon = document.querySelector(".menu-icon");
let menu = document.querySelector(".main-menu");

icon.addEventListener("click",function () {
    if (icon.classList.contains("icofont-navigation-menu")){
        menu.style.left = 0;
        icon.classList = "icofont-close menu-icon";
    } 
    else {
        menu.style.left = "-250px";
        icon.classList = "icofont-navigation-menu menu-icon";
    }
})

// --------------------------------------------

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 80,
    autoplay: true,
    responsiveClass: true,
    navText: ["<span class='icofont-rounded-left'></span>","<span class='icofont-rounded-right'></span>"],
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots : false
        },
        768: {
            items: 2,
            nav: true
        },
    }
})