const express = require('express');
const path=require('path');
const hbs=require('hbs');
const bodyParser=require('body-parser');
const { query, Router } = require('express');
const port=3000;


const app = express();


//Setting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/view/partials', function (err){});


//Estatico
app.use(express.static(path.join(__dirname, 'public')));




//Rutas
app.get ("/",(req,res) => {
  res.sendFile('/views/index.html',{root: __dirname});
});


app.get ("/Sucursales",(req,res) =>{
  res.sendFile(__dirname + "/public/Sucursales.html");
});


app.get("/Contacto",(req,res)=>{
  res.redirect('contacto');
});

app.get("/Tienda", (req,res) =>{
  res.sendFile(__dirname + "/public/Tienda.html");
});


app.get("/Registrarse",(req,res) =>{
  res.sendFile(__dirname + "/public/Registrarse.html");
});

app.get("/Iniciar sesion",(req,res) =>{
  res.sendFile(__dirname +"/public/Iniciarsesion.html");
});

app.get("/Novedades",(req,res) =>{
    res.sendFile(__dirname+"/public/Novedades.html");
  });

  app.get("/Tienda",(req,res) =>{
    res.sendFile(__dirname +"/public/Tienda.html");
  });

  app.get("/Recibodecompras",(req,res) =>{
    res.sendFile(__dirname +"/public/Recibodecompras.html");
  });




//Render
app.get('/', (req, res) =>{ 
  res.render('index');
  res.type('html');
});

app.get('/Sucursales', (req, res) =>{ 
    res.render('sucursales');
});
      
app.get('/Contacto', (req, res) =>{ 
    res.render('Contacto');
  });
      
  app.get('/Registrarse', (req, res) =>{ 
      res.render('registrarse');
    });

    app.get('/Registrofinaldeusuario', (req, res) =>{ 
      res.render('registrofinaldeusuario');
    });

    app.get('/Iniciarsesion', (req, res) =>{ 
      res.render('iniciarsesion');
    });

 app.get('/Tienda', (req, res) =>{ 
      res.render('tienda');
    });  
    
    
    app.get('/Recibodecompras', (req, res) =>{
    res.render('Recibodecompras')
    });
     
      app.get('/', (req, res) =>{ 
      res.render('Novedades');
    });


//Buscador
function func(){
    window.location = document.getElementById('link-box').value;
  }  

  
  /*
  //EVENTS MOUSE
  
  let button= document.getElementsById("navbar-toggler");
  button.onclick=() =>(console.log("Click"));
  button.onmousemove=() => (console.log("Move"));
  
  let a= document.getElementsById("nav-link active");
  a.onclick=() =>(console.log("Click"));
  a.onmousemove=() => (console.log("Move"));
  
  let p= document.getElementsById("nav-link dropdown-toggle");
  p.onclick=() =>(console.log("Click"));
  p.onmousemove=() => (console.log("Move"));
  
  let li= document.getElementsById("dropdown-menu");
  li.onclick=() =>(console.log("Click"));
  li.onmousemove=() => (console.log("Move"));
  
  let input= document.getElementsById("form-control me-2");
  input.onclick=() =>(console.log("Click"));
  input.onmousemove=() => (console.log("Move"));
*/


app.listen(port, () => {
    console.log ('Puerto corriendo en http://localhost:${3000}')
  });









