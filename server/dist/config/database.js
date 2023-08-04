"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dbconnection = () => {
    const uri = process.env.MONGOURI;
    mongoose_1.default.set("strictQuery", true);
    // Database connection 
    mongoose_1.default
        .connect(uri)
        .then(() => {
        console.log("Database Connected Successfully");
    })
        .catch((err) => {
        console.log((err));
    });
};
exports.default = dbconnection;
//# sourceMappingURL=database.js.map