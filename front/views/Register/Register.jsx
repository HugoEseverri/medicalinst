import { useState } from 'react';
import styles from './Register.module.css';
import { validateRegister } from '../../src/helpers/validate'; // Asumiendo que tengas un archivo de validaciones.
import axios from 'axios'; // Para hacer la petición POST.

const Register = () => {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(""); // Mensaje para el usuario.

    // Manejo de cambios en los inputs
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUserData({
            ...userData,
            [name]: value,
        });

        // Validar los campos en tiempo real
        const newErrors = validateRegister({
            ...userData,
            [name]: value,
        });
        setErrors(newErrors);
    };

    // Manejo del envío del formulario
    const handleOnSubmit = async (event) => {
        event.preventDefault();

        // Verificar si hay errores antes de enviar
        const newErrors = validateRegister(userData);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/users/register', userData);
            setMessage("Registro exitoso");
        } catch (error) {
            console.error(error);
            setMessage("Error en el registro. Intenta nuevamente.");
        }
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleOnSubmit}>
                <h1>Registro de Usuario</h1>

                <div className={styles.formDiv}>
                    <label>Nombre Completo: </label>
                    <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>

                <div className={styles.formDiv}>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className={styles.formDiv}>
                    <label>Fecha de Nacimiento: </label>
                    <input
                        type="date"
                        name="birthdate"
                        value={userData.birthdate}
                        onChange={handleInputChange}
                    />
                    {errors.birthdate && <p>{errors.birthdate}</p>}
                </div>

                <div className={styles.formDiv}>
                    <label>Número de DNI: </label>
                    <input
                        type="number"
                        name="nDni"
                        value={userData.nDni}
                        onChange={handleInputChange}
                    />
                    {errors.nDni && <p>{errors.nDni}</p>}
                </div>

                <div className={styles.formDiv}>
                    <label>Nombre de Usuario: </label>
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleInputChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className={styles.formDiv}>
                    <label>Contraseña: </label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div className={styles.formButtonFather}>
                    <button type="submit" className={styles.formButton}>Registrarse</button>
                </div>

                {message && <p>{message}</p>} {/* Mostrar mensaje */}
            </form>
        </div>
    );
};

export default Register;
