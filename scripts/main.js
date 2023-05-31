

let personas = [];

function validar(){
    let nombre = document.querySelector('#nombre');
    let email = document.querySelector('#email');
    let patron = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

    if(nombre.value.trim()==="" || nombre.value.length < 3){
        document.querySelector('#errorNombre').style.display = 'inline';
        nombre.focus;
        return false;
    }else{
        document.querySelector('#errorNombre'.style.display = 'none');
    }
    return false;
}
validar();