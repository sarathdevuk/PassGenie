"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.send('Hello useroruter is working');
});
exports.default = router;
//# sourceMappingURL=userRoute.js.map