//Tabs de navegador
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
