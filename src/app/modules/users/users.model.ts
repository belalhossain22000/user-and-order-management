import { Model, Schema, model } from 'mongoose';
import { User, UserModels } from './users.interface';



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

});



userSchema.statics.isExistUser = async function (this: Model<User>, userId: number) {
    const existingUser = await this.findOne({ userId });
    return existingUser;
};


export const UserModel = model<User, UserModels>("User", userSchema);
