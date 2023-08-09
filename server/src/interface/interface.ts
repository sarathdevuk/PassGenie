// import mongoose from "mongoose" ;
import { ObjectId } from "bson" ;
import { Request } from "express";


export interface IRequest extends Request {
  files?:any ;
}

interface EncryptedData {
  iv: string;
  encryptedData: string;
}


export interface IUser {
  _id:ObjectId;
  email:string,
  password: string ,
  otp:string
}
export interface IPassword {
  _id:ObjectId;
  userId : ObjectId ,
  appName : string ,
  userName : string  ,
  password: EncryptedData
}

export interface ResponseType {
  otp: string; 
  status : boolean;
  
}


