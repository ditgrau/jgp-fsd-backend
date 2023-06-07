const { User } = require('../models'); //desestructuracion
//propiedad User del objeto exportado por models
const bcrypt = require('bcrypt'); //importar la biblioteca
const authController = {}; // objeto vacio, para definir metodos relacionados con la autenticacion




authController.register = async(req, res) => { //es una funcion flecha/asincrona porque se relaciona con la BD
    // req, res > funciones para manejar rutas y controladores (request/response)
    try {
        //funciones try y catch, para manejar errores y excepciones
        // si se produce una excepcion en try, pasa a catch
        if (req.body.password.lenght < 4) {
            return res.send ('Password must be longer than 4 characters');
        }

        const newPassword = bcrypt.hashSync(req.body.password, 8);
        // const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
        // (auto-gen a salt and hash): Store hash in your password DB.

        const newUser = await User.create( //es asincrona en este punto porque es cuando accede a la bd //.create es un metodo de sequelize
            { //los mismos campos que en el model // la entrada es por body 
                name: req.body.name,
                email: req.body.email,
                password: newPassword,
                role_id: 1
            }
        )
        return res.send (newUser);


        
    }
    catch (error) {
        return res.send ('Something went wrong creating user ' + error.message)
    }

}
module.exports = authController; // lo exporto para poder acceder a el desde cualquier archivo 