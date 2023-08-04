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
exports.doLogin = exports.register = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const userModel_1 = __importDefault(require("../models/userModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const errors_1 = __importDefault(require("../utils/errors"));
const jwt = require("../utils/jwt");
exports.register = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name } = req.body;
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
        name: name,
        email: email,
        password: hashPass,
    });
    yield user.save();
    res.json({ success: true });
}));
// User login 
exports.doLogin = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
    console.log("match", match);
    const token = jwt.createToken(userExist._id);
    res.json({
        success: true,
        token,
    });
}));
//# sourceMappingURL=userController.js.map