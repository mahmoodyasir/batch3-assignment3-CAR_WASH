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

const getSingleService = catchAsync(async (req, res) => {

    const { id } = req.params;

    const result = await ServiceOfServices.getSingleServiceFromDB(id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Service retrieved successfully",
        data: result
    })
});


const getAllService = catchAsync(async (req, res) => {


    const result = await ServiceOfServices.getAllServiceFromDB();

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Services retrieved successfully",
        data: result
    })
});



export const ServiceControllers = {
    createService,
    getSingleService,
    getAllService,
}