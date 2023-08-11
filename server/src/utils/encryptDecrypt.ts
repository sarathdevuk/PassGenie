import crypto from "crypto";

const algorithm = "aes-256-cbc";
const password = "your-secret-password"; // Replace with your actual secret password
const salt = crypto.randomBytes(16); // Generate a random salt

// Derive a key using PBKDF2
const key = crypto.pbkdf2Sync(password, salt, 100000, 32, "sha256");

const iv = crypto.randomBytes(16);

interface EncryptedData {
  iv: string;
  encryptedData: string;

}

export function encrypt(text: string): EncryptedData {
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}
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

export function decrypt(data: { iv: string; encryptedData: string }): string {
  const ivBuffer = Buffer.from(data.iv, "hex");
  const encryptedDataBuffer = Buffer.from(data.encryptedData, "hex");

  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), ivBuffer);
  let decrypted = decipher.update(encryptedDataBuffer);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
}
