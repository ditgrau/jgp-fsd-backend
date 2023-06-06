//los numeros del nombre de estos archivos representan fecha y hora de creacion (timestamp)
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // utilizo return si quiero devolver una promesa, await si quiero que el codigo espere a la insercion antes de continuar
    return queryInterface.bulkInsert('Roles', [
    // bulkInsert> insercion en masa
    // primer argumento: el nombre de la tabla en la bd, segundo: array de objetos que añadir
    /* aqui estoy definiendo el array que está en el argumento de la funcion queryInterface.bulkInsert, 
    si quisiese que ese array se crease con funciones js, deberia generar primero el array y luego llamar a la funcion (async up/ funcion generadora / await query...) */
      {
        id: 1,
        name: 'user',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'super_admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
