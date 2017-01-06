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
### code changed in json
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

### code changed in this block:

```javascript
const port = process.env.PORT || 3000 ; // port by enviroment variable


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

```
        



      
