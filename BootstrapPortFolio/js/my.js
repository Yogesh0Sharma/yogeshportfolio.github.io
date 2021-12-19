$(document).ready(function () {

    $('#slides').superslides({
        animation: "fade",
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Student.", "Web developer.", "Software Engineer."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop: true,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: { 
                items: 2
            }, //from 0 to 480 px screen;
            768: {
                items: 3
            }, //from 480 to 768 px screen;
            968: {
                items: 4
            } //from 768 to 968 px screen;
        }
    });



    var skillsTopOffSet = $(".skills").offset().top;

    $(window).scroll(function () {

        if(window.pageYOffset > skillsTopOffSet - $(window).height() + 200) {

            $(".chart").easyPieChart({
                easing: "easeInOut",
                barColor: "#fff",
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size: 152,
                onStep: function (from, to, percent) {
                    $(this.el).find(".percent").text(Math.round(percent));
                }
            });
        }

    });


    // $("#navigation li a").click(function(e) {
	// 	e.preventDefault();

	// 	var targetElement = $(this).attr("href");
	// 	var targetPosition = $(targetElement).offset().top;
	// 	$("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

	// });

    


    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNav);


    function stickyNav(){
        var body = $("body");
        if($(window).scrollTop() >= navTop){
            body.addClass("fixedNav");
        }
        else{
            body.removeClass("fixedNav");
        }
    }

    


});