
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

$(".burger").on('click', function () {
	$(this).toggleClass()
})

$("#logo").rotate({ 
   bind: 
     { 
        mouseover : function() { 
            $(this).rotate({animateTo:180})
        },
        mouseout : function() { 
            $(this).rotate({animateTo:0})
        }
     } 
   
});
/*$(function() {
	$("#slide img:eq(0)").addClass('activo').show();
	var texto = $('.activo').attr('alt');
	$('#slide').prepend("<p>" + texto + "</p>");
	setInterval(slide,3000);

	function slide() {
		if($('.activo').next().size()) {
			$('.activo').fadeOut().removeClass('activo').next().fadeIn().addClass('activo');

		}else {
			$('.activo').fadeOut().removeClass('activo');
			$('#slide img:eq(0)').fadeIn().addClass('activo');
		}
		}
	
});*/