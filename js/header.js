$(function () {
  $(".btn-gnavi").on("click", function () {
    var rightVal = 0;
    if ($(this).hasClass("open")) {
      rightVal = -300;
      $(this).removeClass("open");
    } else {
      $(this).addClass("open");
    }
    $("#global-navi").stop().animate({
      right: rightVal
    }, 200);
  });
});

$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".header").removeClass("active");
      }
  });
});
