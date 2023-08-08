var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const jwt = require("jsonwebtoken");
const AppError = require("../utils/errors");
const authChecker = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    try {
        const { Authorization } = req.headers;
        if (!Authorization) {
            throw new AppError(401, "Authorization token required");
        }
        const token = Authorization.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
            if (err) {
                res.json({ error: "Invalid Authorization token" });
            }
            req.userId = decodedToken.id;
            next();
        });
    }
    catch (error) {
        next(error);
    }
});
module.exports = authChecker;
//# sourceMappingURL=authHandler.js.map