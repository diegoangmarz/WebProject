import {Router} from "express" 
import { ActualizarProductoPromocional, CrearProductoPromocional, EliminarProductoPromocional, ObtenerProductoPromocional, ObtenerProductoPromocionalID } from "../Controller/productoPromocional.controller"
const router = Router()
router.post("/equipo-1/promotionalproducts", CrearProductoPromocional)
router.get("/equipo-1/promotionalproducts", ObtenerProductoPromocional)
router.get("/equipo-1/promotionalproducts/:id",ObtenerProductoPromocionalID)
router.put("/equipo-1/promotionalproducts/:id",ActualizarProductoPromocional)
router.delete("/equipo-1/promotionalproducts/:id",EliminarProductoPromocional)
export default router
