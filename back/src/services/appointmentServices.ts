import IAppointment from "../interfaces/IAppointment";
import AppointmentDto from "../dto/appointmentDto";


let appointments: IAppointment[] = [];

appointments.push({
    id: 1,
    date: new Date(`2024-10-07`),
    time: `11:00`,
    userId: 1,
    status: `active`
});

let appointmentId: number = 2;

export const createAppointmentService = async (appointmentData: AppointmentDto): Promise<IAppointment> =>{
    const { date, time, userId} = appointmentData;

    if(!userId) {
        throw new Error("El turno debe estar asociado a un ID de usuario.");
    }
    const newAppointment: IAppointment = {
        id: appointmentId,
        date,
        time,
        userId,
        status: `active`
    };

    appointments.push(newAppointment);
    appointmentId++;
    return newAppointment;
};

export const updateAppointmentsService = async (id: number): Promise<IAppointment | null> => {
    const appointment = appointments.find((appointment: IAppointment) => appointment.id === id);
    
    if (!appointment) {
        console.error(`Appointment with id ${id} not found`);
        return null; 
    }
    appointment.status = 'cancelled';   
    return appointment; 
};