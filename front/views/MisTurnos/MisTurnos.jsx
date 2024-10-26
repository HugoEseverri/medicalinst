
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
            .then((res) => { setAppointments(res.data)

    })
    .catch ((error) => (error.response.data.message));
}, [flag]);

    const handleCancelApp = (id) => {
        // console.log(`Turno ${id} cancelado`);

    }

    return (
        <div className={styles.misTurnosContainer}>
            <h2>Mis Turnos</h2>
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