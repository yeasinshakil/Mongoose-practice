import { Router } from "express";
import { createUser, getUsers, getUserbyId } from "./user.controller";

const router = Router()

router.get('/', getUsers)

router.post('/create-user', createUser)
router.get('/:id', getUserbyId)

export default router;