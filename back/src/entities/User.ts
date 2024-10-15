import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"
import Credential from "./Credential";
import Appointment from "./Appointment";

@Entity({
    name: "users"
})

class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ type: "date" })
    birthdate: Date;

    @Column()
    nDni: number;

    @OneToOne(() => Credential, (credential) => credential.user)
    @JoinColumn()
    credentials: Credential;
    @OneToMany(() => Appointment, (app) => app.user)
    appointments: Appointment[]
}

export default User;


