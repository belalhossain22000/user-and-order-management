/* eslint-disable @typescript-eslint/no-this-alias */
import { Model, Schema, model } from 'mongoose';
import { User, UserModels } from './users.interface';
import bcrypt from 'bcrypt'
import { orderSchema } from '../orders/order.model';





const userSchema = new Schema<User, UserModels>({
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
    orders: [orderSchema],


});

//hashing password using pre hook

// userSchema.pre('save', async function (next) {
//     const user = this
//     user.password = await bcrypt.hash(user.password, 10)

//     next()
// })

//remove password using post method
userSchema.post<User>('save', function (doc, next) {
    if (doc) {

        doc.password = undefined;
    }
    next();
});

//remove pass from find one query
userSchema.pre<User>('findOne', function (next) {
    this.select('-password');
    next();
});

//use static method for check existing user
userSchema.statics.isExistUser = async function (this: Model<User>, userId: number) {
    const existingUser = await this.findOne({ userId });
    return existingUser;
};


export const UserModel = model<User, UserModels>("User", userSchema);
