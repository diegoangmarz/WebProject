import {Router} from "express" 
import { ActualizarUsuario, CrearUsuario, EliminarUsuario, ObtenerUsuario } from "../Controller/usuarios.controller"
const router = Router()
//router.get("/hola",(req,res)=> res.send ("Hola///"))
router.post("/NuevoUsuario", CrearUsuario)
router.get("/ObtenerAllUsers", ObtenerUsuario)
router.put("/ActualizarUsuario/:id",ActualizarUsuario)
router.delete("/EliminarUsuario/:id",EliminarUsuario)
export default router
