import _default from "concurrently";
import { Router } from "express" ;

const router = Router() ;

router.get("/" , (req, res) => {
  res.send('Hello useroruter is working')
} )


export default router