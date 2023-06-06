const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db');

app.get('/', function (req, res) {
    res.send('Hello World')
}) // localhost:3000/

db.then (()=>{
    app.listen(PORT, ()=>{
        console.log (`servidor levantado en puerto ${PORT}`); 
    })
})
.catch (()=>{
    console.error ('Error starting server', error.message);
})
