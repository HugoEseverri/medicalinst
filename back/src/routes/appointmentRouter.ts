import { Router } from "express";
import {getAppointments, getAppointmentsById, registerNewAppointment, cancelAppointment } from "../controllers/appointmentControllers";

const appointmentRouter = Router();
appointmentRouter.get("/", getAppointments);
appointmentRouter.get("/:id", getAppointmentsById);
appointmentRouter.post("/schedule", registerNewAppointment);
appointmentRouter.put("/cancel/:id", cancelAppointment);


export default appointmentRouter;


// appointmentRouter.get('/', getAppointments);
// appointmentRouter.get('/:id', getAppointmentById);
// appointmentRouter.post('/schedule', scheduleAppointment);
// appointmentRouter.put('/cancel', cancelAppointment);

//get/turns => obtener todos los turnos
//get/turns/:id obtener un turno por id
//post/turns/ schedule => crea un nuevo turno

//put /turns/cancel => cancela un turno