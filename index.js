'use strict' //I'm basing my job on Carlos Azaustre course and its using EcmaScript 6

const ipserver = 'https://noderest-josheriff.c9users.io'; // to bring from config.js in future 

const express = require('express');

const app = express();

app.listen (8080, () => {
    console.log('API REST corriendo en '+ipserver);
})