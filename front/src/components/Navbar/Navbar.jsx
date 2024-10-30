import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import logomedico from "../../assets/images/logomedico.jpg"
import { useUserContext } from "../../context/UserContext"

const Navbar = () => {

    const { user } = useUserContext()
    return (
        <>
            <div className={styles.navLogo}>
                <Link to="/home"><img src={logomedico} alt="Logo Instituto"/></Link>
                <div>
                    <p>ATENCIÓN LAS 24 HS</p>
                    {!user && <Link to="/login"><button className={styles.button}>SOLICITAR TURNO</button></Link>}
                    {user && <Link to="/crearturnos"><button className={styles.button}>SOLICITAR TURNO</button></Link>}
                </div>
            </div>
            <div>
                <nav>
                    <ul className={styles.navbar}>
                        <li><Link to="/home">HOME</Link></li>
                        <li><Link to="/acercade">NOSOTROS</Link></li>
                        {user && <li><Link to="/misturnos">MIS TURNOS</Link></li>}
                        {user && <li><Link to="/crearturnos">CREAR TURNOS</Link></li>}
                        <li><Link to="/login">INICIAR SESIÓN</Link></li>
                        <li><Link to="/register">REGISTRARSE</Link></li>
                        <li><Link to="/contact">CONTACTO</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar