import db from "@models/index.js";

let getAllReviews = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let reviews = await db.Review.findAll();
            resolve(reviews);
        } catch (err) {
            reject(err);
        }
    });
};

let getReviewById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let review = await db.Review.findOne({ where: { ReviewId: id } });

            if (!review) {
                return reject({ errCode: 1, errMessage: "Review not found" });
            }

            resolve(review);
        } catch (err) {
            reject(err);
        }
    });
};

let createNewReview = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Review.create(data);
            resolve({
                errCode: 0,
                message: "Review created successfully!"
            });
        } catch (err) {
            reject(err);
        }
    });
};

let updateReview = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.ReviewId) {
                return resolve({ errCode: 1, errMessage: "Missing ReviewId" });
            }

            let review = await db.Review.findOne({
                where: { ReviewId: data.ReviewId },
                raw: false
            });

            if (!review) {
                return resolve({ errCode: 2, errMessage: "Review not found" });
            }

            Object.keys(data).forEach(key => {
                if (key !== "ReviewId") review[key] = data[key];
            });

            await review.save();

            resolve({
                errCode: 0,
                message: "Review updated successfully!"
            });
        } catch (err) {
            reject(err);
        }
    });
};

let deleteReview = async (id) => {
    try {
        let review = await db.Review.findOne({ where: { ReviewId: id } });

        if (!review) {
            return { errCode: 1, errMessage: "Review not found" };
        }

        await db.Review.destroy({ where: { ReviewId: id } });

        return { errCode: 0, message: "Review deleted successfully!" };
    } catch (err) {
        return { errCode: 500, errMessage: err.message };
    }
};

export default {
    getAllReviews,
    getReviewById,
    createNewReview,
    updateReview,
    deleteReview
};
