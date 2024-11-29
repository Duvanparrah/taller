'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('miblocks',
      [{
        titulo:"miprimerblock",
        descripcion: "Block para saber si hice un block",  
        createdAt: new Date,
        updatedAt: new Date()
      },
      {
        titulo:"Holamibro",
        descripcion: "Block para saber si hice un block",  
        createdAt: new Date,
        updatedAt: new Date()
      },
      
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('miblocks', null, {});
     
  }
};
