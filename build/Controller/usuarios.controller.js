"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EliminarUsuario = exports.ActualizarUsuario = exports.ObtenerUsuario = exports.CrearUsuario = void 0;
const usuario_1 = require("../Models/usuario");

const CrearUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, contrasenia, email } = req.body;
    const user = new usuario_1.usuario;
    user.nombre = nombre;
    user.contrasenia = contrasenia;
    user.email = email;
    console.log(user);
    yield user.save();
    res.send("Usuario creado");
});
exports.CrearUsuario = CrearUsuario;

const ObtenerUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield usuario_1.usuario.find();
    return res.json(users);
});
exports.ObtenerUsuario = ObtenerUsuario;

const ActualizarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, contrasenia, email } = req.body;
    const user = yield usuario_1.usuario.findOneBy({ id: parseInt(req.params.id) });
    if (!user)
        return res.json({ message: "Usuario no encontrado" });
    user.nombre = nombre;
    user.contrasenia = contrasenia;
    user.email = email;
    console.log(user);
    yield user.save();
    res.send("Usuario actualizado");
    return res.json(user);
});
exports.ActualizarUsuario = ActualizarUsuario;

const EliminarUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield usuario_1.usuario.delete({ id: parseInt(req.params.id) });
    if (result.affected === 0)
        res.send("Usuario no encontrado");
    else
        res.send("Usuario Borrado");
});
exports.EliminarUsuario = EliminarUsuario;
