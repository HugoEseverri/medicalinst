import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"
import logomedico from "../../assets/images/logomedico.jpg"

const Navbar = () => {
    return (
        <>
            <div className={styles.navLogo}>
                <Link to="/home"><img src={logomedico} alt="Logo Instituto"/></Link>
                <div>
                    <p>ATENCIÓN LAS 24 HS</p>
                    <button>SOLICITAR TURNO</button>
                </div>
            </div>
            <div>
                <nav>
                    <ul className={styles.navbar}>
                        <li><Link to="/home">HOME</Link></li>
                        <li><Link to="/acercade">NOSOTROS</Link></li>
                        <li><Link to="/misturnos">MIS TURNOS</Link></li>
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