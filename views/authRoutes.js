const router = require('express').Router(); // requiero al router
const authController = require('../controllers/authController') // y al controlador 

router.post('/register', authController.register);

module.exports = router;
// lo mismo que el router, pero estoy en vista y llamo a controller