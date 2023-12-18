import {Router} from "express" 
import { ActualizarUsuario, CrearUsuario, EliminarUsuario, ObtenerUsuario, ObtenerUsuarioID, login, verificarToken } from "../Controller/usuarios.controller"
const router = Router()
router.post("/equipo-1/users",login, CrearUsuario)
router.get("/equipo-1/user",login ,ObtenerUsuario)
router.get("/equipo-1/user/:id",ObtenerUsuarioID)
router.put("/equipo-1/user/:id",ActualizarUsuario)
router.delete("/equipo-1/user/:id",EliminarUsuario)
router.post("/equipo-1/login", login)
export default router
