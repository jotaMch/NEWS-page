$(document).ready(function() {
    $('.botao-menu button').click(function() {
        $('.menu').slideToggle();
    })

    $('.deslise').click(function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        var target = $(this).attr('href'); // Obtém o valor do atributo href

        $('html, body').animate({
            scrollTop: $(target).offset().top // Realiza a animação de deslize até a seção alvo
        }, 1000); // Define a velocidade da animação (1000ms = 1 segundo)

        $('.menu').slideUp(); // Fecha o menu após clicar em um item
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