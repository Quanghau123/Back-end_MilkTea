'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      // Trà Sữa - CategoryId: 1
      {
        ProductName: 'Trà Sữa Truyền Thống',
        Price: 30000,
        Description: 'Trà sữa truyền thống với hương vị đậm đà',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard1.jpeg',
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Trà Sữa Trân Châu Đen',
        Price: 35000,
        Description: 'Trà sữa kèm trân châu đen dai ngon',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard2.jpeg',
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Trà Sữa Matcha',
        Price: 40000,
        Description: 'Hương vị matcha thơm mát',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard3.jpeg',
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Trà Sữa Socola',
        Price: 38000,
        Description: 'Vị socola ngọt ngào quyến rũ',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard4.jpeg',
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Trà Sữa Khoai Môn',
        Price: 42000,
        Description: 'Hương khoai môn thơm béo',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard5.jpeg',
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Trà Sữa Caramel',
        Price: 39000,
        Description: 'Caramel ngọt ngào kết hợp trà sữa',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard6.jpeg',
        CategoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Trà Trái Cây - CategoryId: 2
      {
        ProductName: 'Trà Đào Cam Sả',
        Price: 35000,
        Description: 'Vị đào kết hợp cam sả thơm mát',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard7.jpeg',
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Trà Vải Nhài',
        Price: 36000,
        Description: 'Trà hoa nhài kết hợp vải tươi mát',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard8.jpeg',
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Trà Xoài Chanh Dây',
        Price: 37000,
        Description: 'Xoài tươi kết hợp vị chanh dây chua ngọt',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard9.jpeg',
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Trà Dâu Tằm',
        Price: 34000,
        Description: 'Hương vị dâu tằm thơm ngon khó cưỡng',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard10.jpeg',
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Trà Kiwi Bạc Hà',
        Price: 36000,
        Description: 'Kiwi kết hợp bạc hà mát lạnh',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard11.jpeg',
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Trà Táo Quế',
        Price: 38000,
        Description: 'Táo thanh mát hoà quyện vị quế',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard12.jpeg',
        CategoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Thức Uống Đặc Biệt - CategoryId: 3
      {
        ProductName: 'Sữa Tươi Trân Châu Đường Đen',
        Price: 45000,
        Description: 'Sữa tươi kết hợp trân châu đường đen thơm ngon',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard13.jpeg',
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Kem Cheese Hồng Trà',
        Price: 43000,
        Description: 'Hồng trà đậm vị kết hợp kem cheese béo ngậy',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard14.jpeg',
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Trà Gạo Rang Macchiato',
        Price: 44000,
        Description: 'Trà gạo rang với lớp macchiato mặn ngọt',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard15.jpeg',
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Soda Việt Quất',
        Price: 32000,
        Description: 'Soda tươi mát hương việt quất',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard16.jpeg',
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Matcha Đá Xay',
        Price: 47000,
        Description: 'Matcha xay nhuyễn cùng đá, mát lạnh sảng khoái',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard17.jpeg',
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ProductName: 'Cacao Kem Cheese',
        Price: 46000,
        Description: 'Cacao nguyên chất kèm kem cheese béo thơm',
        ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/tree/master/src/assets/TeaCard/TeaCard18.jpeg',
        CategoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
