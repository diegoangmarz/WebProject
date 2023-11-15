import express from "express"
import morgan from "morgan"
import cors from "cors"
import routerUsuarios from "./Routes/usuario.routes"
const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use(routerUsuarios)
export default app