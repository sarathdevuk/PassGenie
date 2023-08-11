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
exports.deletePassword = exports.getPassword = exports.addPassword = void 0;
const passwordModel_1 = __importDefault(require("../models/passwordModel"));
const errors_1 = __importDefault(require("../utils/errors"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const encryptDecrypt_1 = require("../utils/encryptDecrypt");
exports.addPassword = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { appName, password, userName } = req.body;
    if (!appName || !password || !userName) {
        throw new errors_1.default(401, "All fields are mandatory ");
    }
    let passwordExist = yield passwordModel_1.default.findOne({ userId: req.userId, appName: appName, userName });
    if (passwordExist) {
        throw new errors_1.default(404, "Password already exist ");
    }
    console.log(password, " password");
    const encryptedPassword = (0, encryptDecrypt_1.encrypt)(password);
    console.log(encryptedPassword, " encryptDecrypt");
    const passwordPresent = yield passwordModel_1.default.findOne({ 'password.encryptedData': encryptedPassword.encryptedData });
    if (passwordPresent) {
        throw new errors_1.default(404, "Not a unique password");
    }
    const newPassword = yield passwordModel_1.default.create({ appName, userName, userId: req.userId, password: encryptedPassword });
    if (!newPassword) {
        throw new errors_1.default(400, "Password Creation Failed");
    }
    return res.status(200).json({ success: true, message: "Success" });
}));
exports.getPassword = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let passwords = yield passwordModel_1.default.find({ userId: req.userId });
        let decryptedPasswords = passwords.map((item) => {
            return { appName: item.appName, userName: item.userName, _id: item._id, password: (0, encryptDecrypt_1.decrypt)({ iv: item.password.iv, encryptedData: item.password.encryptedData }) };
        });
        return res.status(200).json({ success: true, message: "Success", passwords: decryptedPasswords });
    }
    catch (error) {
        throw new errors_1.default(500, "Something went wrong");
    }
}));
exports.deletePassword = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.params.id)
            throw new errors_1.default(400, "all Fields Are mandatory");
        const deletePass = yield passwordModel_1.default.deleteOne({ userId: req.userId, _id: req.params.id });
        return res.json({ success: true, message: "Successfully Deleted" });
    }
    catch (error) {
        throw new errors_1.default(500, "Something went wrong ");
    }
}));
//# sourceMappingURL=passwordController.js.map