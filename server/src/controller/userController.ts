import asyncHandler from "express-async-handler"
import UserModel from "../models/userModel";
import bcrypt from 'bcrypt'
import AppError from "../utils/errors";
import { ResponseType } from '../interface/interface'


const jwt = require("../utils/jwt")
const {sendVerificationCode } = require("../utils/sendOtp")



export const register =  asyncHandler(async (req ,res) => {
  const {email , password , name } : {email : string; password : string , name:string } = req.body ;

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
  name: name,
  email : email ,
  password : hashPass ,
})

await user.save() ;
res.json({ success : true });

})

// User login 

export const doLogin = asyncHandler(async(req , res) => {
  const {email , password} = req.body;

  // checking the input
  if(!email || !password) throw new AppError(400 , "All fields required") ;

  // checking the user Exist 
  const userExist = await UserModel.findOne({ email: email}) ;
  if(!userExist) throw new AppError(400 , "invalid email or password") ;

  // verifying the password 
  const match = await bcrypt.compare(password, userExist.password)
  if(!match) throw new AppError(400 , "Invalid email or password ");
  
  const token = jwt.createToken(userExist._id) ;

  res.json({
    success: true,
    token,
  });

})

export const sendOtp = asyncHandler(async(req , res) => {
  const {email} :{email:string} = req.body

  if(!email) throw new AppError(400 , "All fields are mandatory") 
  let user  = await UserModel.findOne({email})

  if(user) {
    sendVerificationCode(email)
      .then(async (response: ResponseType ) => {
        let setOtp = await UserModel.updateOne(
          { email: email },
          { $set: { otp: response.otp } }
        );
        res.json({ status : true , email , message :"OTP Send Successfully"})
      }).catch((error : object) => {
        res.status(404).json({ status : false, message :"OTP no send"})
      });
  }else{
    res.json({ status : false, message :"User not found"})
  }
})






