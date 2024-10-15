import { Request, Response } from "express";
import { createNewAppointmentService, getAllAppointmentsById, getAppointmentByIdService, cancelAppointmentService } from "../services/appointmentServices";



export const getAppointments = async (req: Request, res: Response): Promise <Response> => {
    const allApp = await getAllAppointmentsById();
    return res.status(200).json(allApp)
};

export const getAppointmentsById = async (req: Request, res: Response): Promise<Response> => {
    const {id} = req.params;

    const appointment = await getAppointmentByIdService(Number(id));

    return appointment
        ? res.status(200).json(appointment)
        : res.status(400).json({error: "El turno no existe"});
};


export const registerNewAppointment = async(req:Request, res:Response): Promise<Response> => {
    const appointment = await createNewAppointmentService(req.body);

    return appointment
    ? res.status(200).json(appointment)
    : res.status(400).json({error: "El usuario no existe"});
};

export const cancelAppointment = async(req:Request, res:Response): Promise<Response> => {
    const {id} = req.params;

    const cancelApp = await cancelAppointmentService(Number(id));

    return cancelApp
    ? res.status(200).json({ message: "Turno cancelado"})
    : res.status(400).json({ message: "El turno no existe"})
};