'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Book_Tours', [
      {
        TourId: 3,
        QuantityAdults: 2,
        QuantityChildren: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        TourId: 4,
        QuantityAdults: 10,
        QuantityChildren: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Book_Tours', null, {});
  }
};
