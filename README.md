1. Inicio del proyecto, repositorio y proyecto de git : `git init`

2. LEVANTAR EL SERVIDOR
- `node -v` > para saber si esta instalado
- `npm` > para ejecutarlo

Empezamos:
- `npm init -y`> inicia todo en yes(-y) // genera el package.json
- instalamos las dependencias que vamos a necesitar: `npm i nodemon express`> para el desarrollo de la API
- añadir scripts en package.json `"dev": "nodemon index.js"`> script de desarrollo; `"start": "node index.js"`> script de produccion
- crear `.gitignore` y meter `/node_modules` 
- crear `index.js`
- desde index.js > importar express desde node_modules, en su README esta el codigo 
- añadir el puerto `const PORT = ` 
- añadir en el .listen, la funcion flecha para el console.log y asi saber si se levanta el servidor.
- `npm run dev`> para levantar el servidor 
- si quiero tirar abajo el servidor `ctrl + C`

3. PRIMER ENPOINT (en el index.js)
- Lo he copiado del README de express, lo puedo modificar por `'/health'`
- levanto el servidor `npm run dev`
- Ya puedo probar en postman si funciona

4. EMPEZAMOS BD 
- docker funcionando 
- abro mysql workbench
- boton der > new schema > la creo y la selecciono
- instalo dependencias > `npm i sequelize sequelize-cli mysql2`
- inicio sequelize > `sequelize init` > crea las carpetas models, migrations, seeders
- en el archivo config.json modifico las propiedades del objeto dev y añado el puerto
de mi docker
- creo el archivo `db.js` con el codigo copiado
- añadir en el index el requerimiento al archivo `./db`
- y hacer la funcion promesa con db `(.then, .catch)`

5. CREACION DE MODELOS/ MIGRACIONES Y SEEDERS
- crear un nuevo modelo > `npx sequelize-cli model:generate --name User --attributes name:string,surname:string,email:string`
- modificar datos en el model si es oportuno y en la migracion (generada automáticamente)
- migrar a la base de datos `npx sequelize-cli db:migrate` (no es necesario levantar el servidor para la mmigracion)
- creamos los seeders `npx sequelize-cli seed:generate --name roleSeeder`
- HELP! `npx sequelize-cli --help`> aparecen todos los comandos de sequelize-cli
- para ejecutar el seeder > `npx sequelize-cli db:seed:all`

6. ENRUTAR
- Desde index requerir el router `const router = require('./router');` y registrarlo en express `app use(router);`
- crear archivo `router.js`
- importar y exportar router `const router = require('express').Router();` y `module.exports = router;`
- se crearan las rutas de la url a las views del proyecto (?)

- Controladores > crear carpeta `controllers`
· `app.use(express.json());` en index, para poder interpretar lo que entra por body
· añado la logica a los controllers. Se definen métodos/funciones que se encargan de manipular los datos y la lógica relacionada con un recurso. 
· Comprobar en postman que va funcionando

Cifrado de contraseñas: bcrypt `npm i bcrypt`
- importar la biblioteca en el controller de la vista donde la voy a necesitar`const bcrypt = require('bcrypt');`

- Vistas > crear carpeta `views`
· Capa de presentación de la aplicación web.








