//Pestañas DASHBOARD, MY CRUISE, AGENTS y HELP
var mostrarOcultar = function(divtexte) {

  var text1 = document.getElementById('contenido-1');
  var text2 = document.getElementById('contenido-2');
  var text3 = document.getElementById('contenido-3');
  var text4 = document.getElementById('contenido-4');

  if (divtexte == 'contenido-1') {
    text1.style.display = 'block';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'none';
  }
  else if (divtexte == 'contenido-2') {
    text1.style.display = 'none';
    text2.style.display = 'block';
    text3.style.display = 'none';
    text4.style.display = 'none';
  }
  else if (divtexte == 'contenido-3') {
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'block';
    text4.style.display = 'none';
  }
  else if (divtexte == 'contenido-4') {
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'block';
  }
}


//Pestañas ALL, PHYSICAL y VIRTUAL
var mostrarOcultar2 = function(muestrate) {

  var contenidoAll = document.getElementById('contenidoAll');
  var contenidoPhysical = document.getElementById('contenidoPhysical');
  var contenidoVirtual = document.getElementById('contenidoVirtual');

  if (muestrate == 'contenidoAll') {
    contenidoAll.style.display = 'block';
    contenidoPhysical.style.display = 'none';
    contenidoVirtual.style.display = 'none';
  }
  else if (muestrate == 'contenidoPhysical') {
    contenidoAll.style.display = 'none';
    contenidoPhysical.style.display = 'block';
    contenidoVirtual.style.display = 'none';
  }
  else if (muestrate == 'contenidoVirtual') {
    contenidoAll.style.display = 'none';
    contenidoPhysical.style.display = 'none';
    contenidoVirtual.style.display = 'block';
  }
}
