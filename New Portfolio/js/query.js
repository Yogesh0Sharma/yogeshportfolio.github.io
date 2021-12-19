$(document).ready(function(){
    $(".list").click(function(){
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".itembox").show("1000");
        }
        else{
          $(".itembox").not("."+value).hide("1000");
          $(".itembox").filter("."+value).show("1000");
        }
    })

    $(".list").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })


   

    var typed = new Typed(".yogesh", {
strings: ["Student", "Web developer", "Photographer"],
typeSpeed: 70,
loop: true,
// startDelay: 1000,
showCursor: false,
});

let head = $("#head");
let pro = $("#pro");
let scrol = pro.offset().top;
let topScroll = $(".topscroll");

let qual = $("#qualifications");
let skills = $("#skills");
let portfolio = $("#portfolio");
let projects = $("#projects");
let copyright = $("#copyright");

let qualscrol = qual.offset().top;
let skillsscrol = skills.offset().top;
let portfolioscrol = portfolio.offset().top;
let projectsscrol = projects.offset().top;
let copyrightscrol = copyright.offset().top;

let homeli = $(".homeli");
let aboutli = $(".aboutli");
let qualli = $(".qualli");
let skillsli = $(".skillsli");
let portli = $(".portli");
let projectsli = $(".projectsli");

$(".list1").click(function(){
    $(this).addClass("active1").siblings().removeClass("active1");
})



function activeScroll(){

    if($(window).scrollTop() < scrol-120){
        aboutli.removeClass("active1");
        homeli.addClass("active1");
    }

    else if($(window).scrollTop() >= scrol - 100 && $(window).scrollTop() <= qualscrol - 80){
        aboutli.addClass("active1").siblings().removeClass("active1");
    }
    else if($(window).scrollTop() >= qualscrol - 80 && $(window).scrollTop() <= skillsscrol -80){
        qualli.addClass("active1").siblings().removeClass("active1");
    }
    else if($(window).scrollTop() >= skillsscrol -100 && $(window).scrollTop() <= portfolioscrol - 80){
        skillsli.addClass("active1").siblings().removeClass("active1");
    }
    else if($(window).scrollTop() >= portfolioscrol - 80 && $(window).scrollTop() <= projectsscrol - 80){
        portli.addClass("active1").siblings().removeClass("active1");
    }
    else if($(window).scrollTop() >= projectsscrol - 80 && $(window).scrollTop() <= copyrightscrol-80){
        projectsli.addClass("active1").siblings().removeClass("active1");
    }
}



$(window).on("scroll", activeScroll);


$(window).on("scroll", shadowNav);

function shadowNav(){
  if($(window).scrollTop() >= scrol - 60){
      head.addClass("navshadow");
      topScroll.addClass("topscrollshow");
  }
  else{
      head.removeClass("navshadow");
      topScroll.removeClass("topscrollshow");
  }
}
})