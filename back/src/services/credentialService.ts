import { AppDataSource } from "../config/data-source";
import CredentialDto from "../dto/credentialDto";
import Credential from "../entities/Credential";

const CredentialRepository = AppDataSource.getRepository(Credential)


export const createCredential = async (credentials: CredentialDto): Promise <Credential> => {
    const { username, password } = credentials;
    
    const newCredentials = CredentialRepository.create({
        username,
        password,
    })

    await CredentialRepository.save(newCredentials)

    return newCredentials;
};

export const validateCredential = async (credentials: CredentialDto ):Promise <number> =>{
    const { username, password } = credentials;

    const foundCredentials = await CredentialRepository.findOneBy({ username })

    if(foundCredentials?.password === password) return foundCredentials.id;
    else return 0
};
