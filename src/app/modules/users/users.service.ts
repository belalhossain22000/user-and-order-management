import { User } from "./users.interface"
import { UserModel } from "./users.model"

const createUser = async (userData: User) => {
    // Check if a user with the given userId already exists
    const existingUser = await UserModel.isExistUser(userData.userId);

    if (existingUser) {
        throw new Error('User already exists.');
    }
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
//update  user by id
const updateUserById = async (userId: number, updatedUserData: User) => {
    const result = await UserModel.findOneAndUpdate(
        { userId: userId },
        { $set: updatedUserData },
        { new: true })
    return result
}

//delete user by id
const deleteUserById = async (userId: number) => {
    const result = await UserModel.deleteOne({ userId })
    return result
}


export const UserServices = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}