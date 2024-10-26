import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav>
            <ul className={styles.navbar}>
                <li><a href="#home">Home</a></li>
                <li><a href="#mis-turnos">Mis Turnos</a></li>
                <li><a href="#mi-usuario">Mi Usuario</a></li>
                <li><a href="# acerca-de">Acerca De</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    )
}

export default Navbar