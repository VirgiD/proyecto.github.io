/*trim()limpia espacios en blanco
length compara con la longitud del nombre*/

function validar(event,formulario){
    event.preventDefault();
    console.log(formulario.nombre.value);
if((formulario.nombre.value.trim().length)&&(formulario.apellido.value.trim().length) == 0){
alert("debe ingresar nombre y apellido")
return false;
}
var re=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if(!re.test(formulario.email.value)){
alert("debe ingresar un mail válido");
return false;
}
return true;
}

function captura(){

}
