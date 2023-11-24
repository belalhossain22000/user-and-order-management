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
                message: 'Order created successfully!',
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
const getOrderByUserId = async (req: Request, res: Response) => {

    try {
        const userId = parseInt(req.params.userId)
        const result = await OrderService.getOrderByUserId(userId);
        if (result) {
            res.status(200).json({
                success: true,
                message: 'Order fetch successfully!',
                data: result,
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'order not found',
                error: {
                    code: 404,
                    description: 'order not found',
                },
            });
        }
    } catch (error) {
        console.log(error)
        res.status(404).send({
            success: false,
            message: "order not found",
            error: {
                code: 404,
                description: "order not found"
            }
        })
    }


}
const getTotalPriceByUserId = async (req: Request, res: Response) => {

    try {
        const userId = parseInt(req.params.userId)
        const result = await OrderService.getTotalPriceByUserId(userId);

        if (result[0]) {

            res.status(200).json({
                success: true,
                message: 'Total price calculated successfully!',
                data: result[0],
            });
        } else {
            res.status(404).json({
                success: false,
                message: 'order not found',
                error: {
                    code: 404,
                    description: 'order not found',
                },
            });
        }
    } catch (error) {
        console.log(error)
        res.status(404).send({
            success: false,
            message: "order not found",
            error: {
                code: 404,
                description: "order not found"
            }
        })
    }


}


export const OrderController = {
    addProductByUserId,
    getOrderByUserId,
    getTotalPriceByUserId
}