'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Categories', [
            {
                CategoryName: 'Trà Sữa',
                ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/master/src/assets/TeaCard/TeaCard1.jpeg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                CategoryName: 'Trà Trái Cây',
                ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/master/src/assets/TeaCard/TeaCard7.jpeg',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                CategoryName: 'Thức Uống Đặc Biệt',
                ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/master/src/assets/TeaCard/TeaCard13.jpeg',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Categories', null, {});
    }
};
