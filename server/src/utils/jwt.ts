const jwt = require('jsonwebtoken')

const maxAge = 1 * 24 * 60 *60 ; 

const createToken = (id:string) => {
  return jwt.sign({id} , process.env.SECRET , {expiresIn : maxAge})
}

module.exports = { createToken } ;

