import { createContext, useContext, useState, userContext } from "react";
import axios from "axios";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);


export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userAppointments, setUserAppointments] = useState([]);

    const updateUser = (userData) =>{
        console.log("Actualizando usuario en contexto:", userData)
        setUser(userData);
    }
    const updateUserAppointments = (appointments) => setUserAppointments(appointments);

    const cancelAppointment = async (appointmentId) => {
        try {
            await axios.put(`http://localhost:3001/appointments/cancel/${appointmentId}`);

            // Actualizar el estado de citas al eliminar la cita cancelada
            setUserAppointments((prevAppointments) =>
                prevAppointments.filter((app) => app.id !== appointmentId)
            );
        } catch (error) {
            console.error("Error al cancelar la cita:", error);
        }
    };

    return (
        <UserContext.Provider value={{ user, userAppointments, updateUser, updateUserAppointments, cancelAppointment }}>
            {children}
        </UserContext.Provider>
    );

}
