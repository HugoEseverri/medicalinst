import { createUserService, getUsersService, getUserByIdService, deleteUserService } from "../services/userService"
import IUser from "../interfaces/IUser";
import { Request, Response } from "express";
import UserDto from "../dto/UserDto";



export const createUser = async (req: Request, res: Response) => {
    console.log("Received request:", req.body);
    try{
        const { name, email, birthdate, nDni, username, password } = req.body;
        
        if (!name || !email || !birthdate || !nDni || !username || !password) {
            return res.status(400).json({ message: "Todos los campos son obligatorios" });
        }

        const userData: UserDto = {name, email, birthdate, nDni};
        
        const newUser: IUser = await createUserService(userData, username, password, nDni);
        res.status(201).json(newUser);
        
    } catch (error: any){
        console.error("Error occurred:", error);
        res.status(400).json({ message: error.message});
    }
};

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users: IUser[] = await getUsersService();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user: IUser | undefined = await getUserByIdService(Number(id));
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id, 10);
        
        if (isNaN(userId)) {
            return res.status(400).json({ message: "ID de usuario inválido" });
        }

        await deleteUserService(userId);
        
        res.status(200).json({ message: "Usuario eliminado con éxito" });
    } catch (error: any) {
        res.status(400).json({ message: "Error desconocido" });
    }
};

// export const createUser = async (req: Request, res: Response) => {
//     const {name, email, active} = req.body;
//     const newUser: IUser = await createUserService({name, email, active})
//     res.status(201).json(newUser)
// }

// export const getUsers = (req: Request, res: Response) => {
//         res.send('Obtener el listado de todos los usuarios');
//     };
    
    
//     export const getUserById = (req: Request, res: Response) => {
//             res.send(`Obtener el detalle del usuario con ID: ${req.params.id}`);
//         };

        
export const registerUser = (req: Request, res: Response) => {
        res.send('Registro de un nuevo usuario');
    };
    
    
    export const loginUser = (req: Request, res: Response) => {
            res.send('Login del usuario a la aplicación');
};
