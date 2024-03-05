import { NextFunction, Request, Response } from "express";
import { userCreateForDb } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const userCreate = await userCreateForDb()
    res.status(200).json({
        status: "Success",
        data: userCreate
    })
    next()
}