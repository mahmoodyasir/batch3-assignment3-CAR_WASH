import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TService } from "./service.interface";
import { Service } from "./service.model";

const createServiceIntoDB = async (payload: TService) => {

    const newService = await Service.create(payload);

    const serviceObject = (newService as any).toObject();

    const {  __v, ...remainingData } = serviceObject;

    return remainingData;
};


const getSingleServiceFromDB = async (id: string) => {

    const obtainedService = await Service.findById(id);

    if (!obtainedService) {
        throw new AppError(httpStatus.NOT_FOUND, 'Service Not Found !');
    }


    const serviceObject = (obtainedService as any).toObject();

    const {  __v, ...remainingData } = serviceObject;

    return remainingData;
}


const getAllServiceFromDB = async () => {

    const obtainedServices = await Service.find().select('-__v');

    if (!obtainedServices) {
        throw new AppError(httpStatus.NOT_FOUND, 'Services Not Found !');
    }


    return obtainedServices;
}

export const ServiceOfServices = {
    createServiceIntoDB,
    getSingleServiceFromDB,
    getAllServiceFromDB,
}