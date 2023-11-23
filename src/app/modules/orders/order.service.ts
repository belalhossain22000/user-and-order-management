import { UserModel } from "../users/users.model"
import { Order } from "./order.interface"

//add product by user id
const addProductByUserId = async (userId: number, product: Order) => {

    const user = await UserModel.findOne({ userId });
    const existingOrder = user?.orders?.find(order => order?.productName === product?.productName);

    if (existingOrder) {
        existingOrder.quantity += 1;
        await user?.save();
    } else {
        user?.orders?.push(product);
        await user?.save();
        console.log('New product added to user orders');
    }

    return user;
    // const result = await UserModel.updateOne(
    //     { userId },
    //     { $push: { orders: product } })
    // return result
}

export const OrderService = {
    addProductByUserId
}