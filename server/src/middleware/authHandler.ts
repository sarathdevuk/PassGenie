const jwt = require("jsonwebtoken") ;
import AppError from "../utils/errors";

const authChecker = async (req , res , next) => {
  try {
    
    const { authorization } = req.headers ; 
    if(!authorization) {
      throw new AppError(401, "Authorization token required");
    }
    const token = authorization.split(" ")[1];
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

export default authChecker ; 