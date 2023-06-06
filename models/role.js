'use strict';
const { Model } = require('sequelize'); //desestructuración de objetos. 
//Importa la propiedad Model del objeto importado desde sequelize 

module.exports = (sequelize, DataTypes) => {
  // Al utilizar sequelize y datatypes se genera Roles a partir de la clase Model proporcionada por sequelize
  class Role extends Model {
    /* se define la clase Role que hereda de la clase Model una serie de métodos y funcionalidades para interactuar con la base de datos.
    lo que incluye operaciones CRUD (Crear, Leer, Actualizar y Eliminar) y consultas avanzadas. */
    
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { /* método estático, para definir asociaciones
      · "uno a uno" (hasOne y belongsTo), "uno a muchos" (hasMany y belongsTo) o "muchos a muchos" (belongsToMany).
      · (models) es un objeto que contiene todos los modelos definidos (models.Role)
      · Ejemplo :  
      static associate(models) {
      Role.hasMany(models.User);
      }*/

      // define association here
    }
  }
  Role.init( //método proporcionado por Sequelize
    // dos argumentos que son dos objetos ( {}, {} ) 
    // primer objeto: define las propiedades del modelo
    { 
    name: DataTypes.STRING
    }, 
    // segundo objeto: opciones de configuración
    {
    sequelize, //instancia para comunicarse con la BD
    modelName: 'Role',
    }
    
  );
  return Role;
};