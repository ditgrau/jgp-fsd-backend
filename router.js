const router = require('express').Router();
// importa la funcion Router de express

const authRoutes = require('./views/authRoutes');
//guarda el requerimiento de la ruta de proyecto en una variable

router.use('/', authRoutes);
// asigna el / en la url a la vista authRoutes del proyecto

module.exports = router; // se exporta para que se pueda hacer require del router desde otros archivos