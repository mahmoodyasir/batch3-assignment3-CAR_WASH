import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";


const userSignUp = catchAsync(async (req, res) => {

    const result = await UserServices.createUserIntoDB(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User registered successfully",
        data: result
    })
});

const userLogin = catchAsync(async (req, res) => {

    const result = await UserServices.loginUser(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User logged in successfully",
        token: result?.accessToken,
        data: result?.remainingData
    })
});


export const UserControllers = {
    userSignUp,
    userLogin
}