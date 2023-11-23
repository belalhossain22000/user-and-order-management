import { Request, Response } from "express";
import { OrderService } from "./order.service";

//delete user by id
const addProductByUserId = async (req: Request, res: Response) => {

    try {
        const userId = parseInt(req.params.userId)
        const product = req.body
        const result = await OrderService.addProductByUserId(userId, product);
        if (result) {
            res.status(200).json({
                success: true,
                message: 'product added  successfully',
                data: null,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'product not added',
                error: {
                    code: 404,
                    description: 'product not added',
                },
            });
        }
    } catch (error) {
        console.log(error)
        res.status(404).send({
            success: false,
            message: "product not added",
            error: {
                code: 404,
                description: "product not added"
            }
        })
    }


}


export const OrderController = {
    addProductByUserId
}