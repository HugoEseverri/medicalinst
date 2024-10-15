import { AppointmentStatus } from "../enums/AppointmentStatus";
import AppointmentDto from "../dto/appointmentDto";
import { AppDataSource } from "../config/data-source";
import Appointment from "../entities/Appointment";
import User from "../entities/User";

const AppointmentsRepository = AppDataSource.getRepository(Appointment);

export const getAllAppointmentsById = async (): Promise<Appointment[]> => {
    const allAppointments = await AppointmentsRepository.find({
        relations: { user: true },
    });

    return allAppointments;
};

export const getAppointmentByIdService = async (
    id: number
): Promise<Appointment | null> => {
    const foundApp = await AppointmentsRepository.findOne({
        where: { id },
        relations: ["user"],
    });

    return foundApp;
};

export const createNewAppointmentService = async (
    dataAppointment: AppointmentDto
): Promise<Appointment | null> => {
    const { date, time, userId } = dataAppointment;

    const userEntity = await AppDataSource.getRepository(User).findOneBy({
        id: userId,
    });

    if (userEntity) {
        const newAppointment = AppointmentsRepository.create({
            date,
            time,
            user: userEntity,
        });

        await AppointmentsRepository.save(newAppointment);

        return newAppointment;
    } else return null;
};

export const cancelAppointmentService = async (
    id: number
): Promise<Appointment | null> => {
    const foundAppointment = await getAppointmentByIdService(id);

    if (foundAppointment) {
        foundAppointment.status = AppointmentStatus.CANCELLED;

        await AppointmentsRepository.save(foundAppointment)
    }
    return foundAppointment;
};

// export const createAppointmentService = async (appointmentData: AppointmentDto): Promise<IAppointment> =>{
//     const { date, time, userId} = appointmentData;

//     if(!userId) {
//         throw new Error("El turno debe estar asociado a un ID de usuario.");
//     }
//     const newAppointment: IAppointment = {
//         id: appointmentId,
//         date,
//         time,
//         userId,
//         status: `active`
//     };

//     appointments.push(newAppointment);
//     appointmentId++;
//     return newAppointment;
// };

// export const updateAppointmentsService = async (id: number): Promise<IAppointment | null> => {
//     const appointment = appointments.find((appointment: IAppointment) => appointment.id === id);

//     if (!appointment) {
//         console.error(`Appointment with id ${id} not found`);
//         return null;
//     }
//     appointment.status = 'cancelled';
//     return appointment;
// };
