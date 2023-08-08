const jwt = require("jsonwebtoken") ;
const AppError = require("../utils/errors") ;

const authChecker = async (req , res , next) => {
  try {
    const { Authorization } = req.headers ; 
    if(!Authorization) {
      throw new AppError(401, "Authorization token required");
    }
    const token = Authorization.split(" ")[1];
    jwt.verify(token , process.env.JWT_SECRET_KEY , (err , decodedToken) => {
      if(err) {
        res.json({ error : "Invalid Authorization token"})
      }
      req.userId = decodedToken.id ;
      next();

    })

  } catch (error) {
    next(error)
  }
}

module.exports = authChecker ; 