'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Payments', [
      {
        BookTourId: 3,
        UserId: 7,
        PaymentMethod: 'Momo',
        TransactionId: 'TXN123456',
        Amount: 1000000,
        PaymentStatus: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        BookTourId: 4,
        UserId: 9,
        PaymentMethod: 'Momo',
        TransactionId: 'TXN123456',
        Amount: 2000000,
        PaymentStatus: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Payments', null, {});
  }
};
