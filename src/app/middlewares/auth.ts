import { NextFunction, Request, Response } from "express";
import { TUserRole } from "../modules/User/user.interface";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import httpStatus from "http-status";


const auth = (...requiredRoles: TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {

        const bearerToken = req.headers.authorization;

        const token = bearerToken?.split(' ')[1];

        if (!token) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
        }

        //will continue .....
    })
};

export default auth;