import {Router} from "express" 
import { ActualizarProducto, CrearProducto, EliminarProducto, ObtenerProducto, ObtenerProductoID } from "../Controller/producto.controller"
const router = Router()
router.post("/Equipo-1/product", CrearProducto)
router.get("/Equipo-1/products", ObtenerProducto)
router.get("/Equipo-1/products/:id",ObtenerProductoID)
router.put("/Equipo-1/products/:id",ActualizarProducto)
router.delete("/Equipo-1/productos/:id",EliminarProducto)
export default router
