import { IUser } from "./user.interface";
import { User } from "./user.model";

export const userCreateForDb = async (payload: IUser) => {
    try {
        const user = new User(payload)
        console.log(user.fullName());

        await user.save()
        console.log('user saved::: ', user);
        return user

    } catch (error) {
        console.log("error from UserCreatedForDB function:: ⚠⚠⚠ ", error)

    }

}

export const getUserFromDb = async () => {
    try {
        const users = await User.find();
        return users

    } catch (error) {
        console.log("⚠⚠⚠ error from getUserFromDb function:: ⚠⚠⚠ ", error)

    }
}

export const getUserbyIdFromDb = async (payload: string) => {
    const user = await User.findOne({ id: payload }, { name: 1, phone: 1 },)
    return user
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