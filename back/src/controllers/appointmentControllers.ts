import { Request, Response } from 'express';

export const getAppointments = (req: Request, res: Response) => {
    res.send('Obtener el listado de todos los turnos');
};

export const getAppointmentById = (req: Request, res: Response) => {
    res.send(`Obtener el detalle del turno con ID: ${req.params.id}`);
};

export const scheduleAppointment = (req: Request, res: Response) => {
    res.send('Agendar un nuevo turno');
};

export const cancelAppointment = (req: Request, res: Response) => {
    res.send('Cambiar el estatus de un turno a "cancelled"');
};
