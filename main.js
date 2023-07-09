$(document).ready(function() {
    $('.botao-menu button').click(function() {
        $('.menu').slideToggle();
    })

    $('.deslise').click(function(e) {
        e.preventDefault(); 

        var target = $(this).attr('href'); // Obtém o valor do atributo href

        $('html, body').animate({
            scrollTop: $(target).offset().top // Realiza a animação de deslize até a seção alvo
        }, 1000);

        //$('.menu ul').slideUp(); 
    });

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
          $('.magic').addClass('fixed-header');
        } else {
          $('.magic').removeClass('fixed-header');
        }
      });
})