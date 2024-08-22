import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ServiceOfServices } from "./service.service";


const createService = catchAsync(async (req, res) => {

    const result = await ServiceOfServices.createServiceIntoDB(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service created successfully",
        data: result
    })
});


export const ServiceControllers = {
    createService,
}