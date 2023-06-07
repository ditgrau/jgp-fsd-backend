//Configuración básica de una aplicación Express con base de datos y enrutamiento
const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db');
const router = require ('./router');

app.use(express.json()); // middleware que convierte los datos JSON en objetos de js
app.use (router); // ejecutar el router

app.get('/', (req, res) => {
    res.send('Hello World')
}) // localhost:3000/


// app.get('/users', (req, res) =>{
//     res.send
// })



db.then (()=>{ //si se conecta a la base de datos .then
    app.listen(PORT, ()=>{
        console.log (`servidor levantado en puerto ${PORT}`); 
    })
}) //si no, .catch (error)
.catch ((error)=>{
    console.error ('Error starting server', error.message);
})
