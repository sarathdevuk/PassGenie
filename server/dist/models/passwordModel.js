"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const passwordSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User"
    },
    password: {
        type: Object,
        required: true,
    },
    appName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true
    }
});
const passwordModel = mongoose_1.default.model("Password", passwordSchema);
exports.default = passwordModel;
//# sourceMappingURL=passwordModel.js.map