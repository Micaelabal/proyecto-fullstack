require ('dotenv').config();
const express = require("express");
const hbs = require("hbs");
const mysql = require("mysql");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;




//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/assets", express.static(__dirname + "/public"));
app.use(require("./router/contacto"));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");


app.listen(port, () => {
  console.log(`Usando el puerto http://localhost:${port}`);
});
