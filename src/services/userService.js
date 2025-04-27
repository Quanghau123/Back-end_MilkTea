import db from "@models/index.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { raw } from "mysql2";
import nodemailer from "nodemailer";
require('dotenv').config();

const salt = bcrypt.genSaltSync(10);
const secretKey = process.env.SECRET_KEY;
const tokenExpiry = process.env.TOKEN_EXPIRY;

const hashUserPassword = async (password) => {
    if (!password) {
        throw new Error("Mật khẩu không được để trống!");
    }
    const saltRounds = 10;
    return bcrypt.hashSync(password, saltRounds);
};

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserEmail(email);

            if (!isExist) {
                return resolve({ errCode: 1, errMessage: "Email does not exist. Please try another email!" });
            }

            let user = await db.User.findOne({
                attributes: ['Email', 'Role', 'UserPassword', 'UserName', 'Phone', 'Address', 'UserId'],
                where: { Email: email },
                raw: true
            });

            if (!user) {
                return resolve({ errCode: 2, errMessage: "User not found" });
            }

            let check = bcrypt.compareSync(password, user.UserPassword);
            if (!check) {
                return resolve({ errCode: 3, errMessage: "Wrong password" });
            }

            const token = jwt.sign(
                { email: user.Email, role: user.Role },
                secretKey,
                { expiresIn: tokenExpiry }
            );

            delete user.UserPassword;
            userData.errCode = 0;
            userData.errMessage = 'OK';
            userData.user = user;
            userData.token = token;

            resolve(userData);
        } catch (e) {
            reject(e);
        }
    });
};

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { Email: email } });
            resolve(!!user);
        } catch (e) {
            reject(e);
        }
    });
};

let getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                attributes: { exclude: ['UserPassword'] }
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    });
};

let getUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { UserId: userId },
                attributes: { exclude: ['UserPassword'] }
            });
            resolve(user);
        } catch (e) {
            reject(e);
        }
    });
};

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkUserEmail(data.Email);
            if (check) {
                resolve({
                    errCode: 1,
                    errMessage: 'Email is already in use. Please try another email!'
                });
            } else {
                let hashPassword = await hashUserPassword(data.UserPassword);
                await db.User.create({
                    UserName: data.UserName,
                    UserPassword: hashPassword,
                    Email: data.Email,
                    Phone: data.Phone,
                    Role: data.Role || 'user',
                    Address: data.Address,
                });
                resolve({
                    errCode: 0,
                    message: 'User created successfully!'
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.UserId) {
                return resolve({
                    errCode: 2,
                    errMessage: "Missing required parameter"
                });
            }
            let user = await db.User.findOne({
                where: { UserId: data.UserId },
                raw: false,
            });
            if (user) {
                user.UserName = data.UserName;
                user.Email = data.Email;
                user.Phone = data.Phone;
                user.Address = data.Address;
                await user.save();
                resolve({
                    errCode: 0,
                    message: "User updated successfully!"
                });
            } else {
                resolve({
                    errCode: 1,
                    message: "User not found!"
                });
            }
        } catch (e) {
            reject(e);
        }
    });
};

let deleteUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { UserId: userId } });
            if (!user) {
                return resolve({
                    errCode: 2,
                    errMessage: "User does not exist"
                });
            }
            await db.User.destroy({ where: { UserId: userId } });
            resolve({
                errCode: 0,
                message: "User deleted successfully!"
            });
        } catch (e) {
            reject(e);
        }
    });
};

let sendResetPasswordEmail = async (email) => {
    try {
        let testAccount = await nodemailer.createTestAccount();

        // Cấu hình SMTP dùng Ethereal
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass
            }
        });

        let resetLink = `http://localhost:3000/reset-password?token=dummy_token`;

        let info = await transporter.sendMail({
            from: '"Your App" <no-reply@example.com>',
            to: email,
            subject: "Password Reset Request",
            text: `Click vào link sau để đặt lại mật khẩu: ${resetLink}`,
            html: `<p>Bạn đã yêu cầu đặt lại mật khẩu. Nhấn vào <a href="${resetLink}">đây</a> để tiếp tục.</p>`
        });

        console.log("Xem mail tại:", nodemailer.getTestMessageUrl(info));

        return { errCode: 0, message: "Email đặt lại mật khẩu đã được gửi!", previewURL: nodemailer.getTestMessageUrl(info) };

    } catch (error) {
        console.error("Lỗi chi tiết:", error);
        return { errCode: 2, errMessage: "Lỗi hệ thống!", error: error.message };
    }
};

const resetPassword = async (token, newPassword) => {
    try {
        let decoded = jwt.verify(token, secretKey);

        let user = await db.User.findOne({
            where: { Email: decoded.email },
            raw: false
        });

        if (!user) {
            console.log("Không tìm thấy user trong DB!");
            return { errCode: 1, errMessage: "User does not exist!" };
        }

        if (!(user instanceof db.User)) {
            return { errCode: 2, errMessage: "Lỗi hệ thống!" };
        }

        user.UserPassword = await hashUserPassword(newPassword);
        await user.save();
        console.log("Mật khẩu đã cập nhật!");

        return { errCode: 0, message: "Password updated successfully!" };
    } catch (error) {
        console.error("Lỗi hệ thống:", error);
        return { errCode: 2, errMessage: "Lỗi hệ thống!" };
    }
};

export default {
    handleUserLogin,
    getAllUsers,
    getUserById,
    createNewUser,
    updateUserData,
    deleteUser,
    sendResetPasswordEmail,
    resetPassword,
};
