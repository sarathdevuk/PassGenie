"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authHandler_1 = __importDefault(require("../middleware/authHandler"));
const userController_1 = require("../controller/userController");
const passwordController_1 = require("../controller/passwordController");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send('Hello updated  is working');
});
router.get("/auth", userController_1.checkLogin);
router.post("/register", userController_1.register);
router.post("/login", userController_1.doLogin);
// forgot psss
router.post("/send-otp", userController_1.sendOtp);
router.post("/verify-otp", userController_1.verifyOtp);
router.post('/update-password', userController_1.updatePassword);
router.post("/password/add", authHandler_1.default, passwordController_1.addPassword);
router.get("/passwords", authHandler_1.default, passwordController_1.getPassword);
router.patch("/password/:id", authHandler_1.default, passwordController_1.deletePassword);
exports.default = router;
//# sourceMappingURL=userRoute.js.map