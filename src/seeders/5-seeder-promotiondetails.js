'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('PromotionDetails', [
            {
                PromotionId: 1,
                DiscountType: 'Buy 1 Get 1',
                Note: 'Áp dụng cho size lớn, tặng size nhỏ.',
                Content: 'Chào hè sôi động cùng chương trình "Mua 1 Tặng 1"! Khi mua bất kỳ ly trà sữa size lớn nào trong menu, bạn sẽ được tặng ngay 1 ly trà sữa size nhỏ miễn phí. Chương trình áp dụng cho tất cả các chi nhánh trên toàn quốc. Hãy nhanh tay đến cửa hàng gần nhất để thưởng thức trà sữa thơm ngon, mát lạnh và nhận thêm ly trà sữa miễn phí dành tặng riêng cho bạn! Lưu ý số lượng có hạn mỗi ngày, ưu đãi không áp dụng chung với các khuyến mãi khác.'
            },
            {
                PromotionId: 2,
                DiscountType: 'Percentage',
                Note: 'Giảm giá nhân ngày Quốc tế thiếu nhi.',
                Content: 'Nhân dịp Quốc tế thiếu nhi 1/6, chúng tôi dành tặng ưu đãi đặc biệt giảm 20% cho toàn bộ menu trà sữa, đá xay và các loại topping. Đây là cơ hội tuyệt vời để bạn cùng gia đình và bạn bè thưởng thức những ly trà sữa mát lạnh thơm ngon với mức giá vô cùng hấp dẫn. Chương trình kéo dài chỉ trong 7 ngày, từ 1/6 đến 7/6, nhanh tay đến cửa hàng để tận hưởng không khí lễ hội ngập tràn niềm vui và những phần quà bất ngờ nhé!'
            },
            {
                PromotionId: 3,
                DiscountType: 'Combo',
                Note: 'Combo giá siêu hời.',
                Content: 'Đừng bỏ lỡ chương trình combo cực kỳ hấp dẫn: chỉ 49.000 đồng bạn đã sở hữu ngay một ly trà sữa yêu thích và một phần snack giòn ngon. Combo được thiết kế đặc biệt để bạn vừa thưởng thức trà sữa đậm vị, vừa nhâm nhi snack giòn rụm. Đây là sự kết hợp hoàn hảo cho những buổi trò chuyện, hẹn hò cùng bạn bè hoặc thời gian thư giãn sau giờ học tập, làm việc. Chương trình áp dụng cho tất cả các cửa hàng trên toàn quốc.'
            },
            {
                PromotionId: 4,
                DiscountType: 'Free Size Up',
                Note: 'Không tính thêm phí đổi size.',
                Content: 'Tháng 5 này, hãy tận hưởng chương trình "Free Size Up" siêu hấp dẫn! Khi bạn gọi bất kỳ ly trà sữa size nhỏ hoặc size vừa, bạn sẽ được nâng lên size lớn hoàn toàn miễn phí mà không cần trả thêm bất kỳ chi phí nào. Thức uống to hơn, tràn đầy hơn, niềm vui cũng lớn hơn gấp đôi! Còn chần chừ gì nữa, hãy nhanh chân ghé cửa hàng để trải nghiệm sự hào phóng này ngay hôm nay. Chương trình không áp dụng cho đơn hàng online.'
            },
            {
                PromotionId: 5,
                DiscountType: 'Membership Discount',
                Note: 'Ưu đãi chỉ dành cho Thành viên Vàng.',
                Content: 'Thành viên Vàng thân mến! Chúng tôi xin gửi tặng bạn ưu đãi đặc biệt: giảm ngay 30% cho tất cả các đơn hàng trong suốt tháng 7. Đây là lời tri ân dành cho sự đồng hành và ủng hộ tuyệt vời của bạn trong suốt thời gian qua. Chương trình áp dụng khi khách hàng đăng nhập tài khoản thành viên tại quầy hoặc khi đặt hàng online. Đừng quên kiểm tra hạng thành viên và tận hưởng những ưu đãi hấp dẫn dành riêng cho bạn nhé!'
            },
            {
                PromotionId: 6,
                DiscountType: 'Event Giveaway',
                Note: 'Áp dụng trong sự kiện Ngày hội trà sữa.',
                Content: 'Tham gia sự kiện "Ngày hội Trà Sữa" để nhận về những phần quà siêu hấp dẫn! Ngoài việc được thưởng thức trà sữa miễn phí, bạn còn có cơ hội tham gia nhiều trò chơi thú vị và trúng những phần thưởng cực kỳ giá trị. Sự kiện diễn ra duy nhất từ ngày 15/8 đến 20/8 tại các chi nhánh được chỉ định. Hãy chuẩn bị tinh thần vui chơi thả ga và mang về thật nhiều niềm vui cùng trà sữa thơm ngon chuẩn vị nhé!'
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('PromotionDetails', null, {});
    }
};
