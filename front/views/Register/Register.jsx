import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import { validateRegister } from '../../src/helpers/validate';
import axios from 'axios';

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
    const [message, setMessage] = useState("");


    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUserData({
            ...userData,
            [name]: value,
        });

        const newErrors = validateRegister({
            ...userData,
            [name]: value,
        });
        setErrors(newErrors);
    };
    const navigate = useNavigate()
    const handleOnSubmit = async (event) => {
        event.preventDefault();


        const newErrors = validateRegister(userData);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }



        try {
            const response = await axios.post('http://localhost:3001/users/register', userData);
            setMessage("Registro exitoso");
            navigate("/login")
        } catch (error) {
            console.error(error);
            setMessage("Error en el registro. Intenta nuevamente.");
        }
    };

    return (
        <div className={styles.formContainerFather}>
            <h1>Registro de Usuario</h1>
            <div  className={styles.formContainer}>
                <h2>¡Bienvenido!</h2>
                <form onSubmit={handleOnSubmit}>
                    <h3>Registrarse</h3>
                    <div className={styles.formDiv}>
                        <label>Nombre Completo: </label>
                        <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={handleInputChange}
                        />
                        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}
                    </div>

                    <div className={styles.formDiv}>
                        <label>Email: </label>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                        />
                        {errors.email && <p className={styles.errorMessage}>{errors.email}</p>}
                    </div>

                    <div className={styles.formDiv}>
                        <label>Fecha de Nacimiento: </label>
                        <input
                            type="date"
                            name="birthdate"
                            value={userData.birthdate}
                            onChange={handleInputChange}
                        />
                        {errors.birthdate && <p className={styles.errorMessage}>{errors.birthdate}</p>}
                    </div>

                    <div className={styles.formDiv}>
                        <label>Número de DNI: </label>
                        <input
                            type="number"
                            name="nDni"
                            value={userData.nDni}
                            onChange={handleInputChange}
                        />
                        {errors.nDni && <p  className={styles.errorMessage}>{errors.nDni}</p>}
                    </div>

                    <div className={styles.formDiv}>
                        <label>Nombre de Usuario: </label>
                        <input
                            type="text"
                            name="username"
                            value={userData.username}
                            onChange={handleInputChange}
                        />
                        {errors.username && <p  className={styles.errorMessage}>{errors.username}</p>}
                    </div>

                    <div className={styles.formDiv}>
                        <label>Contraseña: </label>
                        <input
                            type="password"
                            name="password"
                            value={userData.password}
                            onChange={handleInputChange}
                        />
                        {errors.password && <p  className={styles.errorMessage}>{errors.password}</p>}
                    </div>

                    <div className={styles.formButtonFather}>
                        <button type="submit" className={styles.formButton}>Registrarse</button>
                    </div>

                    {message && <p>{message}</p>}
                </form>
            </div>
        </div>
    );
};

export default Register;
