import { useState } from "react";
import styles from "./Contacto.module.css";

const Contacto = () => {
    const [feedback, setFeedback] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFeedback({ ...feedback, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);

        setFeedback({ name: "", email: "", message: "" });
    };

    return (
        <div className={styles.container}>
            <h1>Contáctanos</h1>
            <p>Para más información, contáctanos a través de los siguientes medios:</p>
            <p>Email: contacto@clinicaficticia.com</p>
            <p>Teléfono: +54 11 1234 5678</p>
            <p>Dirección: Calle Falsa 123, Buenos Aires, Argentina</p>

            <h2>Deja tu Opinión</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={feedback.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={feedback.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label htmlFor="message">Opinión:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={feedback.message}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit" className={styles.submitButton}>Enviar Opinión</button>
            </form>

            {submitted && <p className={styles.thankYou}>¡Gracias por tu opinión!</p>}
        </div>
    );
};

export default Contacto;
