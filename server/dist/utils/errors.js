"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define a custom error class 'AppError' that extends the built-in 'Error' class
class AppError extends Error {
    // Constructor function for the 'AppError' class
    constructor(statusCode, message) {
        super(message); // Call the parent constructor (Error) with the provided message
        // Set the prototype of the current instance to be an instance of 'AppError'
        Object.setPrototypeOf(this, new.target.prototype);
        this.statusCode = statusCode;
    }
}
exports.default = AppError;
//# sourceMappingURL=errors.js.map