import asyncHandler from "express-async-handler"
import UserModel from "../models/userModel";
import bcrypt from 'bcrypt'
import AppError from "../utils/errors";
// import jwt from "../utils/jwt";



export const register =  asyncHandler(async (req ,res) => {
  const {email , password } : {email : string; password : string } = req.body ;

// checking the user exist 
if(!email || !password) {
   throw new AppError(400 , "All fields required"); 
}

const userExist = await UserModel.findOne({email}) ;
if(userExist) throw new AppError(409 , "User already exists")

// hashing the password 
const hashPass = await bcrypt.hash(password , 8 ) ;
if(!hashPass) throw new Error( "password hashing failed");

const user = new UserModel({
  email : email ,
  password : hashPass ,
})

await user.save() ;
res.json({ success : true });

})