import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../User/user.model";
import { TBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBookingIntoDB = async (email: string, payload: any) => {

    const { serviceId, slotId, ...restData } = payload;

    const user = await User.findOne({ email });


    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User Not Found !');
    };

    const bookingData: TBooking = {
        customer: user?.id,
        service: serviceId,
        slot: slotId,
        ...restData,
    }

    const newBookingService = (await Booking.create(bookingData)).populate([
        {
            path: 'customer',
            select: '-__v'
        },
        {
            path: 'service',
            select: '-__v'
        },
        {
            path: 'slot',
            select: '-__v'
        },

    ]);


    return newBookingService;

}


export const BookingServices = {
    createBookingIntoDB,
}