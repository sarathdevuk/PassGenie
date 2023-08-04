const jwt = require('jsonwebtoken');
const maxAge = 1 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET_KEY, { expiresIn: maxAge });
};
module.exports = { createToken };
//# sourceMappingURL=jwt.js.map