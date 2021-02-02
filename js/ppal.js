// Material Select Initialization
$(document).ready(function() {
	
	jQuery(function(){
		jQuery('.datepicker').datetimepicker({
			datetime:true,
			format:'m/d/Y H:i',
			minDate:new Date(),
		});
		jQuery('#dateDeparture').datetimepicker({
		datetime:true,
		format:'Y/m/d H:i',
		minDate:new Date(),
		onShow:function( ct ){
			this.setOptions({
				maxDate:jQuery('#dateArrive').val()?jQuery('#dateArrive').val():false
			})
		},
		//timepicker:false
	});
	jQuery('#dateArrive').datetimepicker({
		datetime:true,
		format:'Y/m/d H:i',
		onShow:function( ct ){
			this.setOptions({
				minDate:jQuery('#dateDeparture').val()?jQuery('#dateDeparture').val():new Date()
			})
		},
		//timepicker:false
	});
});
	
	/*$('#dateDeparture').datepicker().on('changeDate',function(){
        $('#dateArrive').datepicker('setStartDate',$('#dateDeparture').datepicker('getDate'));});
	    $('#dateArrive').datepicker().on('changeDate',function(){$('#dateDeparture').datepicker('setEndDate',$('#dateArrive').datepicker('getDate'));
    });*/
	
	ingles();
	fechas();
//$('#primeroPC').css('background-image','url("images/emi7.jpg")');
//$('#primeroCel').css('background-image','url("images/fondoCel.jpeg")');
$('.logo').attr('src','images/logo.png');
$('.luces').attr('src','images/barra.png');
$('.lineaN').attr('src','images/barraN.png');
$('#i5a').attr('src','images/lightJets.jpg');
$('#i5b').attr('src','images/midJets.jpg');
$('#i5c').attr('src','images/heavyJets.jpg');
$('#vip').attr('src','images/vip.png');
$('#safety').attr('src','images/safety.png');
$('#onDemand').attr('src','images/onDemand.png');
$('#depart').attr('src','images/depart.png');
//Carousel
$('#carousel1').attr('src','images/carousel1.jpg');
$('#carousel2').attr('src','images/carousel2.jpg');
$('#carousel3').attr('src','images/carousel3.jpg');
//Pie
$('.argus').attr('src','images/ARGUS.png');
//Flota
$('#interiorCitation').attr('src','images/interiorCitation.jpg');
$('#interiorHonda').attr('src','images/interiorHonda.jpg');
$('#interiorLear').attr('src','images/interiorLear60.jpg');
$('#interiorHawker').attr('src','images/interiorHawker.jpg');
$('#interiorChallenger').attr('src','images/interiorChallenger.jpg');
$('#interiorG4').attr('src','images/interiorG4.jpg');
$('.flotaCitation').css('background-image','url("images/flotaCitation.jpg")');
$('.flotaHonda').css('background-image','url("images/flotaHonda.jpg")');
$('.flotaLear60').css('background-image','url("images/flotaLear60.jpg")');
$('.flotaHawker').css('background-image','url("images/flotaHawker.jpg")');
$('.flotaChallenger').css('background-image','url("images/flotaChallenger.jpg")');
$('.flotaG4').css('background-image','url("images/flotaG4.jpg")');
//TitulosFlota
$('.tFlotaCitation').html('CESSNA CITATION CJ1');
$('.tFlotaHonda').html('HONDA JET');
$('.tFlotaLear60').html('LEARJET 60');
$('.tFlotaHawker').html('HAWKER 800');
$('.tFlotaChallenger').html('CHALLENGER 601');
$('.tFlotaG4').html('GULFTREAM IV');
//MAPS
	google.maps.event.addDomListener(window,'load',function(){
		
		var autocomplete1 = document.getElementById('departure');
		var autocomplete2 = document.getElementById('arrival');
		var autocomplete3 = document.getElementById('fastDeparture');
		var autocomplete4 = document.getElementById('fastArrival');
		var autocomplete5 = document.getElementById('secDeparture');
		var autocomplete6 = document.getElementById('secArrival');
		var autocomplete7 = document.getElementById('secDepartureCel');
		var autocomplete8 = document.getElementById('secArrivalCel');
		var search1 = new google.maps.places.SearchBox(autocomplete1);
		var search2 = new google.maps.places.SearchBox(autocomplete2);
		var search3 = new google.maps.places.SearchBox(autocomplete3);
		var search4 = new google.maps.places.SearchBox(autocomplete4);
		var search5 = new google.maps.places.SearchBox(autocomplete5);
		var search6 = new google.maps.places.SearchBox(autocomplete6);
		var search7 = new google.maps.places.SearchBox(autocomplete7);
		var search8 = new google.maps.places.SearchBox(autocomplete8);
	});
});
$(window).on('load',function(){
	home();
	$(".loader").fadeOut("slow");
	//$('header').fadeIn("slow");
    alinear();
});
//SCROLLING
$(window).scroll(function(){
		var barra = $(document).scrollTop();
		alinear();
		var quintoPos = $('#quinto').offset().top;
		var quintoResul = barra/quintoPos;
		$('#quinto').css({'backdrop-filter':'blur(15px)'});
		efectoCuartoQuinto();
//SCROLL FLOTA
		alinearFlota();
});
function posicionDiv(objeto){
	var posicion = $(objeto).offset().top;
	return posicion;
}
function efectoCuartoQuinto(){
	var barra = $(document).scrollTop();
	var alto =$(window).height();
	var li = $('#i5a').offset().top;
	var mi = $('#i5b').offset().top;
	var he = $('#i5c').offset().top;
	var cuartoPos = $('#cuarto').offset().top;
	rLi = opacidad(li,1);
	rMi = opacidad(mi,1);
	rHe = opacidad(he,1);
	cuartoResul = opacidad(cuartoPos,0);
	$('#i5a').css({'opacity':rLi});
	$('#i5b').css({'opacity':rMi});
	$('#i5c').css({'opacity':rHe});
	$('#cuartoIn').css({'background-color':'rgba(0,0,0,'+cuartoResul+')'});
}
function opacidad(ubicacion,invertido){
	var barra = $(document).scrollTop();
	var alto =$(window).height();
	var b;
	if(invertido==1){
		b = 1-((ubicacion-barra)/alto);
	}
	else{
		b = (ubicacion-barra)/alto;
	}
	return b;
}
function zoo(objeto,aumento){
	var barra = $(window).scrollTop();
	var tmp = (barra*0.05)+aumento;
	//$(objeto).css({'background-size':tmp+'%'});
	$(objeto).css({'width':tmp+'%'});
}
function parall(objeto,alineacion,velocidad,correccion){
	var barra = $(window).scrollTop();
	var inicio=posicionDiv(objeto);
	var posicion = barra-inicio;
	var alto = $(objeto).height();
	//var ancho = $(objeto).width();
	var resul = ((posicion*velocidad)-(alto*correccion))*0.1;
	$(objeto).css({'background-position': '0px '+resul+'px'});
	$(objeto).css({'background-position-x':alineacion});
}
/*function paraPrimero(){
	var barra = $(window).scrollTop();
	var resul = barra*0.1;
	$('#videoPrimero').offset({top:'0px'+resul+'px',left:'0px'});
}*/
function alinear(){
		//zoo('#primeroPC',100);
		//zoo('#primeroCel',220);
		//zoo('#primeroPC',100);
		//zoo('#primeroCel',130);
		//zoo('#videoPrimero',100);
		//paraPrimero();
		//parall('#primeroCel','center',1,-10);
		//parall('#primeroPC','center',1,-7);
		//parall('#segundo','center',-1,1.8);
		parall('#tercero','center',0.5,0);
}
function alinearFlota(){
	//POSIIONAR FLOTA
	parall('#citationCuadrado','center',2,2);
	parall('#citationPanoramico','center',2,4);
	parall('#hondaPanoramico','left',2,1);
	parall('#hondaCuadrado','left',2,-0.5);
	parall('#lear60Cuadrado','center',2,-1);
	parall('#lear60Panoramico','center',2,1);
	parall('#hawkerCuadrado','right',2,-1);
	parall('#hawkerPanoramico','left',2,2);
	parall('#challengerCuadrado','center',1,1);
	parall('#challengerPanoramico','center',2,3);
	parall('#g4Cuadrado','left',2,-0.5);
	parall('#g4Panoramico','center',2,1);
}
function home(){
	$('#pie,#flota,#aboutUs,#formularioContacto').fadeOut(1000);
	//alinear();
	setTimeout('$("#cabecera").fadeIn(2000);',1000);
	//alinear();
	setTimeout("$('#logoCabecera').fadeIn(1000);",2000);
	//alinear();
	setTimeout("$('#primero,#segundo,#tercero,#cuarto,#quinto,#sexto,#pie').fadeIn(1000);",2500);
	//setTimeout("$('.t1,.covid').fadeIn(1000);",3000);
	setTimeout("$('.t1,.covid').animate({opacity:1},2000);",3000);
	setTimeout('alinear();',2500);
	setTimeout('alinearFlota();',2500);
}
function flota(){
	$('#pie,#primero,#segundo,#tercero,#cuarto,#quinto,#sexto,#aboutUs,#formularioContacto').fadeOut(1000);
	alinearFlota();
	setTimeout("$('#flota,#pie').fadeIn(2000);",1500);
	alinearFlota();
	setTimeout('alinearFlota();',1500);
}
function about(){
	$('#pie,#primero,#segundo,#tercero,#cuarto,#quinto,#sexto,#flota,#formularioContacto').fadeOut(1000);
	setTimeout("$('#aboutUs,#pie').fadeIn(2000);",2000);
}
function contacto(){
	$('#pie,#primero,#segundo,#tercero,#cuarto,#quinto,#sexto,#flota,#aboutUs').fadeOut(1000);
	setTimeout("$('#formularioContacto,#pie').fadeIn(2000);",2000);
}
function ingles(){
	//CABECERA
	$(".menu").html("Menu");
	$(".init").html("Home");
	$(".fleet").html("Fleet");
	$(".about").html("About us");
	$(".contacto").html("Contact");
	$(".idioma").html("Language");
	$(".ingles").html("English");
	$(".espanol").html("Spanish");
	$('#contacto2,#contacto2Cel').html('Book now');
	$('.covid').html('Covid-19 UPD');
	//CUERPO
	//PRIMERO Y SEGUNDO
	$(".t1").html("PRIVATE<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FLIGHTS&reg;");
	$('.fast').html('Book now');
	//$("#segundo").html("<h5>Safety, Punctuality and Efficiency</h5>");
	//TERCERO
	$("#c1").html("Luxury<br><small>Fly in aircrafts with a comfortable cabin, all our services are adapted to the needs of our passengers, offering luxury, comfort and safety for a better trip.</small>");
	$("#c2").html("Safety<br><small>Vgoldenjets is a private flight service company that aims to provide safety to our passengers, which is why we are qualified (Argus Gold). Our selection of crews are professional and highly trained offering the highest levels of safety to our clients.</small>");
	$("#c3").html("On-Demand<br><small>Our team is available 24/7, just call and book your flight, we will take care of offering the best service at the best price with the highest levels of security.</small>");
	$("#c4").html("Depart<br><small>Depart and arrive on your own schedule with an aircraft and crew at your beck and call. Go directly to where you want, when you want, without layover, stops or delay.</small>");
	//CUARTO
	$('#tituloOurServices,#tituloOurServicesCel').html('OUR SERVICE');
	$('#ourServices,#ourServicesCel').html('Exclusive in the industry, in Vgoldenjets we understand our client’s expectations for every flight. We are supported by a full-service commercial operations team including Directors of Operations, Maintenance, and Safety as well as a Chief Pilot and flight dispatch personnel. A full team of flight coordinators are in place to coordinate every detail of the client’s trip, 24 hours a day. Special catering and or ground transportation services may be arranged by our team upon request.');
	//QUINTO
	$("#t5a").html("LIGHT JETS");
	$("#t5b").html("MIDSIZE JETS");
	$("#t5c").html("HEAVY JETS");
	$('#f5a').html("<br>1/8 Seats<br>Lights Jets aircraft offer a range of approximately three to five hours of flight time with a range of approximately 1,600 nautical miles. This type of aircraft is ideal for landing short runways or fields, they are ideal for business trips or vacations facilitating entry to many limited airports.");
	$('#f5b').html("<br>1/10 Seats<br>Mid-size jets offer a range of about four to five hours of flight time with a range of about 2,800 nautical miles. Some mid-size jets feature non-stop coast to coast flights and others may need to make one quick stop for fuel along the way. These features make the mid-size jet ideal for relaxed coast-to-coast flying.");
	$('#f5c').html("<br>1/19 Seats<br>When it comes to choosing your private jet charter, a heavy jet offers increased range and more space opportunities over their lighter, smaller counterparts. There are also ultra-long range heavy jets available for VIP jet charter which offer the utmost in luxury, without heading into executive airliner territory.");
	$('#contacto3').html('Request a quote');
	//FLOTA
	$('#privateJets').html('PRIVATE JETS');
	$('.datosCitation').html("Passenger capacity: 5 pax<br>Range: 1121 NM<br>Cruising speed: 360 kts<br>Service ceiling: 41,000 ft<br>");
	$('.datosHonda').html("Passenger capacity: 7 pax<br>Range: 1223 NM<br>Cruising speed: 422 kts<br>Service ceiling: 43,000 ft<br>");
	$('.datosLear').html("Passenger capacity: 8 pax<br>Range: 2,418 NM<br>Cruising speed: 436 kts<br>Service ceiling: 51,000 ft<br>");
	$('.datosHawker').html("Passenger capacity: 8/10 pax<br>Range: 2,620 NM<br>Cruising speed: 449 kts<br>Service ceiling: 43,000 ft<br>");
	$('.datosChallenger').html("Passenger capacity: 9/12 pax<br>Range: 3,590 NM<br>Cruising speed: 459 kts<br>Service ceiling: 41,000 ft<br>");
	$('.datosG4').html("Passenger capacity: 14 pax<br>Range: 4,200 NM<br>Cruising speed: 500 kts<br>Service ceiling: 45,000 ft<br>");
	//About
	$('#tituloAbout').html('ABOUT US');
	$('#contenidoAbout').html("<h4 class='subtituloAbout'>Introducing Vgoldenjets</h4>Vgoldenjets is an industry-leading provider of aircraft management and on demand private jet charter services. We serve corporations, entrepreneurs, government leaders and private clients who expect the very best in safety nd service, for all their private aviation travel.<br><br><h4 class='subtituloAbout'>Why choose us</h4>As a service company in the private. jet industry,we are passionate about delivering an exceptional aviation experience whit outstanding authentic hospitality. Because every customer is different and their vision of perfection is too. We take time to learn your individual wants,needs and notions so that we can meet any request.<br><br>Nothing is too much trouble. Even when your needs evolve,we adapt and innovate.<br><br><h4 class='subtituloAbout'>Excellent Aircraft Leadership</h4>We take great pride in our heritage of large operator expertise, system and knowledge that is fused whit dedicated operator agility,focus and attention to detail. This is what allows us to provide a support service experience that is both exceptional and memorable.<br>Then there are all the begind the scenes elements. We have incredible people, each one aspecialist in their funtion of the bussines. Taking care and pride in the smallest of details, to make the bigger things happen seamleesly.<br><br><h4 class='subtituloAbout'>Exceeding Highest Levels of Safety Standars</h4>Fewer than 1% of all operator charter operations in the U.S have earned the very highets safety accreditations that we have attained. An accomplishement attained whith a relatively lean, dedicated flight deparment, built on the philosophy of better, not bigger.<br><br>Our dedication to the customer shows in everything we do. Our relentless obsession in the pursuit of excellence dates back to day one. These safety accolades are not a destination for us, more a significant milestone in our continuous improvementr journey.");
	$('#contacto5').html('REQUEST A QUOTE');
	//PIE
	$('#contacto4').html('REQUEST A QUOTE');
	$('.datosTel').html('On call 24/7: ');
	$('#derechos').html('&copy; 2020 Vgoldenjets LLC. All rights reserved');
	//FORMULARIO COVID
	$('#tituloCovid').html('Covid-19 Flights');
	$('#textoCovid').html('Vgoldenjets understands that these are difficult times for the world, that is why we decided to give all our clients peace of mind by complying with all disinfection protocols to avoid any type of risk.  On board our aircraft have masks, hands sanitizers and gloves so that our clients are 100% safe and calm.  Not only do we comply with the protocols in the aircraft, we also subject the pilots to the COVID-19 test to avoid risks.  The safety of our customers and employees is very important to us.');
	//$('.closeCovid').attr('value','Close');
    //FORMULARIO DE CONTACTO
    $("#tituloContacto").html("CONTACT US");
    $("#subtituloContacto").html("Your Aircraft is waiting for you");
    $('#lDeparture').text('From');
    $('#lArrival').text('To');
    $("#opcionPassengers").html("Passengers");
    $('.contactInfo').html('Contact info');
    $('.contactInfoAddress').html('Address');
    $('.contactInfoNumbers').html('Contact numbers');
    $('.contactInfoOffice').html('Office');
    $('.contactInfoEmail').html('Email');
    $('.mailEmi').html('Operations: emiliano@vgoldenjets.com');
    $('.mailAle').html('Administration: alejandro@vgoldenjets.com');
    $('.mailAlex').html('Sales: alexp@vgoldenjets.com');
    $('.mailJose').html('Sales: jgerardo@vgoldenjets.com');
    $('#lEmail').text('E-mail');
    $('#lPhone').text('Phone');
    $('#lName').text('Name');
    $('#lMessage').text('Message');
    $('#lDateDeparture').text('Departure');
    $('#lDateArrive').text('Arrival');
    $('.sendFormulario').attr('value','Send');
    $('.closeFormulario').attr('value','Close');
    //document.getElementById("sendFormulario").value="Send";
    //$("#closeFormulario").html("Close");
    //FAST CONTACT
    $("#tituloFastContact").html("CONTACT US");
    $('#fastLDeparture').text('From');
    $('#fastLArrival').text('To');
    $("#fastOpcionPassengers").html("Passengers");
    $('#fastLEmail').text('E-mail');
    $('#fastLPhone').text('Phone');
    //document.getElementById("fastSendFormulario").value="Send";
	//document.getElementById("fastCloseFormulario").value="Close";
	//SEC CONTACT
    $(".tituloSecContact").html("Book a private jet");
    $('.secLDeparture').text('Enter City or Airport...');
    $('.secLArrival').text('Enter City or Airport...');
    //$(".secOpcionPassengers").html("Passengers");
    $('.secLEmail').text('E-mail');
    //$('.secLPhone').text('Phone');
    $('.secLMessage').text('Details');
    $('.textoPieSegundo').text('Contact VgoldenJets at +1(908)499-2484 or ');
    //SEC CEL CONTACT
    /*$("#tituloSecContactCel").html("Book a private jet");
    $('#secLDepartureCel').text('Enter City or Airport...');
    $('#secLArrivalCel').text('Enter City or Airport...');
    $("#secOpcionPassengersCel").html("Passengers");
    $('#secLEmailCel').text('E-mail');
    $('#secLPhoneCel').text('Phone');*/
}
function espanol()
{
    //CABECERA
	$(".menu").html("Menú");
	$(".init").html("Inicio");
	$(".fleet").html("Flota");
	$(".about").html("Nosotros");
	$(".contacto").html("Contacto");
	$(".idioma").html("Idioma");
	$(".ingles").html("Inglés");
	$(".espanol").html("Español");
	$('#contacto2,#contacto2Cel').html('Reserve ahora');
	$('.covid').html('Covid-19 UPD');
	//CUERPO
	//PRIMERO Y SEGUNDO
	$(".t1").html("VUELOS<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRIVADOS&reg;");
	$('.fast').html('Reserve ahora');
	//$("#segundo").html("<h5>Safety, Punctuality and Efficiency</h5>");
	//TERCERO
	$("#c1").html("Caracterísiticas<br><small>Vuele en aeronaves con una cómoda cabina, todos nuestros servicios se adaptan a las necesidades de nuestros pasajeros, ofreciendo lujo, comodidad y seguridad para un mejor viaje.</small>");
	$("#c2").html("Seguridad<br><small>Vgoldenjets es una empresa de servicios de vuelos privados que tiene como objetivo brindar seguridad a nuestros pasajeros, por eso estamos calificados (Argus Gold). Nuestra selección de tripulaciones son profesionales y altamente capacitados que ofrecen los más altos niveles de seguridad a nuestros clientes.</small>");
	$("#c3").html("Solicitud<br><small>Nuestro equipo está disponible 24/7, solo llame y reserve su vuelo, nosotros nos encargaremos de ofrecer el mejor servicio al mejor precio con los más altos niveles de seguridad.</small>");
	$("#c4").html("Itinerarios<br><small>Despegue y aterrize en su propio horario con un avión y tripulación a su entera disposición.  Ve directamente a donde quieras, cuando quieras, sin escalas, paradas ni retrasos.</small>");
	//CUARTO
	$('#tituloOurServices,#tituloOurServicesCel').html('NUERSTRO SERVICIO');
	$('#ourServices,#ourServicesCel').html('Exclusivo en la industria, en Vgoldenjets entendemos las expectativas de nuestros clientes para cada vuelo.  Contamos con el respaldo de un equipo de operaciones comerciales de servicio completo que incluye directores de operaciones, mantenimiento y seguridad, así como un piloto jefe y personal de despacho de vuelo.  Se cuenta con un equipo completo de coordinadores de vuelos para coordinar cada detalle del viaje del cliente, las 24 horas del día.  Nuestro equipo puede organizar servicios especiales de catering o transporte terrestre a pedido.');
	//QUINTO
	$("#t5a").html("LIGHT JETS");
	$("#t5b").html("MIDSIZE JETS");
	$("#t5c").html("HEAVY JETS");
	$('#f5a').html("<br>1/8 Asientos<br>Los aviones Lights Jets ofrecen un rango de aproximadamente tres a cinco horas de tiempo de vuelo con un rango de aproximadamente 1,600 millas náuticas. Este tipo de aeronave es ideal para aterrizar pistas o campos cortos, son ideales para viajes de negocios o vacaciones que facilitan la entrada a muchos aeropuertos limitados.");
	$('#f5b').html("<br>1/10 Asientos<br>Los jets de tamaño medio ofrecen una autonomía de cuatro a cinco horas de vuelo con una autonomía de unas 2.800 millas náuticas. Algunos aviones de tamaño mediano cuentan con vuelos sin escalas de costa a costa y otros pueden necesitar hacer una parada rápida para cargar combustible en el camino.  Estas características hacen que el jet de tamaño mediano sea ideal para vuelos relajados de costa a costa.");
	$('#f5c').html("<br>1/19 Asientos<br>Cuando se trata de elegir su chárter de jet privado, un jet pesado ofrece un mayor alcance y más oportunidades de espacio que sus contrapartes más ligeras y pequeñas. También hay jets pesados de ultra largo alcance disponibles para vuelos VIP que ofrecen lo máximo en lujo, sin dirigirse al territorio de los aviones ejecutivos.");
	$('#contacto3').html('Solicite presupuesto');
	//FLOTA
	$('#privateJets').html('JETS PRIVADOS');
	$('.datosCitation').html("Capacidad: 5 pasajeros<br>Rango: 1121 NM<br>Velocidad de crucero: 360 kts<br>Techo de servicio: 41,000 ft<br>");
	$('.datosHonda').html("Capacidad: 7 pasajeros<br>Rango: 1223 NM<br>Velocidad de crucero: 422 kts<br>Techo de servicio: 43,000 ft<br>");
	$('.datosLear').html("Capacidad: 8 pasajeros<br>Rango: 2,418 NM<br>Velocidad de crucero: 436 kts<br>Techo de servicio: 51,000 ft<br>");
	$('.datosHawker').html("Capacidad: 8/10 pasajeros<br>Rango: 2,620 NM<br>Velocidad de crucero: 449 kts<br>Techo de servicio: 43,000 ft<br>");
	$('.datosChallenger').html("Capacidad: 9/12 pasajeros<br>Rango: 3,590 NM<br>Velocidad de crucero: 459 kts<br>Techo de servicio: 41,000 ft<br>");
	$('.datosG4').html("Capacidad: 14 pasajeros<br>Rango: 4,200 NM<br>Velocidad de crucero: 500 kts<br>Techo de servicio: 45,000 ft<br>");
	//About
	$('#tituloAbout').html('ACERCA DE NOSOTROS');
	$('#contenidoAbout').html("<h4 class='subtituloAbout'>Presentando Vgoldenjets</h4>Vgoldenjets es un proveedor líder en la industria de gestión de aeronaves y servicios de chárter de jets privados bajo demanda.  Servimos a corporaciones, empresarios, líderes gubernamentales y clientes privados que esperan lo mejor en seguridad y servicio para todos sus viajes de aviación privada.<br><br><h4 class='subtituloAbout'>Por qué elegirnos</h4>Como empresa de servicios en el ámbito privado de la industria de los aviones a reacción, nos apasiona ofrecer una experiencia de aviación excepcional con una hospitalidad auténtica excepcional. Porque cada cliente es diferente y su visión de la perfección también lo es. Nos tomamos el tiempo para conocer sus deseos, necesidades y nociones individuales para poder satisfacer cualquier solicitud.<br><br>Nada es mucho problema. Incluso cuando sus necesidades evolucionan, nos adaptamos e innovamos.<br><br><h4 class='subtituloAbout'>Excelente liderazgo de aeronaves</h4>Estamos muy orgullosos de nuestra herencia de gran experiencia, sistemas y conocimientos de operadores que se fusionan con la agilidad, el enfoque y la atención a los detalles dedicados del operador. Esto es lo que nos permite brindar una experiencia de servicio de soporte que es excepcional y memorable.<br>Luego están todos los elementos de las escenas iniciales.  Contamos con gente increíble, cada uno especialista en su función de negocio. Cuidando y enorgulleciéndose de los detalles más pequeños, para hacer que las cosas más grandes sucedan sin problemas.<br><br><h4 class='subtituloAbout'>Exceder los niveles más altos de estándares de seguridad</h4>Menos del 1% de todas las operaciones chárter de operadores en los EE. UU. Han obtenido las acreditaciones de seguridad más altas que hemos obtenido. Un logro logrado con un departamento de vuelo dedicado relativamente delgado, construido sobre la filosofía de mejor, no más grande.<br><br>Nuestra dedicación al cliente se refleja en todo lo que hacemos.  Nuestra incansable obsesión por la búsqueda de la excelencia se remonta al primer día. Estos reconocimientos de seguridad no son un destino para nosotros, sino un hito importante en nuestro viaje de mejora continua.");
	$('#contacto5').html('SOLICITE PRESUPUESTO');
	//PIE
	$('#contacto4').html('SOLICITE PRESUPUESTO');
	$('.datosTel').html('Comuníquese 24/7: ');
	$('#derechos').html('&copy; 2020 Vgoldenjets LLC. Todos los derechos reservados.');
	//FORMULARIO COVID
	$('#tituloCovid').html('Vuelos Covid-19');
	$('#textoCovid').html('Vgoldenjets entiende que son momentos dificiles para el mundo , por eso nosotros decidimos darle tranquilidad a todos nuestros clientes cumpliendo con todos los protocolos de desinfeccion para evitar cualquier tipo  de riesgo tambien contamos con mascaras, sanitisantes para manos y guantes para que nuestros clientes esten 100% seguros y tranquilos. No solo cumplimos con los protocolos en las aeronaves tambien sometemos a los pilotos a realizarse la prueba del COVID-19 para evitar riesgos. La seguridad de nuestros clientes y empleados es muy importante para nosotros.');
	//$('#closeCovid').attr('value','Cerrar');
    //FORMULARIO DE CONTACTO
    $("#tituloContacto").html("CONTACTO");
    $("#subtituloContacto").html("Su avión lo espera");
    $('#lDeparture').text('Desde');
    $('#lArrival').text('Hasta');
    $("#opcionPassengers").html("Pasajeros");
    $('.contactInfo').html('Información de contacto');
    $('.contactInfoAddress').html('Dirección');
    $('.contactInfoNumbers').html('Números de contacto');
    $('.contactInfoOffice').html('Oficina');
    $('.contactInfoEmail').html('Email');
    $('.mailEmi').html('Operaciones: emiliano@vgoldenjets.com');
    $('.mailAle').html('Administración: alejandro@vgoldenjets.com');
    $('.mailAlex').html('Ventas: alexp@vgoldenjets.com');
    $('.mailJose').html('Ventas: jgerardo@vgoldenjets.com');
    $('#lEmail').text('E-mail');
    $('#lPhone').text('Teléfono');
    $('#lName').text('Nombre');
    $('#lMessage').text('Mensaje');
    $('#lDateDeparture').text('Salida');
    $('#lDateArrive').text('Llegada');
    $('.sendFormulario').attr('value','Enviar');
    $('.closeFormulario').attr('value','Cerrar');
    //document.getElementById("sendFormulario").value="Enviar";
    //$("#closeFormulario").html("Cerrar");
    //FAST CONTACT
    $("#tituloFastContact").html("CONTACTENOS");
    $('#fastLDeparture').text('Desde');
    $('#fastLArrival').text('Hasta');
    $("#fastOpcionPassengers").html("Pasajeros");
    $('#fastLEmail').text('E-mail');
    $('#fastLPhone').text('Teléfono');
    //document.getElementById("fastSendFormulario").value="Enviar";
	//document.getElementById("fastCloseFormulario").value="Cerrar";
	//SEC CONTACT
    $(".tituloSecContact").html("Reserve su jet privado");
    $('.secLDeparture').text('Introduzca Ciudad o Aeropuerto...');
    $('.secLArrival').text('Introduzca Ciudad o Aeropuerto...');
    //$(".secOpcionPassengers").html("Pasajeros");
    $('.secLEmail').text('E-mail');
    //$('.secLPhone').text('Teléfono');
    $('.secLMessage').text('Detalles');
    $('.textoPieSegundo').text('Contáctese con VgoldenJets al +1(908)499-2484 o ');
    //SEC CEL CONTACT
    /*$("#tituloSecContactCel").html("Reserve su jet privado");
    $('#secLDepartureCel').text('Introduzca Ciudad o Aeropuerto...');
    $('#secLArrivalCel').text('Introduzca Ciudad o Aeropuerto...');
    $("#secOpcionPassengersCel").html("Pasajeros");
    $('#secLEmailCel').text('E-mail');
    $('#secLPhoneCel').text('Teléfono');*/
}

