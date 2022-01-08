

let encabezado= document.querySelector("h1");
console.log(encabezado.innerText);

let texto= document.querySelector("#texto");
console.log(texto.innerText);

let textouno= document.querySelector(".textouno");
console.log(textouno.innerText);




//EVENTS MOUSE
let boton= document.getElementsById("navbar-toggler");
boton.onclick=() =>(console.log("Click"));
boton.onmousemove=() => (console.log("Move"));

let a= document.getElementsById("nav-link active");
a.onclick=() =>(console.log("Click"));
a.onmousemove=() => (console.log("Move"));

let a= document.getElementsById("nav-link dropdown-toggle");
a.onclick=() =>(console.log("Click"));
a.onmousemove=() => (console.log("Move"));

let a= document.getElementsById("dropdown-item");
a.onclick=() =>(console.log("Click"));
a.onmousemove=() => (console.log("Move"));

let boton= document.getElementsById("btn btn-outline-success");
boton.onclick=() =>(console.log("Click"));
boton.onmousemove=() => (console.log("Move"));



//KEYBOARD EVENT
let input1=document.getElementById("");
let input1=document.getElementById("");
input1.onkeyup={}(console.log("keyUp"));
input1.onkeydown={}(console.log("keyDown"));



//EVENT CHANGE
let input1=document.getElementById("");
let input1=document.getElementById("");
input1.onchange={}(console.log("valor1"));
input1.onchange={}(console.log("valor2"));









