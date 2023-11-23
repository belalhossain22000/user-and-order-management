import { User } from "./users.interface"
import { UserModel } from "./users.model"

const createUser = async (userData: User) => {

    const result = await UserModel.create(userData)
    return result
}

const getAllUsers = async () => {
    const result = await UserModel.find()
    return result
}

export const UserServices = {
    createUser,
    getAllUsers
}