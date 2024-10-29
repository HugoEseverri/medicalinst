import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import medicoweb from "../../src/assets/images/medicoweb.png";
import medicowebdos from "../../src/assets/images/médicowebdos.jpg"
import iprivado1 from "../../src/assets/images/iprivado1.jpg"
import iprivado2 from "../../src/assets/images/iprivado2.jpg"
import iprivado3 from "../../src/assets/images/iprivado3.jpg"
import iprivado4 from "../../src/assets/images/iprivado4.jpg"

const Home = () => {
  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.imageContainer}>
          <img className={styles.homeImage} src={medicoweb} alt="Médico" />
          <h1 className={styles.title}>INSTITUTO MÉDICO PRIVADO</h1>
          <p className={styles.description}>
            DESDE 1946 CON LA MEJOR CALIDAD MÉDICA AL SERVICIO DE LA SALUD
          </p>
        </div>
      </div>

      <div>
        <div className={styles.homeContainerDos}>
          <img src={medicowebdos} alt="Médico" />
          <div className={styles.descriptionDos}>
            <Link to="/acercade" className={styles.noUnderline}><h2>Nosotros</h2></Link>
            <p>Nuestra Clínica es un centro asistencial integrado por un staff médico de amplia trayectoria profesional y universitaria. Contamos con equipamiento de última generación y trabajamos bajo estrictas normas de bioseguridad y cuidado ambiental
            </p>
            <p>
            Nuestro objetivo es trabajar para crear un espacio que transmita un estilo y el lugar se convierta en un refugio seguro para el paciente. Guardia las 24 hs.
            </p>
            <p>
            Atendemos: obras sociales, particulares, prepagas, pediatría, obstetricia, traumatología, clínica general, laboratorio, análisis clínicos, rayos x, ecografías, internación, cirugías y mucho más.</p>
          </div>
        </div>
      </div>
      <div className={styles.homeContainerTres}>
        <h2>CENTRO ASISTENCIAL DE AMPLIA TRAYECTORIA</h2>
        <div className={styles.imageContainerDos}>
          <img src={iprivado1} alt="Cuartos" />
          <img src={iprivado2} alt="Cuartos" />
          <img src={iprivado3} alt="Internación" />
          <img src={iprivado4} alt="Internación" />
        </div>
      </div>
    </>
  );
};

export default Home;
