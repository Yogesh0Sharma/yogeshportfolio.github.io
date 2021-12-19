



let ham = document.querySelector(".ham1");
let bar1 = document.querySelector(".firstbar");
let bar2 = document.querySelector(".secondbar");
let bar3 = document.querySelector(".thirdbar");
let nav = document.querySelector(".menu");

ham.addEventListener("click", function(){
    bar1.classList.toggle("firstbar1");
    bar2.classList.toggle("secondbar1");
    bar3.classList.toggle("thirdbar1");
    nav.classList.toggle("show_nav"); 
    
});


let modal = document.querySelector(".overlay");
let previews = document.querySelectorAll(".product img");
let modalimg = document.querySelector(".overlaycontainer");
let cross = document.querySelector(".cross");

cross.addEventListener("click", ()=>{
    modal.classList.remove("overlayshow");
    modalimg.classList.remove("overlayshow");
})

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
        modalimg.classList.remove("overlayshow");

    } 
})

let topScroll = document.querySelector(".topscroll");
let topIcon = document.querySelector(".topicon");


function scrollWin(){
        window.scrollTo({top:0, behavior:"smooth"});
        
    }
    
    topScroll.addEventListener("click", scrollWin);



let darkModeImage = document.querySelector(".darkmodeimage");

darkModeImage.addEventListener("click", function(){
    document.body.classList.toggle("darkmode");

    if(document.body.classList.contains("darkmode")){
        darkModeImage.src = "./images/sun.png";
    }
    else{
        darkModeImage.src = "./images/moon.png";
    }
})