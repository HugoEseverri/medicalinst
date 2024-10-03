import { Router } from "express";
import {getUsers, getUserById, registerUser, loginUser} from "../controllers/userControllers"

const userRouter = Router()

userRouter.get(`/`, getUsers)
userRouter.get(`/:id`, getUserById);
userRouter.post(`/register`, registerUser);
userRouter.post(`/login`, loginUser);

export default userRouter

//get/users => obtener todos los usuarios

//get/users/:id => obtenerun usuario por id

//post/userts/register => crea un nuevo usuario