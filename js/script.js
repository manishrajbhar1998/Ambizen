// header scroll
let nav = document.querySelector('.navbar');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide
let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener('click',function(){
        navCollapse.classList.remove("show");
    })
})



// Swiper slider banner
var swiper = new Swiper(".mySwiper",{
    direction: "vertical",
    loop: true,
    pagination:{
        el: ".swiper-pagination",
        Clickable: true,
    },
    autoplay:{
        delay:3500,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// Swiper slider our partner
var swiper = new Swiper(".our-partner",{
    slidesPerView: 4,
    spaceBetween: 10,
    // loop: true,
    // pagination:{
    //     el: ".swiper-pagination",
    //     Clickable: true,
    // },
    autoplay:{
        delay:3000,
    },

    breakpoints:{
        '991':{
            slidesPerView:4,
            spaceBetween:10,
        },
        '767':{
            slidesPerView:3,
            spaceBetween:10,
        },
        '320':{
            slidesPerView:2,
            spaceBetween:8,
        },
    },
});

// // counter section
// document.addEventListener("DOMContentLoaded",()=>{
//     function counter(id,start,end,duration){
//         let obj = document.getElementById(id),
//         current = start,
//         range = end - start,
//         increment = end > start ? 1 : -1,
//         step = Math.abs(Math.floor(duration / range)),
//         timer = setInterval(()=>{
//             current += increment;
//             obj.textContent = current;
//             if(current == end){
//                 clearInterval(timer);
//             }
//         },step)
//     }
//     counter("count1",0,20,1000);
//     counter("count2",0,20,1000);
//     counter("count3",0,20,1000);
//     counter("count4",0,20,1000);
// })

