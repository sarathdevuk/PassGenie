// import mongoose from "mongoose" ;
import { ObjectId } from "bson" ;
import { Request } from "express";


export interface IRequest extends Request {
  files?:any ;
}

export interface IUser {
  _id:ObjectId;
  email:string,
  password: string ,
  otp:string
}

export interface ResponseType {
  otp: string; 
  status : boolean;
  
}


