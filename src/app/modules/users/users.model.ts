import { Schema, model } from 'mongoose';
import { User } from './users.interface';
import { orderSchema } from '../orders/order.model';



const userSchema = new Schema<User>({
    userId: { type: Number, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fullName: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    hobbies: [{ type: String }],
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        country: { type: String, required: true }
    },
    orders: [orderSchema]
});

export const UserModel = model("User", userSchema);
