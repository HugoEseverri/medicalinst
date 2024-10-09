import { Router } from "express";
import { getUsers, getUserById, loginUser, registerUser } from "../controllers/userControllers";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser)


export default userRouter;
