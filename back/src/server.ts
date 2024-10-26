import express from "express";
import morgan from "morgan"
import router from "./routes/indexRouter"
import cors from "cors"

const server = express();

server.use(express.json())
server.use(morgan("dev"))
server.use(cors())
server.use(router)


export default server;