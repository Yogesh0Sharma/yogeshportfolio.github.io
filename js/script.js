let ham = document.querySelector(".haminner");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");
let nav = document.querySelector(".navmenu");

ham.addEventListener("click", function(){
    bar1.classList.toggle("newbar1");
    bar2.classList.toggle("newbar2");
    bar3.classList.toggle("newbar3");
    nav.classList.toggle("show_nav"); 
    
});

var typed = new Typed(".typeanime", {
    strings: ["Student", "Web developer", "Photographer"],
    typeSpeed: 70,
    loop: true,
    // startDelay: 1000,
    showCursor: false,
    });




let modal = document.querySelector(".overlay");
let previews = document.querySelectorAll(".product img");
let modalimg = document.querySelector(".overlaycontainer");
// let cross = document.querySelector(".cross");

// cross.addEventListener("click", ()=>{
//     modal.classList.remove("overlayshow");
//     modalimg.classList.remove("overlayshow");
// })

previews.forEach(preview =>{
    preview.addEventListener("click", ()=>{
        modal.classList.add("overlayshow");
        modalimg.classList.add("overlayshow");

        let originalsrc = preview.getAttribute("data-original");
        modalimg.src = `./images/${originalsrc}`;
    })
})

modal.addEventListener("click", (e)=>{
    if (e.target.classList.contains("overlay")){
        modal.classList.remove("overlayshow");
        // modal.style.cursor="pointer";
        modalimg.classList.remove("overlayshow");

    } 
})




const swiper = new Swiper('.swiper', {
    // Optional parameters
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94
    },
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3000,
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

let currDate = new Date();
let currDate1 = currDate.getFullYear();

let date = document.querySelector(".date");

date.textContent = currDate1;