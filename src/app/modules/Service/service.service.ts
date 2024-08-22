import { TService } from "./service.interface";
import { Service } from "./service.model";

const createServiceIntoDB = async (payload: TService) => {

    const newService = await Service.create(payload);

    const serviceObject = (newService as any).toObject();

    const {  __v, ...remainingData } = serviceObject;

    return remainingData;
};


export const ServiceOfServices = {
    createServiceIntoDB,
}