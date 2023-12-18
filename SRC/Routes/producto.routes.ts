import {Router} from "express" 
import { ActualizarProducto, CrearProducto, EliminarProducto, ObtenerProducto, ObtenerProductoID } from "../Controller/producto.controller"
import { verificarToken } from "../Controller/usuarios.controller"
const router = Router()
router.post("/equipo-1/product", CrearProducto)
router.get("/equipo-1/products", ObtenerProducto)
router.get("/equipo-1/products/:id",ObtenerProductoID)
router.put("/equipo-1/products/:id",ActualizarProducto)
router.delete("/equipo-1/productos/:id",EliminarProducto)
export default router
