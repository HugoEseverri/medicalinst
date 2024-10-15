import { Router } from "express";
import { getUsers, getUserById, login, registerNewUser } from "../controllers/userControllers";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/register", registerNewUser);
userRouter.post("/login", login)


export default userRouter;