function fechas(){
    
	/*$('#dateDeparture').datepicker().on('changeDate',function(){
        $('#dateArrive').datepicker('setStartDate',$('#dateDeparture').datepicker('getDate'));});
	    $('#dateArrive').datepicker().on('changeDate',function(){$('#dateDeparture').datepicker('setEndDate',$('#dateArrive').datepicker('getDate'));
    });*/
	//FIN FECHA
	//EFECTOS CONTACTO
	$('#dateDeparture').focus(function(){$('.fa-plane-departure').attr('style','color:#fff !important');});
	$('#dateArrive').focus(function(){$('.fa-plane-arrival').attr('style','color:#fff !important');});
	$('#dateDeparture').focusout(function(){$('.fa-plane-departure').attr('style','color:#aaa !important');});
	$('#dateArrive').focusout(function(){$('.fa-plane-arrival').attr('style','color:#aaa !important');});
	//EFECTOS FAST CONTACT
	$('#fastDateDeparture').focus(function(){$('#fCalendar').attr('style','color:#fff !important');});
	$('#fastDateDeparture').focusout(function(){$('#fCalendar').attr('style','color:grey !important');});
	//EFECTOS SEC CONTACT
	$('#secDeparture').focus(function(){$('#plaDep').attr('style','color:#000 !important');});
	$('#secArrival').focus(function(){$('#plaArr').attr('style','color:#000 !important');});
	$('#secDateDeparture').focus(function(){$('#secCalendar').attr('style','color:#000 !important');});
	$('#secDeparture').focusout(function(){$('#plaDep').attr('style','color:grey !important');});
	$('#secArrival').focusout(function(){$('#plaArr').attr('style','color:grey !important');});
	$('#secDateDeparture').focusout(function(){$('#secCalendar').attr('style','color:grey !important');});
	//EFECTOS SEC CEL CONTACT
	$('#secDepartureCel').focus(function(){$('#plaDepCel').attr('style','color:#000 !important');});
	$('#secArrivalCel').focus(function(){$('#plaArrCel').attr('style','color:#000 !important');});
	$('#secDateDepartureCel').focus(function(){$('#secCalendarCel').attr('style','color:#000 !important');});
	$('#secDepartureCel').focusout(function(){$('#plaDepCel').attr('style','color:grey !important');});
	$('#secArrivalCel').focusout(function(){$('#plaArrCel').attr('style','color:grey !important');});
	$('#secDateDepartureCel').focusout(function(){$('#secCalendarCel').attr('style','color:grey !important');});
}
function cambioSec(){
	var a = $('#secDeparture').val();
	var b = $('#secArrival').val();
	var c = $('#secDateDeparture').val();
	var d = $('#secEmail').val();
	if( a.length > 0 && b.length > 0 && c.length > 0 && d.length > 0){
		$('#okSec').prop('disabled',false);
	}
	else{
		$('#okSec').prop('disabled',true);
	}
}
function cambioSecCel(){
	var a = $('#secDepartureCel').val();
	var b = $('#secArrivalCel').val();
	var c = $('#secDateDepartureCel').val();
	var d = $('#secEmailCel').val();
	if( a.length > 0 && b.length > 0 && c.length > 0 && d.length > 0){
		$('#okSecCel').prop('disabled',false);
	}
	else{
		$('#okSecCel').prop('disabled',true);
	}
}
function cambioFast(){
	var a = $('#fastDeparture').val();
	var b = $('#fastArrival').val();
	var c = $('#fastDateDeparture').val();
	var d = $('#fastPassengers').val();
	var e = $('#fastPhone').val();
	var f = $('#fastEmail').val();
	if( a.length > 0 && b.length > 0 && c.length > 0 && d.length > 0 && e.length > 0 && f.length > 0){
		$('#okFast').prop('disabled',false);
	}
	else{
		$('#okFast').prop('disabled',true);
	}
}
function cambioContacto(){
	var a = $('#departure').val();
	var b = $('#arrival').val();
	var c = $('#dateDeparture').val();
	var d = $('#dateArrive').val();
	var e = $('#passengers').val();
	var f = $('#name').val();
	var g = $('#phone').val();
	var h = $('#email').val();
	if( a.length > 0 && b.length > 0 && c.length > 0 && d.length > 0 && e.length > 0 && f.length > 0 && g.length > 0 && h.length > 0){
		$('#okContacto').prop('disabled',false);
	}
	else{
		$('#okContacto').prop('disabled',true);
	}
}
