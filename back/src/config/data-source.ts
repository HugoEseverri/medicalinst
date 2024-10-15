import { DataSource } from "typeorm"
import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } from "./envs"
import Appointment from "../entities/Appointment";
import Credential from "../entities/Credential";
import User from "../entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [Appointment, Credential, User],
    subscribers: [],
    migrations: [],
})


export const connectDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Conectado a la Base de Datos");
    } catch (error) {
        console.log(error);
    }
}