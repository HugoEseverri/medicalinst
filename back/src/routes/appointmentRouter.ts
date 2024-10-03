import { Router } from "express"
import { getAppointments, getAppointmentById, scheduleAppointment, cancelAppointment} from "../controllers/appointmentControllers"
const appointmentRouter = Router();

appointmentRouter.get('/', getAppointments);
appointmentRouter.get('/:id', getAppointmentById);
appointmentRouter.post('/schedule', scheduleAppointment);
appointmentRouter.put('/cancel', cancelAppointment);

export default appointmentRouter;


//get/turns => obtener todos los turnos
//get/turns/:id obtener un turno por id
//post/turns/ schedule => crea un nuevo turno

//put /turns/cancel => cancela un turno