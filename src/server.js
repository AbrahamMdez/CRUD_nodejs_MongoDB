'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');

//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname + 'views'));

//Middelwares
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));


//Global Variables


//Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

//Static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;