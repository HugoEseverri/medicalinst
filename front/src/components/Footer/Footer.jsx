import styles from "./Footer.module.css"
import email from "../../assets/images/email.png"
import tel from "../../assets/images/llamada-telefonica.png"
import marcador from "../../assets/images/ubicacion.png"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerSection}>
                <h2>COMUNÍQUESE CON NOSOTROS</h2>
                <hr />
                <p>Somos un centro asistencial integrado por un staff médico altamente especializado.</p>
                <p>Contáctenos...</p>
            </div>

            <div className={styles.footerSectionTres}>
                <p>
                    <span className={styles.icon}>
                        <img src={marcador} alt="Ubicación" />
                    </span>
                    <strong>Dirección:</strong> Av. Siempre Viva (7400) Olavarría
                </p>
                <p>
                    <span className={styles.icon}>
                        <img src={email} alt="Email" />
                    </span>
                    <strong>Email:</strong> gerencia@mail.com
                </p>
                <p>
                    <span className={styles.icon}>
                        <img src={tel} alt="Teléfono" />
                    </span>
                    <strong>Teléfono:</strong> 456 7898456 / 456 7898455
                </p>
            </div>

            <div className={styles.footerSectionDos}>
                <p>
                    <span className={styles.icon}>
                        <img src={tel} alt="Teléfono" />
                    </span>
                    <strong>Para solicitar turnos en consultorios externos:</strong> 456 - 7898456
                </p>
                <hr />
                <h2>ATENCIÓN LAS 24 HORAS</h2>
            </div>
        </footer>
    )
}

export default Footer
