import { Router } from "express";
import {getAppointments, getAppointmentsById, registerNewAppointment, cancelAppointment } from "../controllers/appointmentControllers";

const appointmentRouter = Router();
appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/:id", getAppointmentsById);
appointmentRouter.post("/schedule", registerNewAppointment);
appointmentRouter.put("/cancel/:id", cancelAppointment);


export default appointmentRouter;