import express from "express"
import morgan from "morgan"
import cors from "cors"
import routerUsuarios from "./Routes/usuario.routes"
import routerProductos from "./Routes/producto.routes"
import routerProductosPromocionales from "./Routes/productoPromocional.routes"
import routerCompras from "./Routes/compras.routes"
import { login, verificarToken } from "./Controller/usuarios.controller"

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use(routerUsuarios)
app.use(routerProductos)
app.use(routerCompras)
app.use(routerProductosPromocionales)


export default app