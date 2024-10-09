import { Router } from "express";
import { scheduleAppointment, cancelAppointment } from "../controllers/appointmentControllers";

const appointmentRouter = Router();

// Ruta para crear un nuevo turno
appointmentRouter.post('/schedule', scheduleAppointment);

// Ruta para cancelar un turno (pasando el ID del turno)
appointmentRouter.put('/cancel/:id', cancelAppointment);

export default appointmentRouter;


// appointmentRouter.get('/', getAppointments);
// appointmentRouter.get('/:id', getAppointmentById);
// appointmentRouter.post('/schedule', scheduleAppointment);
// appointmentRouter.put('/cancel', cancelAppointment);

//get/turns => obtener todos los turnos
//get/turns/:id obtener un turno por id
//post/turns/ schedule => crea un nuevo turno

//put /turns/cancel => cancela un turno