import { Request, Response } from "express";
import { createUserService, getUsersService, getUserByIdService } from "../services/userService"
import { validateCredential } from "../services/credentialService";
import { error } from "console";




export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const allUsers = await getUsersService();

    return res.status(200).json(allUsers);
};


export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params;
        const foundUser = await getUserByIdService({id: Number(id), email:null});

        return foundUser
            ? res.status(200).json(foundUser)
            : res.status(404).json({ message: "El usuario buscado no existe" });
    } catch (error) {
        return res.status(500).json(error);
    }
};

export const registerNewUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, birthdate, nDni, username, password } = req.body;
        
        if (!name || !email || !birthdate || !nDni || !username || !password ) return res.status(400).json({error: "Uno o más datos están incompletos"});

        const foundUserByEmail = await getUserByIdService({id: null, email})

        if(foundUserByEmail){
            return res.status(400).json({error: "Ya existe un usuario con ese email"})
        }

        const newUser = await createUserService(req.body);
        return res.status(201).json({ message: "success", newUser })

    } catch (error) {
        return res.status(500).json(error);
    }

}

export const login = async (req: Request, res: Response): Promise<Response> => {

    try {
        const { username, password} = req.body;

        const credentialsChecked = await validateCredential ({ username, password})

        return credentialsChecked
            ? res.status(200).json({ login: true, user: credentialsChecked })
            : res.status(400).json({ login: false })
    } catch (error) {
        return res.status(500).json(error);
    }
}