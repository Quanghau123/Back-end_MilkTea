'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Details', [
      {
        TourId: 3,
        Des_Enjoy: 'Beautiful nature',
        Des_Included: 'Hotel, Food, Guide',
        Des_Map: 'Map URL',
        Des_Itinerary: 'Day 1: Visit caves... Day 2: Cruise...',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        TourId: 4,
        Des_Enjoy: 'Beautiful caves',
        Des_Included: 'Hotel, Food, Guide',
        Des_Map: 'Map URL',
        Des_Itinerary: 'Day 1: Visit caves... Day 2: Cruise...',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Details', null, {});
  }
};
