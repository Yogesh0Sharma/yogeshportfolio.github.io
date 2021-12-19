$(document).ready(function(){
    let ham = document.querySelector(".hamburger_inner");
    let bar1 = document.querySelector(".bar1");
    let bar2 = document.querySelector(".bar2");
    let bar3 = document.querySelector(".bar3");
    let nav = document.querySelector(".nav_ul");

ham.addEventListener("click", function(){
    bar1.classList.toggle("newbar1");
    bar2.classList.toggle("newbar2");
    bar3.classList.toggle("newbar3");
    nav.classList.toggle("show_nav"); 
    
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
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
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  let head = $("#topheader");

  $(window).on("scroll", shadowNav);

  function shadowNav(){
    if($(window).scrollTop() >= 60){
        head.addClass("navshadow");
    }
    else{
        head.removeClass("navshadow");
    }
  }


})