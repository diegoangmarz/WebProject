"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuarios_controller_1 = require("../Controller/usuarios.controller");
const router = (0, express_1.Router)();
//router.get("/hola",(req,res)=> res.send ("Hola///"))
router.post("/NuevoUsuario", usuarios_controller_1.CrearUsuario);
router.get("/ObtenerAllUsers", usuarios_controller_1.ObtenerUsuario);
router.put("/ActualizarUsuario/:id", usuarios_controller_1.ActualizarUsuario);
router.delete("/EliminarUsuario/:id", usuarios_controller_1.EliminarUsuario);
exports.default = router;
