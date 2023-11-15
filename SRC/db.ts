import {DataSource} from "typeorm"
import { usuario } from "./Models/usuario"
export const AppDataSource = new DataSource({
    type : "mysql",
    host : "localhost",
    username : "root",
    password : "Admin123",
    port : 3306,
    database : "AutoPartes",
    entities : [usuario], // Anadir nuevas tablas aqui y en models
    logging: true,
    synchronize : false // Para crear bases de datos

})
