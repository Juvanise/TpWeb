
console.log("hola mundo");
let personas = [];
let primero = document.querySelector("form input");
primero.focus();

function validar(){
    let nombre = document.getElementById('nombre');
    
    let email = document.getElementById('email');
    let patron = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
    let mensaje = document.getElementById('mensaje');
    if(nombre.value.trim()==="" || nombre.value.length < 3){
        document.getElementById('errorNombre').style.display = 'inline';
        nombre ="";
        nombre.focus;
        return false;
    }else{
        document.getElementById('errorNombre'.style.display = 'none');
    }
    
    if(!patron.test(email.value)){
        document.getElementById('errorEmail').style.display = 'inline';
        email.focus;
        return false;
    }else{
        document.getElementById('errorEmail').style.display = 'none';
        
        
    }
    if(mensaje.value.trim() == ""){
        document.getElementById('errorMensaje').style.display = 'inline';
        return false;
    }else{
        document.getElementById('errorMensaje').style.display = 'none';
        return false;
    }
    return false;
}
