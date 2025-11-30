import { asyncHandler } from "../Utils/asyncHandler.js";
import ApiResponse from "../Utils/ApiResponse.js";
import apiError from "../Utils/apiError.js";
import { Admin } from "../Models/adminmodel.js";

const adminregister = asyncHandler(async (req, res) => {
    //register for admin 
    const { fullname, username, password } = req.body;

    if ([fullname, username, password].some((field) => field?.trim() === "")) {
        throw new apiError(400, "All fields are required");
    }

    const existingUser = await Admin.findOne({ username });
    if (existingUser) {
        throw new apiError(400, "Username already exists");
    }

    const admin1 = await Admin.create({
        fullname,
        username,
        password,
    });

    // Do not send password back in the response
    const createdAdmin = await Admin.findById(admin1._id).select("-password");

    return res.status(201).json(
        new ApiResponse(201, "Admin registered successfully", createdAdmin)
    );
});

const adminLogin = asyncHandler(async (req, res) => {
    // login for admin
    const { username, password } = req.body;
    if ([username, password].some((field) => field?.trim() === "")) {
        throw new apiError(400, "All fields are required");
    }

    const admin = await Admin.findOne({ username });
    if (!admin) {
        throw new apiError(401, "Invalid username or password");
    }
    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
        throw new apiError(401, "Invalid username or password");
    }
    const accessToken = admin.generateAccessToken();
    const refreshToken = admin.generateRefreshToken();

    admin.refreshToken = refreshToken;
    await admin.save({ validateBeforeSave: false });

    const loggedInAdmin = await Admin.findById(admin._id).select("-password -refreshToken");

    return res.status(200).json(
        new ApiResponse(200, "Admin logged in successfully", {
            admin: loggedInAdmin,
            accessToken,
            refreshToken,
        })
    );
});
const adminLogout = asyncHandler(async (req, res) => {
    // logout for admin
    await Admin.findByIdAndUpdate(req.admin._id,
        {$set: {refreshToken: undefined ,
            accessToken: undefined
        }},
        {new:true}
    );
    const option={
        httOnly:true,
        sameSite:"strict",
        secure:true,
    }

    return res.status(200)
    .clearcookie("refreshToken",option)
    .clearcookie("accessToken",option)
    .json(
        new ApiResponse(200,"Admin logged out successfully",null)
    );
    }

)


export { adminLogin, adminregister, adminLogout};
