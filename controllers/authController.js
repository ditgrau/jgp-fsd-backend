const { User } = require('../models'); //desestructuracion
//propiedad User del objeto exportado por models
const bcrypt = require('bcrypt'); //importar la biblioteca
const authController = {}; // objeto vacio, para definir metodos relacionados con la autenticacion
const jwt = require('jsonwebtoken'); //requiero la libreria para generar el token 



authController.register = async(req, res) => { //es una funcion flecha/asincrona porque se relaciona con la BD
    // req, res > funciones para manejar rutas y controladores (request/response)
    try {
        //funciones try y catch, para manejar errores y excepciones
        // si se produce una excepcion en try, pasa a catch
        if (req.body.password.length < 4) {
            return res.send ('Password must be longer than 4 characters');
        }

        const newPassword = bcrypt.hashSync(req.body.password, 8); //este req.body.password iria en el objeto de newUser, 
        // pero al encriptarla le asignamos una variable y esa es la que metemos en el objeto
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

authController.login = async(req, res) => {
    try {
        const {email, password} = req.body; //desestructuracion: cojo el email y password del body, 
        //como propiedades del objeto body, que viene en JSON (fijate en postman)

        const user = await User.findOne( //asincrona porque busca en la BD
            {
                where: {
                    email: email //Match entre el email de la BD y el del body, la variable de {}
                }
            }
        ); //guarda la coincidencia en la variable User

        if (!user) { //sino coincide
            return res.json( //devuelve este json
                {
                    success: true, //true porque se cumple la condicion del if 
                    message: "Wrong credentials" //mensaje que res.
                }
            )
        }

        //Validamos password
        const isMatch = bcrypt.compareSync(password, user.password); //.compareSync es un metodo de bcrypt
        // compara la contraseña introducida por body (sin cifrar), con la que hemos guardado al hacer el registro, que si que esta cifrada
        // cuando las variables empiezan por is o has, devuelven valores buleanos, por convencion

        if (!isMatch) { //si no coincide: devuelve error, 
            return res.json(
                {
                    success: true,
                    message: "Wrong credentials"
                }
            )
        }

        // si las contraseñas coinciden, tienen acceso y reciben el token 
        const token = jwt.sign(  //const token = jwt.sign({ foo: 'bar' }, 'shhhhh');
            { // primer argumento: un objeto con la informacion que va a contener el token 
                userId: user.id,
                roleId: user.role_id,
                email: user.email
            },
            'secreto' // segundo argumento: la palabra secreta
        );  

        return res.json( // verificado y asignado el token, res. logeado
            {
                success: true,
                message: "User Logged",
                token: token
            }
        );


    }
    catch (error){
        return res.status(500).json( //devuelve un error de servidor en formato json 
            { //un objeto con tres propiedades
                success: false,
                message: "user cant be logged",
                error: error.message
            }  
        )
    }
}


module.exports = authController; // lo exporto para poder acceder a el desde cualquier archivo 