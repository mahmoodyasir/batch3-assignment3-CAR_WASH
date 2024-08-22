import { TUser } from "./user.interface";
import { User } from "./user.model";


const createUserIntoDB = async(payload: TUser) => {
    
    const newUser = await User.create(payload);

    const userObject:any = newUser.toObject();

    const { password, __v, ...result } = userObject;

    return result;

}


export const UserServices = {
    createUserIntoDB,
}