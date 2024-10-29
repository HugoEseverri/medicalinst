import styles from "./Nosotros.module.css";

const Nosotros = () => {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.service}>
                    <h1>Historia del Instituto Médico IMPSA</h1>
                    <p>
                        Fundado en 1946, el Instituto Médico Privado IMPSA nació en la que el acceso a la salud y a la tecnología médica moderna estaba al alcance de muy pocos. Desde sus inicios, el Instituto fue pionero en la región, comprometido con ofrecer servicios de salud de alta calidad y atención humanizada a cada uno de sus pacientes. Su fundador, el Dr. Juan Manuel Torres, un visionario de la medicina, se propuso construir un espacio de salud integral que no solo proporcionara tratamientos, sino que acompañara al paciente en cada etapa de su vida.
                    </p>
                </div>

                <div className={styles.service}>
                    <h2>Servicios Especializados y Tecnología de Punta</h2>
                    <p>
                        Hoy en día, IMPSA se destaca por su equipo de médicos altamente capacitados en diversas áreas, que brindan una atención de primer nivel en un entorno de confianza y profesionalismo. Su <strong>Servicio de Medicina General</strong> está diseñado para atender a pacientes de todas las edades, ofreciendo un enfoque preventivo y curativo. Desde chequeos de rutina hasta el tratamiento de enfermedades crónicas, los médicos del Instituto se dedican a proporcionar un cuidado integral.
                    </p>
                    <p>
                        <strong>Fisioterapia</strong> y rehabilitación son otras de las especialidades que destacan a IMPSA, con profesionales que emplean técnicas de vanguardia y equipos especializados para ayudar a los pacientes a recuperar su movilidad y mejorar su calidad de vida. Las instalaciones de fisioterapia están equipadas con tecnología avanzada y brindan un ambiente cálido y motivador para los pacientes en recuperación.
                    </p>
                    <p>
                        En el área de <strong>Nutrición</strong>, el Instituto ofrece un enfoque personalizado. Los nutricionistas trabajan de la mano con los pacientes para diseñar planes alimentarios adaptados a sus necesidades, ayudando a alcanzar un equilibrio en su salud física y emocional. Desde su creación, IMOSA ha creído en la importancia de un abordaje integral de la salud, y la nutrición es un pilar fundamental en su enfoque de bienestar total.
                    </p>
                </div>

                <div className={styles.service}>
                    <h2>Innovación y Compromiso</h2>
                    <p>
                        El Instituto IMPSA ha evolucionado constantemente, incorporando los últimos avances en tecnología médica y ofreciendo instalaciones que cumplen con los más altos estándares. La tecnología de diagnóstico por imágenes, los laboratorios de análisis clínico y las salas de cirugía del Instituto están a la par de los centros médicos más avanzados a nivel internacional. Con la visión de su fundador siempre presente, IMPSA se esfuerza día a día en mejorar sus servicios, sin dejar de lado su misión original: ofrecer atención de calidad, profesionalismo y calidez a cada persona que cruza sus puertas.
                    </p>
                    <p>
                        Hoy, con más de 75 años de trayectoria, el Instituto Médico IMPSA se ha ganado la confianza de generaciones y continúa siendo un referente en la salud privada, comprometido en cada acción con el bienestar y la salud de su comunidad.
                    </p>
                </div>
            </div>
            
            <div className={styles.containerDos}>
                <div>
                    <h2>SERVICIOS Y ESPECIALIDADES</h2>
                    <h3>Conocenos</h3>
                </div>

                <div className={styles.listContainer}>

                    <div>
                        <ul>
                            <li>Análisis Biológicos y Laboratorio</li>
                            <li>Neurología</li>
                            <li>Oftalmología</li>
                            <li>Oncología</li>
                            <li>Ortopedia</li>
                            <li>Otorrinolaringología</li>
                            <li>Pediatría </li>
                            <li>Psiquiatría</li>
                            <li>Diagnóstico por Imágenes</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Terapia Intensiva</li>
                            <li>Urología</li>
                            <li>Kinesiología y Traumatología</li>
                            <li>Anatomía Patológica</li>
                            <li>Cardiología</li>
                            <li>Cirugía Infantil</li>
                            <li>Cirugía General</li>
                            <li>Cirugía Plástica</li>
                            <li>Clínica Médica</li>
                        </ul>

                    </div>
                    <div>
                        <ul>
                            <li>Dermatología</li>
                            <li>Endocrinología</li>
                            <li>Nutrición</li>
                            <li>Infectología</li>
                            <li>Fisiatría y Rehabilitación</li>
                            <li>Gastroenterología</li>
                            <li>Ginecología - Obstetricia</li>
                            <li>Hematología - Hemoterapia</li>
                            <li>Inmunología e Histocompatibilidad</li>
                        </ul>

                    </div>

                </div>
                <div>

                </div>


            </div>
        </>
    );
};

export default Nosotros;
