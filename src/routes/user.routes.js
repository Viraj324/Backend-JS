import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
// app.js madhun control ikde ala aani mg ata routes lehayache 
//register user cha controller pass 
const router = Router()
router.route("/register").post(registerUser)
 
export default router;