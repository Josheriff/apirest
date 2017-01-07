# DISCLAIMER

- FROM NOW ALL THIS CONTENT IS JUST AN ADDAPTED STEP BY STEP FROM CARLOS AZAUSTRE COURSE
- THIS REPOSITORY IS BEING BUILDED, WHEN ENDED I WILL ERASE THIS LINES
- I WILL START MAKING NODE, EXPRESS, MONGO
- I WILL CHANGE TO NODE,PILLARSJS,FIREBASE

# HOW TO USE:
I have created different branches index1.js index2.js etc the last one is the master
that will contain the final app working.
The way to is you have to read, practice and understand from index1.js to master
step by step until you finally become to master branch.

## First step:

*Instruction*-> in console go to your folder project or create one.
  - *Code shell* -> 'git init'
    - "Full Fill what is asking"->
      - name: put the name of the project
      - version": 1.0.0
      - description: description here
      - entrypoint: how you plan to name the main file (indes.js)
      - test command: blank and enter
      - git repository
      -  keyworks: if you want for public in npm
      - author: your name, and if you want ur url or email
      - license: MIT is ok, but put what u want
      
      - Is this ok: yes

## next step

- "npm install express --save" or "npm i express -S"

## next step

- create the main file in this case index.js
(you'll can se the index.js in the repo files)

## next step

- create the main file in this case index.js
(you'll can se the index.js in the repo files)

    ### code in index1.js:
```javascript
'use strict' //I'm basing my job on Carlos Azaustre course and its using EcmaScript 6

const ipserver = 'https://noderest-josheriff.c9users.io'; // to bring from config.js in future 

const express = require('express');

const app = express();

app.listen (8080, () => {
    console.log('API REST corriendo en '+ipserver);
});
```
    

##next step
-Install body parser:
```
npm i -S body-parser
```
-Install nodemon: (optional) (-D is dev dependencies)
```
npm i -D nodemon
```
### code changed in json index2
In scripts:
```
"scripts": {
    "start": "nodemon index2.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```
Now when we launch the aplication in dev, we will write
```
npm start
```

### code changed in index2.js:

```javascript
const port = process.env.PORT || 3000 ; // port by enviroment variable


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

```

## code changed in index3.js:

```javascript
// Adding middleware
app.get('/hola',(req,res) => {
    res.send({ message : "Hola Mundo!"});
}); // https://ipdirection/hola -> Hola Mundo!
```
## code re-changed in index3.js:
```javascript
app.get('/hola/:name',(req,res) => { // :name is a req parameter
    res.send({ message : "Hola " + req.params.name});
}); // https://ipdirection/hola/mundo -> Hola mundo
```

## lets continue with index4

## code changed in index4.js:

erased the example app.get('/hola/:name'), now that we know how it works
```javascript
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
```
You can test the post metod from: 
[Hurl.it](https://www.hurl.it)
      
