const { Router } = require ("express");
const router = new Router();
const mysql = require('mysql');



// Conexión a base de datos
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tienda' ,  
    password: ''
  });
  
  conn.connect((err) => {
    if (err) throw err;
    console.log('Conexión establecida..')
  });



  // SELECT 
router.get('/productos', (req, res) => {
    let sql = 'SELECT * FROM tickets';
    let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.render('productos', {
        results: results
      });
    });
  });
  
  
  
  // INSERTAR
  router.post('/save', (req, res) => {
    let data = { 
        mediosdepago_nombre: req.body.mediosdepago_nombre , 
        envio: req.body.envio,
     };
    let sql = "INSERT INTO tickets SET ?";
    let query = conn.query(sql, data, (err, results) => {
      if (err) throw err;
      res.redirect('/productos');
    });
  });
  
  
  //UPDATE
  router.post('/update', (req, res) => {
    let sql = 
    "UPDATE tickets SET mediosdepago_nombre='" 
    + req.body.mediosdepago_nombre + 
    "', envio='" + req.body.envio + 
    "' WHERE ordendepedido_id=" + 
    req.body.ordendepedido.id;
    let query = conn.query (sql,  (err, results) => {
      if (err) throw err;
      res.redirect('/productos');
    });
  });
  
  // DELETE
  router.post('/delete',(req, res) => {
    let sql = "DELETE FROM tickets WHERE ordendepedido_id=" + req.body.ordendepedido_id + "";
    let query = conn.query (sql, (err, results) => {
      if (err) throw err;
        res.redirect('/productos');
    });
  });

  module.exports = router;