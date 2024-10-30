const Turno = ({id, date, time, status, handleCancelApp }) => {
    return (
        <div> 
            
            <p><strong>Fecha:</strong> {date}</p>
            <p><strong>Hora:</strong> {time}</p>
            <p><strong>Estado:</strong> {status}</p>
            <button onClick={() => handleCancelApp(id)}>
                Cancelar Turno
            </button>
        </div>
    );
}
export default Turno