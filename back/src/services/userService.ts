import { AppDataSource } from "../config/data-source";
import UserDto from "../dto/UserDto";
import User from "../entities/User";
import { createCredential } from "./credentialService";
import Credential from "../entities/Credential";

const UserRepository = AppDataSource.getRepository(User);

export const getUsersService = async ():Promise<User[]> => { 

    const userDB = await UserRepository.find({
        relations: { appointments: true }
    })

    return userDB;
}

export const getUserByIdService = async (id:number): Promise<User | null> => {
    const foundUser = await UserRepository.findOne({
        where: {id},
        relations: { appointments: true }
    })
    return foundUser
};


export const createUserService = async (userData: UserDto): Promise<User> => { 
    const { username, password, name, email, birthdate, nDni } = userData;

    const newCreds = await createCredential ({ username, password})

    const newUser = UserRepository.create({
        name,
        email,
        birthdate,
        nDni,
        credentials: newCreds
    })
    

    newCreds.user = newUser;

    await UserRepository.save(newUser);
    await AppDataSource.getRepository(Credential).save(newCreds)

    return newUser
}

