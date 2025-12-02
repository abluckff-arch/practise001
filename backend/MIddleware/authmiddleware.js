import { asyncHandler } from "../Utils/asyncHandler.js";
import apiError from "../Utils/apiError.js";
import jwt from "jsonwebtoken";
import { Admin } from "../Models/adminmodel.js";

export const authMiddleware = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        if (!token) {
            throw new apiError(401, "Unauthorized request");
        }
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const user = await Admin.findById(decoded?._id).select("-password -refreshToken");
        if (!user) {
            throw new apiError(401, "Invalid Access Token");
        }
        req.user = user;
        next();
    } catch (error) {
        throw new apiError(401, error?.message || "Invalid access token");
    }
});