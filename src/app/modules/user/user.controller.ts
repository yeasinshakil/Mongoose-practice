import { NextFunction, Request, Response } from "express";
import { getUserFromDb, userCreateForDb } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    const userCreate = await userCreateForDb(user)
    res.status(200).json({
        status: "Success",
        data: user
    })
    next()
}

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const users = await getUserFromDb();
    console.log(users);

    res.status(200).json({
        status: "Success",
        data: users
    })
    next()
}