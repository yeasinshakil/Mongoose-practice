import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors'
import { Schema, model } from 'mongoose';

const app: Application = express();
app.use(cors())

interface IUser {
    id: string;
    role: string;
    name: {
        firstName: string;
        middleName?: string;
        lastName: string;
    };
    dateOfBirth: string;
    email: string;
    password: string;
    gender: "male" | "female";
    phone: string;
    emergencyContact: string;
    presentAddress: string;
    permanentAddress: string;
}


app.get("/", (req: Request, res: Response, next: NextFunction) => {
    /*
    Step 1: Interface Design;
    step 2: Schema Design;
    step 3: Model Design;
    step 4: Database Query;
    */
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

    const User = model<IUser>('User', userSchema)

    const userCreateForDb = async () => {

        const user = new User({
            id: "123456",
            role: "admin",
            name: {
                firstName: "John",
                middleName: "Doe",
                lastName: "Doe"
            },
            dateOfBirth: "1990-01-01",
            email: "shakil@gmail.com",
            password: "shakil1234",
            gender: "male",
            phone: "0987654321",
            emergencyContact: "0987654321",
            presentAddress: "123 Main Street",
            permanentAddress: "123 Main Street"
        })

        await user.save()
        console.log('user saved::: ', user);

    }
    userCreateForDb();

    res.send('Hello World!');
    next()
})

export default app;