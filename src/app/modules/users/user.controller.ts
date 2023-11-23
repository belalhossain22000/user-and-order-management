import { Request, Response } from "express";
import { UserServices } from "./users.service";


const createUser = async (req: Request, res: Response) => {

    try {
        const userData = req.body
        console.log(userData)
        const result = await UserServices.createUser(userData);
        //send response
        res.status(200).json({
            success: true,
            message: "User is created successfully",
            data: result
        })
    } catch (error) {
        console.log(error)
        res.status(404).send({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!"
            }
        })
    }


}

//user get route
const getAllUsers = async (req: Request, res: Response) => {

    try {

        const result = await UserServices.getAllUsers();
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: result
        })
    } catch (error) {
        console.log(error)
        res.status(404).send({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!"
            }
        })
    }


}

//get user by id
const getUserById = async (req: Request, res: Response) => {

    try {
        const userId = parseInt(req.params.userId)
        const result = await UserServices.getUserById(userId);
        if (result) {
            res.status(200).json({
                success: true,
                message: 'User fetched successfully',
                data: result,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'User not found',
                error: {
                    code: 404,
                    description: 'User not found!',
                },
            });
        }
    } catch (error) {
        console.log(error)
        res.status(404).send({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!"
            }
        })
    }


}
//update user by id
const updateUserById = async (req: Request, res: Response) => {

    try {
        const userId = parseInt(req.params.userId)
        const updatedUserData = req.body
        const result = await UserServices.updateUserById(userId, updatedUserData);
        if (result) {
            res.status(200).json({
                success: true,
                message: 'User updated successfully',
                data: result,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'User not found',
                error: {
                    code: 404,
                    description: 'User not found!',
                },
            });
        }
    } catch (error) {
        console.log(error)
        res.status(404).send({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!"
            }
        })
    }


}

//delete user by id
const deleteUserById = async (req: Request, res: Response) => {

    try {
        const userId = parseInt(req.params.userId)
        const result = await UserServices.deleteUserById(userId);
        if (result && result.deletedCount && result.deletedCount > 0) {
            res.status(200).json({
                success: true,
                message: 'User deleted successfully',
                data: null,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'User not found',
                error: {
                    code: 404,
                    description: 'User not found!',
                },
            });
        }
    } catch (error) {
        console.log(error)
        res.status(404).send({
            success: false,
            message: "User not found",
            error: {
                code: 404,
                description: "User not found!"
            }
        })
    }


}

export const UserController = {
    createUser,
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}