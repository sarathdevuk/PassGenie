import { Request , Response } from "express";
import passwordModel from "../models/passwordModel"; 
import AppError from "../utils/errors";
import asyncHandler from "express-async-handler" ;
import {encrypt , decrypt } from "../utils/encryptDecrypt"

export const addPassword = asyncHandler(async (req ,res  ) => {

  const {appName , password , userName }: { appName : string , password : string ,userName : string } = req.body ;

  if(!appName || !password ||!userName)  {
    throw new AppError(401 , "All fields are mandatory ")
  }

  let passwordExist = await passwordModel.findOne({ userId  : req.userId , appName : appName , userName })
  if(passwordExist) {
    throw new AppError(404 , "Password already exist ")
  }

  const encryptedPassword = encrypt(password );
  
  const passwordPresent = await passwordModel.findOne({ 'password.encryptedData' : encryptedPassword.encryptedData }) 

  if(passwordPresent) {
    throw new AppError(404 , "Not a unique password") ;
  }

  const newPassword = await passwordModel.create({appName , userName, userId : req.userId ,  password: {
    iv: encryptedPassword.iv,
    encryptedData: encryptedPassword.encryptedData,
  }, })

  if(!newPassword) {
    throw new AppError( 400 , "Password Creation Failed")
  }

  return res.status(200).json({ success : true , message : "Success" })
  
  
}) 

export const getPassword = asyncHandler(async(req ,res) => {
 try {
   
   let passwords = await passwordModel.find({ userId : req.userId})

  const decryptedPasswords = passwords.map((item) => {
    return {
      appName: item.appName,
      userName: item.userName,
      _id: item._id,
      password: decrypt({ iv: item.password.iv, encryptedData: item.password.encryptedData }),
    };
  });

  
  return res.status(200).json({ success : true , message : "Success" , passwords :  decryptedPasswords  })
  
 } catch (error) {
    throw new AppError(500 , "Something went wrong")
 }

})  



export const deletePassword = asyncHandler(async (req ,res )=> {
    try {
      
      if (!req.params.id) throw new AppError(400, "all Fields Are mandatory");
     const deletePass =  await passwordModel.deleteOne({ userId : req.userId , _id: req.params.id}) 
    
      return res.json({ success :true, message : "Successfully Deleted"})

    } catch (error) {
      throw new AppError( 500 , "Something went wrong ")
    }
})
