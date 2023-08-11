require('dotenv').config();
import crypto from "crypto";


const algorithm = "aes-256-cbc";
const secretKey = process.env.CRYPTO_SECRET ; // Replace with your actual secret password



// Function to generate a random IV (Initialization Vector)
function generateIV() {
  return crypto.randomBytes(16);
}

interface EncryptedData {
  iv: string;
  encryptedData: string;
}


export function encrypt(text: string): EncryptedData {
  const iv = generateIV();
  const key = crypto.pbkdf2Sync(secretKey, iv, 100000, 32, "sha256");

  const cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}


export function decrypt(data: { iv: string; encryptedData: string }): string {
  const ivBuffer = Buffer.from(data.iv, "hex");
  const encryptedDataBuffer = Buffer.from(data.encryptedData, "hex");

  const key = crypto.pbkdf2Sync(secretKey, ivBuffer, 100000, 32, "sha256");
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), ivBuffer);

  let decrypted = decipher.update(encryptedDataBuffer);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}

