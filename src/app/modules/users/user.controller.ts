import { Request, Response } from 'express';
import { UserServices } from './users.service';
const createUser = async (req: Request, res: Response) => {
    try {
        const { user: userData } = req.body;
        console.log('Received user data:', userData);
        const result = await UserServices.createUserIntoDB(userData);

        res.status(200).json({
            success: true,
            message: 'user is created successfully',
            data: result,
        });
    } catch (err) {
        console.log(err);
    }
};

export const UserControllers = {
    createUser
};