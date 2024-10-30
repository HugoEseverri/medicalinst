import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../src/context/UserContext";
import axios from "axios";
import styles from "./CrearTurnos.module.css";

const CrearTurnos = () => {
    const { user, addAppointment } = useUserContext();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ date: "", time: "" });
    const [error, setError] = useState("");

    useEffect(() => {
        if (!user) {
            navigate("/home");
        }
    }, [user, navigate]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.date || !formData.time) {
            setError("Todos los campos son obligatorios.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3001/appointments/schedule", {
                userId: user.id,
                date: formData.date,
                time: formData.time,
            });

            addAppointment(response.data);
            alert("Turno creado con éxito");
        } catch (error) {
            console.error("Error al crear el turno:", error);
            setError("Hubo un error al crear el turno. Inténtalo nuevamente.");
        }
    };

    return (
        <div className={styles.crearTurnosContainer}>
            <h1>Crear Turno</h1>
            <h2>Solicitá tu Turno Médico en IMPSA</h2>
            {error && <p className={styles.error}>{error}</p>}
            <p className={styles.turnosText}>En IMPSA, ofrecemos la posibilidad de solicitar turnos para cualquier especialidad médica de manera rápida y sencilla. Nuestro instituto médico privado cuenta con atención de guardia las 24 horas, asegurando que siempre puedas acceder al cuidado que necesitas, sin importar el momento. En esta sección podrás gestionar tus turnos y elegir el horario que mejor se adapte a tus necesidades para recibir atención de calidad en un ambiente cómodo y seguro.

                ¡Confía en nuestro equipo de expertos y en la atención personalizada que brindamos en IMPSA para cuidar de tu salud!</p>
            <div className={styles.formFatherContainer}>
                <form onSubmit={handleSubmit} className={styles.formContainer}>
                    <label>
                        Fecha:
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInputChange}
                        />
                    </label>
                    <label>
                        Hora:
                        <input
                            type="time"
                            name="time"
                            value={formData.time}
                            onChange={handleInputChange}
                        />
                    </label>
                    <button type="submit">Crear Turno</button>
                </form>
            </div>
        </div>
    );
};

export default CrearTurnos;
