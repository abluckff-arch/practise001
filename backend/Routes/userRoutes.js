import { Router } from "express";
import { adminLogin, adminregister, adminLogout, adminChangepassword } from "../Controllers/userCrontroller.js";
import { authMiddleware } from "../MIddleware/authmiddleware.js";
import { refreshaccesstoken } from "../Controllers/userCrontroller.js";

const router = Router();

router.route("/register").post(adminregister);
router.route("/login").post(adminLogin);

// This would be a protected route in a real app
router.route("/logout").post(authMiddleware,adminLogout);
router.route("/refresh-token").post(refreshaccesstoken);
router.route("/change-password").post(authMiddleware,adminChangepassword);

export default router;