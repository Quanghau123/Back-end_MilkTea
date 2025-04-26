'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync('123456', salt);

    await queryInterface.bulkInsert('Users', [
      {
        UserName: 'Admin',
        UserPassword: hashPassword,
        Email: 'admin@gmail.com',
        Phone: '0123456789',
        Role: 'admin',
        Addresss: "123 Nguyen Van Bao, Go Vap, Ho Chi Minh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserName: 'Quang Hau',
        UserPassword: hashPassword,
        Email: 'quanghau@gmail.com',
        Phone: '0987654321',
        Role: 'user',
        Addresss: "456 Le Thi Hong, Go Vap, Ho Chi Minh",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        UserName: 'De Vuong',
        UserPassword: hashPassword,
        Email: 'devuong@gmail.com',
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
