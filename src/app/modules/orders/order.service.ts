import { UserModel } from "../users/users.model"
import { Order } from "./order.interface"

//add product by user id
const addProductByUserId = async (userId: number, product: Order) => {

    // Check if a user already exists or not exist
    const isExistUser = await UserModel.isExistUser(userId);
    if (!isExistUser) {
        throw new Error('User not exists.');
    }
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

//get orders by user id 
const getOrderByUserId = async (userId: number) => {
    // Check if a user already exists or not exist
    const isExistUser = await UserModel.isExistUser(userId);
    if (!isExistUser) {
        throw new Error('User not exists.');
    }
    const result = await UserModel.findOne({ userId }, { orders: 1, _id: 0 });
    return result
}
//get orders total price by user id 
const getTotalPriceByUserId = async (userId: number) => {
    // Check if a user already exists or not exist
    const isExistUser = await UserModel.isExistUser(userId);
    if (!isExistUser) {
        throw new Error('User not exists.');
    }
    const result = await UserModel.aggregate([

        { $match: { userId: userId } },
        { $unwind: '$orders' },
        {
            $group: {
                _id: '$_id',
                totalPrice: { $sum: { $multiply: ['$orders.price', '$orders.quantity'] } }
            }
        },
        {
            $project: { _id: 0 }
        }

    ])

    return result


}


export const OrderService = {
    addProductByUserId,
    getOrderByUserId,
    getTotalPriceByUserId
}