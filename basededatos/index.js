const express = require('express');
const path = require('path');
const hbs = require('hbs');
const mysql = require('mysql');
const { query, Router } = require('express');

const app = express();

// MiDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/assets', express.static(__dirname + '/public'));

/*
app.use(require('./router/router'));
*/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');




//SERVIDOR
app.listen(3000, () => {
    console.log('Server is running at port 8000');
});
