"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = exports.verifyOtp = exports.sendOtp = exports.doLogin = exports.register = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userModel_1 = __importDefault(require("../models/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const errors_1 = __importDefault(require("../utils/errors"));
const jwt = require("../utils/jwt");
const { sendVerificationCode } = require("../utils/sendOtp");
exports.register = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    // checking the user exist 
    if (!email || !password) {
        throw new errors_1.default(400, "All fields required");
    }
    const userExist = yield userModel_1.default.findOne({ email });
    if (userExist)
        throw new errors_1.default(409, "User already exists");
    // hashing the password 
    const hashPass = yield bcrypt_1.default.hash(password, 8);
    if (!hashPass)
        throw new Error("password hashing failed");
    const user = new userModel_1.default({
        email: email,
        password: hashPass,
    });
    yield user.save();
    res.json({ success: true });
}));
// User login 
exports.doLogin = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body, "login route");
    const { email, password } = req.body;
    // checking the input
    if (!email || !password)
        throw new errors_1.default(400, "All fields required");
    // checking the user Exist 
    const userExist = yield userModel_1.default.findOne({ email: email });
    if (!userExist)
        throw new errors_1.default(400, "invalid email or password");
    // verifying the password 
    const match = yield bcrypt_1.default.compare(password, userExist.password);
    if (!match)
        throw new errors_1.default(400, "Invalid email or password ");
    const token = jwt.createToken(userExist._id);
    res.json({
        success: true,
        token,
    });
}));
exports.sendOtp = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    if (!email)
        throw new errors_1.default(400, "All fields are mandatory");
    let user = yield userModel_1.default.findOne({ email });
    if (user) {
        sendVerificationCode(email)
            .then((response) => __awaiter(void 0, void 0, void 0, function* () {
            let setOtp = yield userModel_1.default.updateOne({ email: email }, { $set: { otp: response.otp } });
            res.json({ status: true, email, message: "OTP Send Successfully" });
        })).catch((error) => {
            res.status(404).json({ status: false, message: "OTP no send" });
        });
    }
    else {
        res.json({ status: false, message: "User not found" });
    }
}));
exports.verifyOtp = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, otp } = req.body;
    if (!email || !otp)
        throw new errors_1.default(400, " All Fields required ");
    let user = yield userModel_1.default.findOne({ email: email });
    if (user) {
        if (otp == user.otp) {
            res.json({ verify: true });
        }
        else {
            res.status(404).json({ status: false, message: "OTP does not match" });
        }
    }
    else {
        res.status(404).json({ status: false, message: "User not found" });
    }
}));
exports.updatePassword = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { newPassword, email } = req.body;
    if (!newPassword)
        throw new errors_1.default(400, "all fields required");
    let user = yield userModel_1.default.findOne({ email: email });
    if (user) {
        const hashPass = yield bcrypt_1.default.hash(newPassword, 8);
        if (!hashPass)
            throw new Error("password hashing failed");
        let updatedPassword = yield userModel_1.default.updateOne({ email: email }, { $set: { password: hashPass } });
    }
    else {
        res.status(404).json({ status: false, message: "User Not found" });
    }
}));
//# sourceMappingURL=userController.js.map