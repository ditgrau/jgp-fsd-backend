// importacion de router y controllador
const router = require('express').Router(); // requiero al router
const authController = require('../controllers/authController') // y al controlador 

// se definen rutas utilizando el router
router.post('/register', authController.register);
router.post('/login', authController.login);

//  exporta el router
module.exports = router;
