'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync('123456', salt);

    await queryInterface.bulkInsert('Users', [
      {
        UserName: 'admin',
        UserPassword: hashPassword,
        Email: 'admin@gmail.com',
        Phone: '0123456789',
        Role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserName: 'user1',
        UserPassword: hashPassword,
        Email: 'user1@gmail.com',
        Phone: '0987654321',
        Role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserName: 'user2',
        UserPassword: hashPassword,
        Email: 'user2@gmail.com',
        Phone: '0989855521',
        Role: 'user',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
