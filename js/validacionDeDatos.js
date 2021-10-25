/*document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });*/

var boton = document.getElementById("boton")
boton.addEventListener("click", validarFormulario)
function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apll = document.getElementById('apellido').value;
    if(nombre.length == 0 & apll.length == 0) {
      alert('No has escrito nada');
    return;} else {alert('No has escrito uno de los campos'); return;}
}