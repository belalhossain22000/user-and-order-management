import { Schema, model } from "mongoose";
import { IUser } from "./users.interface";

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: String
});

// 3. Create a Model.
export const User = model<IUser>('User', userSchema);