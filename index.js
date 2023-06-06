const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db');
const bcrypt = require('bcrypt');
const { User } = require('./models'); //desestructuracion

app.use(express.json()); // middleware que convierte los datos JSON en objetos de js

app.get('/', function (req, res) {
    res.send('Hello World')
}) // localhost:3000/

db.then (()=>{
    app.listen(PORT, ()=>{
        console.log (`servidor levantado en puerto ${PORT}`); 
    })
})
.catch ((error)=>{
    console.error ('Error starting server', error.message);
})
