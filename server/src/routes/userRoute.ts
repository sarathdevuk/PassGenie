import _default from "concurrently";
import { Router } from "express" ;
import { doLogin, register } from "../controller/userController";

const router = Router() ;

router.get("/" , (req, res) => {
  res.send('Hello useroruter is working')
} )

router.post("/register",register)
router.post("/login",doLogin)


export default router