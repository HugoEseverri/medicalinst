import ICredential from "../interfaces/ICredential";
//agregar Service a las const
let credentials: ICredential[] = [
    {id: 1, username: `juan_perez`, password: `passfalso123`},
    {id: 2, username: `maria_gonzales`, password: `passfalso124`}
];

export const createCredential = async (username:string, password:string): Promise <number> => {
    const newId = credentials.length +1;
    const newCredential: ICredential = {id:newId, username, password};
    credentials.push(newCredential);
    return newId;
};

export const validateCredential = async (username:string, password:string):Promise <number | null> =>{
    const credential = credentials.find(cred => cred.username === username);

    if(credential) {
        if(credential.password === password){
            return credential.id;
        }else{
            return null;
        }
    }else {
        return null;
    }
};
