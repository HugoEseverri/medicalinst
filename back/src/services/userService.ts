import UserDto from "../dto/UserDto";
import IUser from "../interfaces/IUser"
import { createCredential } from "./credentialService";

let users:IUser[] = []

let id: number = 1;

export const createUserService = async (userData: UserDto, username: string, password: string, nDni:number): Promise<IUser> => { 

    const credentialsId = await createCredential(username, password);

    const newUser: IUser = {
        id,
        name: userData.name,
        email: userData.email,
        birthdate: userData.birthdate,
        nDni,
        credentialsId
    };
    users.push(newUser)
    id++;
    return newUser
}

export const getUsersService = async ():Promise<IUser[]> => { 
    return users;
}

export const getUserByIdService = async (id:number): Promise<IUser | undefined> => {
    return users.find(user => user.id === id);
}

export const deleteUserService = async (id: number): Promise<void> => {
    users = users.filter((user: IUser) => user.id !== id);
}
