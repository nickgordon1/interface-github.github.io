$(document).ready(function(){
  $("img,h1,marquee").fadeIn(5000);
  $("header").click(function(){
    $("header").css("background-color", "red");
  });
  $("button").click(function(){
    $("img").fadeOut(5000);
  });
});

