"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const usuario_1 = require("./Models/usuario");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "Admin123",
    port: 3306,
    database: "AutoPartes",
    entities: [usuario_1.usuario],
    logging: true,
    synchronize: false // Para crear bases de datos
});
