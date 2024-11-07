import { isCancellable } from "../../helpers/validate";

const Turno = ({ id, date, time, status, handleCancelApp }) => {

    
    return (
        <div>

            <p><strong>Fecha:</strong> {date}</p>
            <p><strong>Hora:</strong> {time}</p>
            <p><strong>Estado:</strong> {status}</p>
            {isCancellable(date, time) ? (
                <button onClick={() => handleCancelApp(id)}>
                    Cancelar Turno
                </button>
            ) : (
                <p>No se puede cancelar el turno con menos de 24 hs de anticipación</p>
            )}
        </div>
    );
}
export default Turno