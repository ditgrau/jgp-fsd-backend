const router = require('express').Router();
const authController = require('../controllers/authController')

router.post('/register', authController.register);

module.exports = router;
// lo mismo que el router, pero estoy en vista y llamo a controller