import server from "./server"
import { PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource, connectDatabase } from "./config/data-source";



try {
    connectDatabase();
    server.listen(PORT, () => {
        console.log(`Servidor escuchando en puerto ${PORT}`)
    })
} catch (error) {
    console.log(error)
}




// AppDataSource.initialize()
//     .then( res => {
//         console.log("Conexión a la base de datos realizada con éxito")
//         server.listen(PORT, () =>{
//             console.log(`Server listening on ${PORT}`);
//         })
//     })







// const express = require("express");
// require("dotenv").config()

// const PORT = process.env.PORT || 3000

// const server = express();


// server.listen(PORT, () => {
//     console.log(`server listening on PORT ${PORT}`)
// })
