import { object, number, string, boolean, array } from 'zod';

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
});

export default userValidationSchema
