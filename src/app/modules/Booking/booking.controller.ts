import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BookingServices } from "./booking.service";


const serviceBooking = catchAsync(async (req, res) => {

    const {email} = req.user;

    const result = await BookingServices.createBookingIntoDB(email, req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Booking successful",
        data: result
    });

});


export const BookingControllers = {
    serviceBooking,
}