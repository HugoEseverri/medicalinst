
// import appointments from "../../helpers/myAppointments";
import { useEffect, useState } from "react";
import Turno from "../../src/components/Turno/Turno";
import styles from "./MisTurnos.module.css";
import axios from "axios";

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [flag, setFlag] = useState(false)
    console.log(appointments);

    useEffect(() => {
        axios
            .get("http://localhost:3001/users/2")
            .then((res) => {
                setAppointments(res.data)

            })
            .catch((error) => (error.response.data.message));
    }, [flag]);

    const handleCancelApp = (id) => {
        // console.log(`Turno ${id} cancelado`);

    }

    return (
        <div className={styles.misTurnosContainer}>
            <h1>Mis Turnos</h1>
            <p className={styles.turnosText}>Aquí podrá llevar un registro detallado de los turnos que ha solicitado, permitiéndole gestionar fácilmente sus citas y acceder a toda la información relevante en un solo lugar. Además, si necesita hacer ajustes, podrá cancelar o reprogramar sus turnos de manera sencilla, adaptándose a sus preferencias y horarios sin complicaciones.
            En IMPSA, estamos comprometidos con brindarle un servicio de salud accesible y eficiente. Contamos con un equipo de profesionales y personal capacitado que está disponible para usted las 24 horas del día, los 7 días de la semana, para cubrir sus necesidades de atención médica en cualquier momento.</p>
            <div className={styles.turnosList}>
                {appointments?.appointments?.map((turno) => (
                    <div key={turno.id} className={styles.turnoCard}>
                        <Turno
                            id={turno.id}
                            date={turno.date}
                            time={turno.time}
                            status={turno.status}
                            handleCancelApp={() => handleCancelApp(turno.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyAppointments