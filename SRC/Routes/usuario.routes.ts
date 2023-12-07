import {Router} from "express" 
import { ActualizarUsuario, CrearUsuario, EliminarUsuario, ObtenerUsuario, ObtenerUsuarioID } from "../Controller/usuarios.controller"
const router = Router()
router.post("/equipo-1/users", CrearUsuario)
router.get("/equipo-1/user", ObtenerUsuario)
router.get("/equipo-1/user/:id",ObtenerUsuarioID)
router.put("/equipo-1/user/:id",ActualizarUsuario)
router.delete("/equipo-1/user/:id",EliminarUsuario)
export default router
