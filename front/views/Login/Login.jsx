import styles from "./Login.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateLogin } from "../../src/helpers/validate";
import axios from "axios";
import { useUserContext } from "../../src/context/UserContext";


const Login = () => {
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const { updateUser } = useUserContext();
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUserData({
            ...userData,
            [name]: value
        });

        setErrors(validateLogin({
            ...userData,
            [name]: value
        }));
    }

    

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setLoginError("");


        try {
            const response = await axios.post("http://localhost:3001/users/login", userData);
            console.log("Datos de usuario recibidos al loguearse:", response.data);

            updateUser(response.data.user)
            alert(`Login exitoso`);
            setUserData({ username: "", password: "" })
            navigate("/home")
        } catch (error) {
            if (error.response) {
                setLoginError(error.response.data.message || "Usuario o contraseña incorrectos.");
                alert("Usuario o contraseña incorrectos");
            } else {
                setLoginError("Error al comunicarse con el servidor");
            }
        } finally {
            setLoading(false);
        }
    }

    const toggleShowPassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword)
    }

    return (
        <div className={styles.formContainerFather}>
            <h1>Iniciar Sesión</h1>
            <div className={styles.formContainer}>
                <h2>¡Es un placer tenerte!</h2>
                <form onSubmit={handleOnSubmit}>
                    <h3>Login</h3>
                    <div className={styles.formDiv}>
                        <label>Usuario: </label>
                        <input
                            type="text"
                            value={userData.username}
                            name="username"
                            placeholder="Example: example123"
                            onChange={handleInputChange}
                        />
                        {errors.username && <p className={styles.errorMessage}>{errors.username}</p>}
                    </div>
                    <div className={styles.formDiv}>
                        <label>Contraseña: </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={userData.password}
                            name="password"
                            placeholder="******"
                            onChange={handleInputChange}
                        />
                        <button type="button" onClick={toggleShowPassword} className={styles.togglePassword}>
                            {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                        </button>
                        {errors.password && <p className={styles.errorMessage}>{errors.password}</p>}
                    </div>
                    <div className={styles.formButtonFather} disabled={loading}>
                        <button className={styles.formButton}>
                            {loading ? "Cargando..." : "Iniciar Sesión"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;