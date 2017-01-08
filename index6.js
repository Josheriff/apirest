'use strict' //I'm basing my job on Carlos Azaustre course and its using EcmaScript 6

//const ipserver = process.env.IP; // to bring from config.js in future 
const ipserver = 'https://noderest-josheriff.c9users.io'
const port = process.env.PORT || 8080 ;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Adding GET

app.get('/api/product',(req,res) => {
        res.status(200).send({products: []}); // status 200 = OK
});

app.get('/api/product/:productId',(req, res) => {
    
});

// Adding POST

app.post('/api/product', (req, res) =>{
    console.log(req.body);
    res.status(200).send({message: 'Producto recibido'});
});

// Adding put (to refresh items)

app.put('api/product/:productId',(req, res) =>{
    
});

// Adding delete

app.delete('api/product/:productId',(req, res) =>{
    
});

// SERVIDOR ESCUCHANDO:

// CODIGO IMPORTANTE ENTRE COMENTARIOS

// conectando a la base de datos:

mongoose.connect('mongodb://0.0.0.0:27017/shop', (err, res) => {
    if (err) throw err
    console.log('conexión a base de datos establecida...');
    
    app.listen (port, () => {
    console.log('API REST corriendo en '+ipserver+': '+port);
});
});
