import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../src/context/UserContext";
import Turno from "../../src/components/Turno/Turno";
import styles from "./MisTurnos.module.css";
import axios from "axios";

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const { user, updateUserAppointments, cancelAppointment } = useUserContext(); // Asumiendo que `user` tiene el `id` del usuario logueado
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/home");
            return;
        }

        const fetchAppointments = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/users/${user.id}`);
                if (JSON.stringify(response.data.appointments) !== JSON.stringify(appointments)) {
                    updateUserAppointments(response.data.appointments); // Actualiza el contexto con los turnos
                    setAppointments(response.data.appointments);
                }
            } catch (error) {
                console.error("Error al obtener los turnos:", error.response.data.message);
            }
        };

        fetchAppointments();
    }, [user, navigate, appointments]);


    const handleCancelApp = async (id) => {
        await cancelAppointment(id);
        setAppointments((prevAppointments) => prevAppointments.filter((app) => app.id !== id)); // Actualiza el estado local
    };


    return (
        <div className={styles.misTurnosContainer}>
            <h1>Mis Turnos</h1>
            <p className={styles.turnosText}>Aquí podrá llevar un registro detallado de los turnos que ha solicitado, permitiéndole gestionar fácilmente sus citas y acceder a toda la información relevante en un solo lugar. Además, si necesita hacer ajustes, podrá cancelar o reprogramar sus turnos de manera sencilla, adaptándose a sus preferencias y horarios sin complicaciones.
                En IMPSA, estamos comprometidos con brindarle un servicio de salud accesible y eficiente. Contamos con un equipo de profesionales y personal capacitado que está disponible para usted las 24 horas del día, los 7 días de la semana, para cubrir sus necesidades de atención médica en cualquier momento.</p>
            {appointments.length === 0 ? (
                <p className={styles.turnosTextDos}>No hay turnos registrados.</p> // Mensaje cuando no hay turnos
            ) : (

                <div className={styles.turnosList}>
                    {appointments?.map((turno) => (
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
            )}
        </div>
    );
};

export default MyAppointments;














// import { useEffect} from "react";
// import { useNavigate } from "react-router-dom"
// import { useUserContext } from "../../src/context/UserContext"
// import Turno from "../../src/components/Turno/Turno";
// import styles from "./MisTurnos.module.css";
// import axios from "axios";

// const MyAppointments = () => {
//     const {user, userAppointments, updateUserAppointments, cancelAppointment } = useUserContext();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (!user) {
//             navigate("/home");
//             return;
//         }
//         const allAppointments = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3001/users/${user.id}`);
//                 console.log("Datos de turnos obtenidos:", response.data.appointments);
//                 updateUserAppointments(response.data.appointments);
//             } catch (error) {
//                 console.error("Error al obtener los turnos:", error);
//             }
//         };

//         allAppointments();
//     }, [user, navigate]);

//     const handleCancelApp = async (id) => {
//         await cancelAppointment(id)

//     };

//     return (
//         <div className={styles.misTurnosContainer}>
//             <h1>Mis Turnos</h1>
//             <p className={styles.turnosText}>Aquí podrá llevar un registro detallado de los turnos que ha solicitado, permitiéndole gestionar fácilmente sus citas y acceder a toda la información relevante en un solo lugar. Además, si necesita hacer ajustes, podrá cancelar o reprogramar sus turnos de manera sencilla, adaptándose a sus preferencias y horarios sin complicaciones.
//             En IMPSA, estamos comprometidos con brindarle un servicio de salud accesible y eficiente. Contamos con un equipo de profesionales y personal capacitado que está disponible para usted las 24 horas del día, los 7 días de la semana, para cubrir sus necesidades de atención médica en cualquier momento.</p>
//             <div className={styles.turnosList}>
//                 {userAppointments?.map((turno) => (
//                     <div key={turno.id} className={styles.turnoCard}>
//                         <Turno
//                             id={turno.id}
//                             date={turno.date}
//                             time={turno.time}
//                             status={turno.status}
//                             handleCancelApp={() => handleCancelApp(turno.id)}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default MyAppointments