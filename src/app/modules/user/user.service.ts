import { IUser } from "./user.interface";
import { User } from "./user.model";

export const userCreateForDb = async (payload: IUser) => {

    const user = new User(payload)

    await user.save()
    console.log('user saved::: ', user);

}

export const getUserFromDb = async () => {
    const users = await User.find();
    return users
}

/*
{
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
    }
*/