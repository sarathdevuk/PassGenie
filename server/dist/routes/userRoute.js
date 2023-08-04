"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send('Hello useroruter is working');
});
router.post("/register", userController_1.register);
router.post("/login", userController_1.doLogin);
exports.default = router;
//# sourceMappingURL=userRoute.js.map