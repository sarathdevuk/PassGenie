"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
const crypto_1 = __importDefault(require("crypto"));
const algorithm = "aes-256-cbc";
const password = "your-secret-password"; // Replace with your actual secret password
const salt = crypto_1.default.randomBytes(16); // Generate a random salt
// Derive a key using PBKDF2
const key = crypto_1.default.pbkdf2Sync(password, salt, 100000, 32, "sha256");
const iv = crypto_1.default.randomBytes(16);
function encrypt(text) {
    let cipher = crypto_1.default.createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}
exports.encrypt = encrypt;
// export function encrypt(text: string, iv: Buffer): EncryptedData {
//   let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
//   let encrypted = cipher.update(text);
//   encrypted = Buffer.concat([encrypted, cipher.final()]);
//   return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
// }
// export function decrypt(text: EncryptedData): string {
//   let iv = Buffer.from(text.iv, "hex");
//   let encryptedText = Buffer.from(text.encryptedData, "hex");
//   let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
//   let decrypted = decipher.update(encryptedText);
//   decrypted = Buffer.concat([decrypted, decipher.final()]);
//   return decrypted.toString();
// }
function decrypt(data) {
    const ivBuffer = Buffer.from(data.iv, "hex");
    const encryptedDataBuffer = Buffer.from(data.encryptedData, "hex");
    const decipher = crypto_1.default.createDecipheriv(algorithm, Buffer.from(key), ivBuffer);
    let decrypted = decipher.update(encryptedDataBuffer);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
exports.decrypt = decrypt;
//# sourceMappingURL=encryptDecrypt.js.map