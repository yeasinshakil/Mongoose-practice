import { NextFunction, Request, Response } from "express";
import { getUserFromDb, userCreateForDb, getUserbyIdFromDb } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const user = req.body;
        const userCreate = await userCreateForDb(user)
        res.status(200).json({
            status: "Success",
            data: user
        })
        next()
    } catch (error) {
        console.log("error from created user function:: ⚠⚠⚠ ", error)
    }
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const users = await getUserFromDb();

        res.status(200).json({
            status: "Success",
            data: users
        })
        next()
    } catch (error) {
        console.log("error from get users function:: ⚠⚠⚠ ", error)

    }
}

export const getUserbyId = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;
        const user = await getUserbyIdFromDb(id);
        console.log(user)
        res.status(201).json({
            status: "Success",
            data: user
        })
        next()
    } catch (error) {
        throw new Error();

    }
}