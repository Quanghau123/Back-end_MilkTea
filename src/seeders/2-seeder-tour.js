'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tours', [
      {
        TourName: 'Ha Long Bay Adventure',
        CategoryName: 'Nature',
        TourLocation: 'Ha Long',
        TourTime: 3,
        TourPrice: 1000000,
        TourDifficulty: 'Easy',
        TourMinAge: 12,
        DescribeTour: 'A wonderful trip to Ha Long Bay.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        TourName: 'Phong Nha Cave',
        CategoryName: 'Nature',
        TourLocation: 'Quang Binh',
        TourTime: 5,
        TourPrice: 2000000,
        TourDifficulty: 'Medium',
        TourMinAge: 20,
        DescribeTour: 'A wonderful trip to Quang Binh.',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tours', null, {});
  }
};
