import _default from "concurrently";
import { Router } from "express" ;
import { doLogin, register, sendOtp, updatePassword, verifyOtp } from "../controller/userController";

const router = Router() ;

router.get("/" , (req, res) => {
  res.send('Hello useroruter is working')
} )

router.post("/register",register)
router.post("/login",doLogin)

// forgot psss
router.post("/send-otp" , sendOtp) ;
router.post("/verify-otp" , verifyOtp) ;
router.post('/update-password' , updatePassword);


export default router