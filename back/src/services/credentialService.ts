import { AppDataSource } from "../config/data-source";
import CredentialDto from "../dto/credentialDto";
import Credential from "../entities/Credential";
import User from "../entities/User";
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

export const validateCredential = async (credentials: CredentialDto ):Promise <User | undefined> =>{
    const { username, password } = credentials;

    const foundCredentials = await CredentialRepository.findOne({
        where:{ username },
        relations: ["user"]
});

if (foundCredentials?.password === password) return foundCredentials?.user

};
