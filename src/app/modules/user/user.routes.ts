import { Router } from "express";
import { createUser, getUsers } from "./user.controller";

const router = Router()

router.get('/', getUsers)

router.post('/create-user', createUser)

export default router;