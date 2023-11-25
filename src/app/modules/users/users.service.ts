import { User } from "./users.interface"
import { UserModel } from "./users.model"
import bcrypt from 'bcrypt'
const createUser = async (userData: User) => {
    // Check if a user already exists
    const existingUser = await UserModel.isExistUser(userData.userId);

    if (existingUser) {
        throw new Error('User already exists.');
    }
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const userWithHashedPassword = { ...userData, password: hashedPassword };

    const result = await UserModel.create(userWithHashedPassword)

    return result
}

// get all users
const getAllUsers = async () => {
    const result = await UserModel.find({}, { fullName: 1, username: 1, age: 1, email: 1, address: 1, _id: 0 })
    return result
}

//get user by id
const getUserById = async (userId: number) => {

    // Check if a user already exists or not exist
    const isExistUser = await UserModel.isExistUser(userId);
    if (!isExistUser) {
        throw new Error('User not exists.');
    }
    const result = await UserModel.findOne({ userId }, { _id: 0, orders: 0 })
    return result
}

//update  user by id
const updateUserById = async (userId: number, updatedUserData: User) => {

    // Check if a user already exists or not exist
    const isExistUser = await UserModel.isExistUser(userId);
    if (!isExistUser) {
        throw new Error('User not exists.');
    }
    const result = await UserModel.findOneAndUpdate(
        { userId: userId },
        { $set: updatedUserData },
        { new: true, projection: { password: 0 } })

    return result
}

//delete user by id
const deleteUserById = async (userId: number) => {

    // Check if a user already exists or not exist
    const isExistUser = await UserModel.isExistUser(userId);
    if (!isExistUser) {
        throw new Error('User not exists.');
    }
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