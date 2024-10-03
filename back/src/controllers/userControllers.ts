import {Request, Response} from "express";
import IUser from "../interfaces/IUser";
import { createUserService, getUsersService, deleteUserService } from "../services/userService"


export const getUsers = async (req: Request, res: Response) => {
    const users: IUser[] = await getUsersService();
    res.status(200).json(users)
}

// export const getUsers = (req: Request, res: Response) => {
//     res.send('Obtener el listado de todos los usuarios');
// };


export const getUserById = (req: Request, res: Response) => {
    res.send(`Obtener el detalle del usuario con ID: ${req.params.id}`);
};


export const registerUser = (req: Request, res: Response) => {
    res.send('Registro de un nuevo usuario');
};


export const loginUser = (req: Request, res: Response) => {
    res.send('Login del usuario a la aplicación');
};

export const createUser = async (req: Request, res: Response) => {
    const {name, email, active} = req.body;
    const newUser: IUser = await createUserService({name, email, active})
    res.status(201).json(newUser)
}


export const deleteUser = async (req:Request, res:Response) => {
    const {id} = req.body
    await deleteUserService(id)
    res.status(200).json({message:"Eliminado correctamente"})
}
