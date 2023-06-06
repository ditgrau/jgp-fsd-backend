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

6. CRUD (?)
- `app.use(express.json());` para poder interpretar lo que entra por body

Cifrado de contraseñas: bcrypt `npm i bcrypt`


7. ENRUTAR






