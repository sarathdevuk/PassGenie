"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
require('dotenv').config();
const crypto_1 = __importDefault(require("crypto"));
const algorithm = "aes-256-cbc";
const secretKey = process.env.CRYPTO_SECRET; // Replace with your actual secret password
// Function to generate a random IV (Initialization Vector)
function generateIV() {
    return crypto_1.default.randomBytes(16);
}
function encrypt(text) {
    const iv = generateIV();
    const key = crypto_1.default.pbkdf2Sync(secretKey, iv, 100000, 32, "sha256");
    const cipher = crypto_1.default.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}
exports.encrypt = encrypt;
function decrypt(data) {
    const ivBuffer = Buffer.from(data.iv, "hex");
    const encryptedDataBuffer = Buffer.from(data.encryptedData, "hex");
    const key = crypto_1.default.pbkdf2Sync(secretKey, ivBuffer, 100000, 32, "sha256");
    const decipher = crypto_1.default.createDecipheriv(algorithm, Buffer.from(key), ivBuffer);
    let decrypted = decipher.update(encryptedDataBuffer);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
exports.decrypt = decrypt;
//# sourceMappingURL=encryptDecrypt.js.map