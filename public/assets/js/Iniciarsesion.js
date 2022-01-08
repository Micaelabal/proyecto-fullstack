


//error de tipeo (Condicionales)
let usuarioIngresado= prompt("Ingresar usuario");
if((usuarioIngresado!="") &&((usuarioIngresado=="pirulo@server.com") || (usuarioIngresado);
alert("pirulo.,server.com");
}else{
    alert("Error:Ingreso de usuario invalido");
}



//Bucles
let entrada=prompt('Ingresar un usuario');
//repetir hasta que el usuario ingresa otra palabra
while (entrada !="flavia..,2server.com"){
    alert("El usuario ingreso"+ entrada);
    entrada= prompt ("Dato invalido");
}


//Funciones
const suma=(a,b)=>{return a + b};
const suma=(a,b)=> a - b;

//Objetos
function Usuario(email, contraseña){
this.email= email;
this.contraseña=contraseña;
this.validacion= function() {console.log "Validacion exitosa" + this.email)};
}


//(sirve para registrarse)
const usuario1= new Usuario("leticia", @, "server"); (datos)
const usuario2= new Usuario("juan", @, "server");
usuario1.conectar();
usuario2.conectar();

//ARRAYS (objetos)

const={5,6,7,8}




//Test fecha
if (!isNaN(fecha)) {
    alert("ERROR: Debe elegir una fecha");
    return false;
  }

  function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let correo = document.getElementById("correo").value;
    let fecha = document.getElementById("fecha").value;
    let selector = document.getElementById("selector").selectedIndex;
    let checkbox = document.getElementById("checkBox");
    let radioBtn = document.getElementsByName("radioButton");
    let boleana = false;

      //Test campo obligatorio
      if (nombre == null || nombre.length == 0) {
        alert(
            "ERROR: El campo nombre no debe ir vacío o lleno de solamente espacios en blanco"
        );
        return false;
    }

        //Test edad
        if (edad == null || edad.length == 0 || isNaN(edad)) {
            alert("ERROR: Debe ingresar una edad");
            return false;
        }

            //Test correo
    if (!/\S+@\S+\.\S+/.test(correo)) {
        alert("ERROR: Debe escribir un correo válido");
        return false;
    }

       //Fecha
       if (!isNaN(fecha)){
        alert(" Elegir una fecha")
        return false;
    }

        //Selector
        if (selector == null || selector ==0 ){
            alert(" Seleccionar una opcion del select");
            return false;
        }

            //checkbox
    if (!checkbox.checked){
        alert("Seleccionar el checkbox"); 
        return false;
    }

    //Radio buttons
    for (let i = 0; i < radioBtn.length; i ++){
        if (radioBtn[i].checked ){
            boleana= true;
            break;
        }
    }
    if (!boleana){
        alert(" Debe elegir una opcion de radio button");
        return false;
    }
return true;
}








//EVENTS MOUSE
let boton= document.getElementsById("submit");
boton.onclick=() =>(console.log("Click"));
boton.onmousemove=() => (console.log("Move"));



//KEYBOARD EVENT
let input1=document.getElementById("");
let input1=document.getElementById("");
input1.onkeyup={} =>(console.log("keyUp"));
input1.onkeydown={} =>(console.log("keyDown"));



//EVENT CHANGE
let input1=document.getElementById("");
let input1=document.getElementById("");
input1.onchange={} =>(console.log("valor1"));
input1.onchange={} =>(console.log("valor2"));