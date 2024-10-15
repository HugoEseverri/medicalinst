import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import User from "./User"
import { AppointmentStatus } from "../enums/AppointmentStatus"

@Entity({
    name: "appointment"
})
class Appointment {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "date" })
    date: Date

    @Column()
    time: string

    @Column()
    userId: number

    @Column({
        type: "enum",
        enum: AppointmentStatus,
        default:AppointmentStatus.ACTIVE
    })
    status: AppointmentStatus

    @ManyToOne(() => User, (user) => user.appointments)
    user: User;


}


export default Appointment;