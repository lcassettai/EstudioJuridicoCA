/*Desplazamiento vertical*/
$(function(){
$('a[href*=#]').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
       && location.hostname == this.hostname) {
           var $target = $(this.hash);
           $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
           if ($target.length) {
               var targetOffset = $target.offset().top;
               $('html,body').animate({scrollTop: targetOffset}, 1000);
               return false;
          }
     }
 });
});

/* Mapa*/
function initMap() {
 var image = "Image/position.png";
 var latLang = {lat: -27.371686, lng: -55.894387}
 var mapDiv = document.getElementById('map');
 var map = new google.maps.Map(mapDiv, {
  center:latLang ,
  zoom: 18
});

var marker = new google.maps.Marker({
 position: latLang,
 map: map,
 title: 'Cassettai & Acosta Estudio Juridico'
});

var infowindow =  new google.maps.InfoWindow({
		content: '<IMG BORDER="0" ALIGN="Left" SRC="Image/logoppalblanco.png" width="100px">',
		map: map,
		position: latLang
	});

  infowindow.open(map, marker);
}




window.addEventListener('load',init,false);
function init(){
  document.querySelector('#form').addEventListener('submit',sendForm,false);
}

function sendForm(e){
  e.preventDefault();
  var form = this;
  var nombre = document.getElementById('nombre').value;
  var correo = document.getElementById('correo').value;
  var telefono = document.getElementById('telefono').value;
  var mensaje = document.getElementById('mensaje').value;
  var fD = new FormData(form);

  var ajax = new XMLHttpRequest();
  ajax.open('POST','Contacto.php',true);
  //El valor por defecto es text, response type define que va a devolver el metodo post o get respectivamente
  ajax.responseType = "text";
  ajax.addEventListener('load',function(e){
    if(this.status = 200){
      console.log('Mensaje enviado!');
      document.getElementById('nombre').value = "";
      document.getElementById('correo').value = "";
      document.getElementById('telefono').value = "";
      document.getElementById('mensaje').value = "";
      swal("Felicidades!", "Su mensaje se envio correctamente!", "success")
    }
  },false)
  ajax.send(fD);
  return false;
}

var menu = document.querySelector('.menuToggle');
var cerrado = true;
function miFuncion(){
  if(cerrado){
    menu.style.transform = "translateX(0%)";
    cerrado = false;
  }else{
    menu.style.transform = "translateX(-100%)";
    cerrado = true;
  }
}

function cerrar(){
  menu.style.transform = "translateX(-100%)";
  cerrado = true;
}
