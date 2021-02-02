var a=window.innerWidth;
$(window).load(function() {
    $(".loader").fadeOut("slow");
});
function carga()
{
    if(a < 768)
    {
        //document.getElementById("principal").style.backgroundImage="url(images/miniFondo.jpg)";
        document.getElementById('barra').style.display='none';
    }
    else
    {
        //document.getElementById("principal").style.backgroundImage="url(images/avion1.jpg)";
        document.getElementById('barraMini').style.display='none';
        document.getElementById('miniMenu').style.display='none';
        document.getElementById('miniContact').style.display='none';
    }
    ingles();
}
function ingles()
{
    if(a < 768)
    {
        document.getElementById('miniMenu').innerHTML="Menu";
        document.getElementById('miniContact').innerHTML="Contact US";
        document.getElementById("inicio1").innerHTML="Home";
        document.getElementById("qSomos1").innerHTML="Who are we?";
        document.getElementById("galeria1").innerHTML="Gallery";
        document.getElementById("idioma1").innerHTML="Language";
        document.getElementById("ingles1").innerHTML="English";
        document.getElementById("espanol1").innerHTML="Spanish";
        document.getElementById("galeria1").title="Front.";
    }
    else
    {
        document.getElementById("menu").innerHTML="Menu";
        document.getElementById("contacto").innerHTML="Contact US";
        document.getElementById("inicio").innerHTML="Home";
        document.getElementById("qSomos").innerHTML="Who are we?";
        document.getElementById("galeria").innerHTML="Gallery";
        document.getElementById("idioma").innerHTML="Language";
        document.getElementById("ingles").innerHTML="English";
        document.getElementById("espanol").innerHTML="Spanish";
        document.getElementById("galeria").title="Front";
    }
    document.getElementById("interior").title="Inboard";
    document.getElementById("perfil").title="Outboard";
    document.getElementById("interiorb").title="Inboard";
    
    document.getElementById("interior1").title="Inboard";
    document.getElementById("perfil1").title="Outboard";
    document.getElementById("interiorb1").title="Inboard";
    //document.getElementById("miami").title="Miami.";
    //FORMULARIO DE CONTACTO
    document.getElementById("tituloForm").innerHTML="Contact US";
    document.getElementById("name").placeholder="Your name";
    document.getElementById("email").placeholder="E-mail";
    document.getElementById("phone").placeholder="Telephone";
    document.getElementById("subject").placeholder="Subject";
    document.getElementById("message").placeholder="Message";
    document.getElementById("sendFormulario").value="Send";
    document.getElementById("closeFormulario").innerHTML="Close";
}
function espanol()
{
    if(a < 768)
    {
        document.getElementById('miniMenu').innerHTML="Menú";
        document.getElementById('miniContact').innerHTML="Contáctenos";
        document.getElementById("inicio1").innerHTML="Inicio";
        document.getElementById("qSomos1").innerHTML="Quiénes somos?";
        document.getElementById("galeria1").innerHTML="Galería";
        document.getElementById("idioma1").innerHTML="Idioma";
        document.getElementById("ingles1").innerHTML="Inglés";
        document.getElementById("espanol1").innerHTML="Español";
        document.getElementById("galeria1").title="Frente.";
    }
    else
    {
        document.getElementById("menu").innerHTML="Menú";
        document.getElementById("contacto").innerHTML="Contáctenos";
        document.getElementById("inicio").innerHTML="Inicio";
        document.getElementById("qSomos").innerHTML="Quiénes somos?";
        document.getElementById("galeria").innerHTML="Galería";
        document.getElementById("idioma").innerHTML="Idioma";
        document.getElementById("ingles").innerHTML="Inglés";
        document.getElementById("espanol").innerHTML="Español";
        document.getElementById("galeria").title="Frente.";
    }
    document.getElementById("interior").title="Interior";
    document.getElementById("perfil").title="Perfil";
    document.getElementById("interiorb").title="Interior";
    
    document.getElementById("interior1").title="Interior";
    document.getElementById("perfil1").title="Perfil";
    document.getElementById("interiorb1").title="Interior";
    //document.getElementById("miami").title="Miami.";
    //FORMULARIO DE CONTACTO
    document.getElementById("tituloForm").innerHTML="Contáctenos";
    document.getElementById("name").placeholder="Su nombre";
    document.getElementById("email").placeholder="E-mail";
    document.getElementById("phone").placeholder="Teléfono";
    document.getElementById("subject").placeholder="Asunto";
    document.getElementById("message").placeholder="Mensaje";
    document.getElementById("sendFormulario").value="Enviar";
    document.getElementById("closeFormulario").innerHTML="Cerrar";
}
//======================================================================
// LOADING
//======================================================================
var Loading = (loadingDelayHidden = 0) => {

    //-----------------------------------------------------
    // Variables
    //-----------------------------------------------------
    // HTML
    let loading = null;
    // Retardo para borrar
    const myLoadingDelayHidden = loadingDelayHidden;
    // Imágenes
    let imgs = [];
    let lenImgs = 0;
    let counterImgsLoading = 0;

    //-----------------------------------------------------
    // Funciones
    //-----------------------------------------------------

    /**
     * Método que aumenta el contador de las imágenes cargadas
     */
    function incrementCounterImgs() {
        counterImgsLoading += 1;
        // Comprueba si todas las imágenes están cargadas
        if (counterImgsLoading === lenImgs) hideLoading();
    }

    /**
     * Ocultar HTML
     */
    function hideLoading() {
        // Comprueba que exista el HTML
        if(loading !== null) {
            // Oculta el HTML de "cargando..." quitando la clase .show
            loading.classList.remove('show');

            // Borra el HTML
            setTimeout(function () {
                loading.remove();
            }, myLoadingDelayHidden);
        }

    }

    /**
     * Método que inicia la lógica
     */
    function init() {
        /* Comprobar que el HTML esté cargadas */
        document.addEventListener('DOMContentLoaded', function () {
            loading = document.querySelector('.loading');
            imgs = Array.from(document.images);
            lenImgs = imgs.length;

            /* Comprobar que todas las imágenes estén cargadas */
            if(imgs.length === 0) {
                // No hay ninguna
                hideLoading();
            } else {
                // Una o más
                imgs.forEach(function (img) {
                    // A cada una le añade un evento que cuando se carge la imagen llame a la funcion incrementCounterImgs
                    img.addEventListener('load', incrementCounterImgs, false);
                });
            }
        });
    }

    return {
        'init': init
    }
}

// Para usarlo se declara e inicia. El número es el tiempo transcurrido para borra el HTML una vez cargado todos los elementos, en este caso 1 segundo: 1000 milisegundos,
Loading(1000).init();
/*$(document).ready(function(){
    $(window).bind("orientationchange", function(event){
      if(window.orientation==0) {
        document.getElementById("principal").style.backgroundImage="url(images/miniFondo.jpg)";
      }
      else {
        document.getElementById("principal").style.backgroundImage="url(images/avion1.jpg)";
      }
    });
  });*/
/*
(function($){
	$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
	  if (!$(this).next().hasClass('show')) {
		$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
	  }
	  var $subMenu = $(this).next(".dropdown-menu");
	  $subMenu.toggleClass('show');

	  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
		$('.dropdown-submenu .show').removeClass("show");
	  });

	  return false;
	});
})(jQuery)
*/
