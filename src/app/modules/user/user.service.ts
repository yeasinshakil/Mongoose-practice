import { IUser } from "./user.interface";
import { User } from "./user.model";

export const userCreateForDb = async (payload: IUser) => {
    try {
        const user = new User(payload)
        console.log(user.fullName());

        await user.save()
        // console.log('user saved::: ', user);
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
