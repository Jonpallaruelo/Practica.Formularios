
// Funcion para mostrar el textarea + boton para ocultar descriptcion


function show(){
    if (document.getElementById('textarea').style.display == 'block') {
        document.getElementById('textarea').style.display = 'none'
        document.getElementById('btnMostrarDescripcion').textContent = 'Mostrar descripción';
    } else if (document.getElementById('textarea').style.display == 'none') {
        document.getElementById('textarea').style.display = 'block';
        document.getElementById('btnMostrarDescripcion').textContent = 'Ocultar descripción';
    }

    

}









//funcion cambiar imagen + onchange

function cambiarImagen(){


// var select= document.getElementById('select')


if('Distribucion'==select.value){

    document.getElementById('contenedor-imagenes').innerHTML=' <img src="imagenes/distribucion.jpg" class="img" alt="" srcset="">'

}else if('oficina'==select.value){
    
    document.getElementById('contenedor-imagenes').innerHTML=' <img src="imagenes/oficina.jpg" class="img" alt="" srcset="">'

}else{

    'Produccion'==select.value
    document.getElementById('contenedor-imagenes').innerHTML=' <img src="imagenes/produccion.jpg" class="img" alt="" srcset="">'

}


}


//validacion de los imputs con expresiones regulares y el metodo test + setTimeout para eliminar mensajes.


function NumeroSerie(){

    var formInput=document.getElementById('form').value

var eRegular=  /^\d{3}[A-Z]{4}[1-2A]$/

if(eRegular.test(formInput)){

    correcto.style.display='block';

    setTimeout(() => {
        correcto.style.display = 'none';
    }, 3000);
   
}else{

    errormensaje.style.display='block';

}


    
}

function remove(){
    const form = document.getElementById('form');
    form.value = "";
}

//funcion para limpiar el imput y los mensajes de error tipo onfocus
function clearError() {
    remove();
    if (errormensaje.style.display == 'block') {
        errormensaje.style.display = 'none';
    }
}

//funcion para que cambie el color del imput en funcion si esta bien o esta mal
function checkValidNumber() {
    const number = document.getElementById('form').value;
    const label = document.getElementById('numberLabel');
    var eRegular=  /^\d{3}[A-Z]{4}[1-2A]$/

    if (number == '') {
        label.style.color = 'black';
    } else if(eRegular.test(number)){
        label.style.color = 'rgb(71, 173, 59)';
    }else{
        label.style.color = 'red';
    }
}








