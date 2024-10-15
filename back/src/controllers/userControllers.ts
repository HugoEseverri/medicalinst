import { Request, Response } from "express";
import { createUserService, getUsersService, getUserByIdService } from "../services/userService"




export const getUsers = async (req:Request, res:Response): Promise<Response> => {
    const allUsers = await getUsersService();

    return res.status(200).json(allUsers);
};


export const getUserById = async (req: Request, res:Response): Promise <Response> => {
    try {
        const {id} = req.params;
        const foundUser = await getUserByIdService(Number(id));

        return foundUser
            ? res.status(200).json(foundUser)
            : res.status(400).json({ message: "El usuario buscado no existe"});
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const registerNewUser = async (req:Request, res:Response): Promise <Response> => {
    const newUser = await createUserService(req.body);
    return res.status(200).json ({message: "success", newUser})
}

export const login = (req: Request, res: Response) => {
    return res.status(200).json(`Ruta que permite el inicio de sesión`);
}