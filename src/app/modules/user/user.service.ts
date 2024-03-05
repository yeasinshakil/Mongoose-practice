import { User } from "./user.model";

export const userCreateForDb = async () => {

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
