import { User } from "./users.interface"
import { UserModel } from "./users.model"

const createUser = async (userData: User) => {

    const result = await UserModel.create(userData)
    return result
}

// get all users
const getAllUsers = async () => {
    const result = await UserModel.find()
    return result
}

//get user by id
const getUserById = async (userId: number) => {
    const result = await UserModel.findOne({ userId })
    return result
}

export const UserServices = {
    createUser,
    getAllUsers,
    getUserById
}