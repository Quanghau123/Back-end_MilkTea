'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Promotions', [
            {
                StartDate: '2025-05-01',
                EndDate: '2025-05-15',
                Title: 'Mua 1 Tặng 1 Trà Sữa',
                Scription: 'Mua bất kỳ trà sữa size lớn sẽ được tặng thêm 1 ly size nhỏ miễn phí.',
                ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/master/src/assets/Promotion/Promotion1.jpeg'
            },
            {
                StartDate: '2025-06-01',
                EndDate: '2025-06-07',
                Title: 'Giảm 20% Toàn Bộ Menu',
                Scription: 'Ưu đãi đặc biệt nhân ngày Quốc tế thiếu nhi!',
                ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/master/src/assets/Promotion/Promotion2.jpeg'
            },
            {
                StartDate: '2025-05-10',
                EndDate: '2025-05-20',
                Title: 'Combo Trà Sữa và Snack',
                Scription: 'Chỉ với 49K cho 1 trà sữa bất kỳ kèm 1 snack ngon giòn.',
                ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/master/src/assets/Promotion/Promotion3.jpeg'
            },
            {
                StartDate: '2025-05-15',
                EndDate: '2025-05-31',
                Title: 'Free Size Up',
                Scription: 'Gọi size nhỏ, uống size lớn miễn phí suốt tháng 5!',
                ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/master/src/assets/Promotion/Promotion4.jpeg'
            },
            {
                StartDate: '2025-07-01',
                EndDate: '2025-07-31',
                Title: 'Thành Viên Vàng - Giảm 30%',
                Scription: 'Thành viên Vàng được giảm ngay 30% tất cả các đơn hàng.',
                ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/master/src/assets/Promotion/Promotion5.jpeg'
            },
            {
                StartDate: '2025-08-15',
                EndDate: '2025-08-20',
                Title: 'Ngày Hội Trà Sữa',
                Scription: 'Tham gia sự kiện nhận nhiều quà tặng hấp dẫn và thưởng thức trà sữa miễn phí!',
                ImageURL: 'https://raw.githubusercontent.com/Quanghau123/Front-end_MilkTea/master/src/assets/Promotion/Promotion6.jpeg'
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Promotions', null, {});
    }
};
