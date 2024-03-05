import { Schema, model } from "mongoose"
import { IUser } from "./user.interface"

const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },
    role: { type: String, required: true },
    name: {
        firstName: { type: String, required: true },
        middleName: { type: String, required: false },
        lastName: { type: String, required: true }
    },
    dateOfBirth: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
})

// model define

export const User = model<IUser>('User', userSchema)