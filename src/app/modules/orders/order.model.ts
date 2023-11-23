import { Schema } from "mongoose";

export const orderSchema = new Schema({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }

})