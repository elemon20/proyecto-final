


alert( "Bienvenido a Quilicura | Vegariano" );
console.log("hola")



$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $("#toTop").addClass("show");
    } else {
      $("#toTop").removeClass("show");
    }
  });
});