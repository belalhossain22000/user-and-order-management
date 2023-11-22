import { IUser } from "./users.interface";
import { User } from "./users.model";

const createUserIntoDB = async (user: IUser) => {
    const result = await User.create(user);
    return result;
};

export const UserServices = {
    createUserIntoDB
};