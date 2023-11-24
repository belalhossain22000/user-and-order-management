import { object, number, string, boolean, array } from 'zod';
const orderSchema = object({
    productName: string(),
    price: number(),
    quantity: number(),
});

// Define schema using Zod
const userValidationSchema = object({
    userId: number().int().positive(),
    username: string().min(3),
    password: string().min(6),
    fullName: object({
        firstName: string(),
        lastName: string(),
    }),
    age: number().int().positive(),
    email: string().email(),
    isActive: boolean(),
    hobbies: array(string()),
    address: object({
        street: string(),
        city: string(),
        country: string(),
    }),
    orders: array(orderSchema).optional(),

});

export default userValidationSchema
