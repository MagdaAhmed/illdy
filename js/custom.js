/*global $*/
$(document).ready(function () {
    "use strict";
    $('.bxslider').bxSlider({
        pager: false,
        auto: true,
        pause: 6000
    });
    $("html").niceScroll();
    $(".list").click(function () {
        $("header ul li ul li").fadeToggle(1000).css({listStyle: "none"});
        $("header ul li ul").css({display: "block"});
        $("header p+button").css({marginBottom: "-40px", marginTop: "10px"})
    });
/*start scroll*/
    $('.bxslider li ul li a').click(function () {
       $(this).addClass('active').siblings().removeClass('active');
    });
       $('.bxslider li ul li a').click(function()                         
   {
    $('html, body').animate({
     scrollTop: $('#' +$(this).data('value')).offset().top
    },3000); 
   });
    $('.bxslider li .list ul li a').click(function () {
       $(this).addClass('active').siblings().removeClass('active');
    });
       $('.bxslider li .list ul li a').click(function()                         
   {
    $('html, body').animate({
     scrollTop: $('#' +$(this).data('value')).offset().top
    },3000); 
   }); 
    $('.projects').countTo({from:1,to:260,speed:10000});
    $('.clients').countTo({from:1,to:120,speed:10000});
    $('.coffes').countTo({from:1,to:260,speed:10000});
});
