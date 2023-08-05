"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userShema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: [true, "Name cannot be empty"]
    },
    password: {
        type: String,
        required: [true, "password is Required"],
    },
    otp: {
        type: String,
    }
});
const UserModel = mongoose_1.default.model("User", userShema);
exports.default = UserModel;
//# sourceMappingURL=userModel.js.map