import { Router } from "express";
import { adminregister, adminLogin, adminLogout } from "../Controllers/userCrontroller.js";

const router = Router();
router.route("/login").post(adminLogin);
router.route("/register").post(adminregister);
router.route("/logout").post(adminLogout); //logout route

export default router;
