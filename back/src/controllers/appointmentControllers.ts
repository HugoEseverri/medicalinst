import { Request, Response } from "express";
import { createAppointmentService, updateAppointmentsService } from "../services/appointmentServices";
import IAppointment from "../interfaces/IAppointment";
import AppointmentDto from "../dto/appointmentDto";

// Controlador para crear un nuevo turno
export const scheduleAppointment = async (req: Request, res: Response) => {
    try {
        const { date, time, userId } = req.body;
        
        if (!date || !time || !userId) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const appointmentData: AppointmentDto = { date: new Date(date), time, userId };
        const newAppointment: IAppointment = await createAppointmentService(appointmentData);
        return res.status(201).json(newAppointment);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

// Controlador para cancelar un turno
export const cancelAppointment = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ message: "El ID del turno es obligatorio" });
        }

        const updatedAppointment = await updateAppointmentsService(Number(id));
        
        if (updatedAppointment) {
            return res.status(200).json(updatedAppointment);
        } else {
            return res.status(404).json({ message: "Turno no encontrado" });
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};


// export const getAppointments = (req: Request, res: Response) => {
//     res.send('Obtener el listado de todos los turnos');
// };

// export const getAppointmentById = (req: Request, res: Response) => {
//     res.send(`Obtener el detalle del turno con ID: ${req.params.id}`);
// };

// export const scheduleAppointment = (req: Request, res: Response) => {
//     res.send('Agendar un nuevo turno');
// };

// export const cancelAppointment = (req: Request, res: Response) => {
//     res.send('Cambiar el estatus de un turno a "cancelled"');
// };
