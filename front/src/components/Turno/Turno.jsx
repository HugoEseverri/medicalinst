const Turno = ({date, time, status, handleCancelApp }) => {
    return (
        <div className="turno"> 
            
            <p><strong>Fecha:</strong> {date}</p>
            <p><strong>Hora:</strong> {time}</p>
            <p><strong>Estado:</strong> {status}</p>
            <button onClick={handleCancelApp}>Cancelar</button>
        </div>
    );
}
export default Turno