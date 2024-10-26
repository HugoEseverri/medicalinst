import styles from "./Login.module.css"
import { useState } from "react";
import { validateLogin } from "../../src/helpers/validate";
import axios from "axios";


const Login = () => {
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [loginError, setLoginError] = useState("")
    const [showPassword, setShowPassword] = useState(false);

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
            alert(`Login exitoso`);
            setUserData({username: "", password: ""})
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
        <div className={styles.formContainer}>
            <form onSubmit={handleOnSubmit}>
                <h1>Iniciar Sesión</h1>
                <div className={styles.formDiv}>
                    <label>Email: </label>
                    <input
                        type="text"
                        value={userData.username}
                        name="username"
                        placeholder="Example: example@mail.com"
                        onChange={handleInputChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
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
                        {showPassword ? "Ocultar" : "Mostrar"}
                    </button>
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className={styles.formButtonFather} disabled={loading}>
                    <button className={styles.formButton}>
                        {loading ? "Cargando..." : "Iniciar Sesión"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;