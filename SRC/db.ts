import {DataSource} from "typeorm"
import { usuario } from "./Models/usuario"
import { Compra } from "./Models/Compra"
import { DetalladoCompra } from "./Models/DetalladoCompra"
import { Product } from "./Models/Producto"
import { PromotionalProduct } from "./Models/ProductoPromocional"
export const AppDataSource = new DataSource({
    type : "mysql",
    host : "3.84.69.180", //localhost
    username : "tu_usuario", //root
    password : "tu_contrasena", // Admin123
    port : 3306, //
    database : "autopartes",
    entities : [Compra, DetalladoCompra, Product,PromotionalProduct, usuario, ], // Anadir nuevas tablas aqui y en models
    logging: true,
    synchronize : false  // Para crear bases de datos

})
