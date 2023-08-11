import _default from "concurrently";
import { Router } from "express" ;
import authChecker from '../middleware/authHandler'
import { doLogin, register, sendOtp, updatePassword, verifyOtp } from "../controller/userController";
import { addPassword, deletePassword, getPassword } from "../controller/passwordController";

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

router.post("/password/add" , authChecker ,  addPassword )
router.get("/passwords" ,authChecker , getPassword )
router.patch("/password/:id",authChecker ,deletePassword)


export default router