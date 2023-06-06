'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // siempre que interactuemos con la BD la funcion sera async/await
  async up(queryInterface, Sequelize) {
    // up: "subir" o "aplicar" los cambios a la base de datos. 
    //metodo createTable: crea la tabla en la bd a partir del model creado en sequelize
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        unique: true
      },
      createdAt: {
        allowNull: true, //esto lo he cambiado para que sea menos tedioso, pero no tiene porque cambiarse
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true, //esto lo he cambiado para que sea menos tedioso, pero no tiene porque cambiarse
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    //revertir los cambios realizados por una migración específica.
    await queryInterface.dropTable('Roles');
  }
};