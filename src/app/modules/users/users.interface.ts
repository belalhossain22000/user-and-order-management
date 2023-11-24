

import { Order } from "../orders/order.interface";
import { Model } from 'mongoose';



export type User = {
    userId: number;
    username: string;
    password: string;
    fullName: {
        firstName: string;
        lastName: string;
    };
    age: number;
    email: string;
    isActive: boolean;
    hobbies: string[];
    address: {
        street: string;
        city: string;
        country: string;
    };
    orders?: Order[];
};

export interface UserModels extends Model<User> {
    isExistUser(userId: number): Promise<User | null>;
}
