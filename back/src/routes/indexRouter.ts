import {Router} from "express";
import userRouter from "./userRouter";
import appointmentRouter from "./appointmentRouter";
import { createUser, getUsers, deleteUser} from "../controllers/userControllers"

const router: Router = Router();

router.get("/users", getUsers )

router.post("/users", createUser)


router.delete("/users", deleteUser)

router.use(`/users`, userRouter)
router.use(`/appointments`, appointmentRouter)

export default router;