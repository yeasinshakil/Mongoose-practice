import { Model, Schema, model } from "mongoose"
import { IUser, IUserMethods } from "./user.interface"

type userModel = Model<IUser, {}, IUserMethods>

const userSchema = new Schema<IUser, userModel, IUserMethods>({
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

export const User = model<IUser, userModel>('User', userSchema)