$(document).ready(function(){
  // clicking hamburger button opens mobile menu
  $(".mobile-padding").click(function(){
    $(".mobile-menu").toggleClass("show");
    $(".mobile-padding").toggleClass("show");
  }),

  // clicking mobile menu children closes menu
  $(".mobile-menu").children().click(function(){
    $(".mobile-menu").removeClass("show");
    $(".mobile-padding").removeClass("show");
  });
});