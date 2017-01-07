'use strict' //I'm basing my job on Carlos Azaustre course and its using EcmaScript 6

const ipserver = 'https://noderest-josheriff.c9users.io'; // to bring from config.js in future 

const port = process.env.PORT || 8080 ;
const express = require('express');
const bodyParser = require('body-parser');

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
app.listen (port, () => {
    console.log('API REST corriendo en '+ipserver+': '+port);
});
// CODIGO IMPORTANTE ENTRE COMENTARIOS
