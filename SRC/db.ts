import {DataSource} from "typeorm"
import { usuario } from "./Models/usuario"
import { Compra } from "./Models/Compra"
import { DetalladoCompra } from "./Models/DetalladoCompra"
import { Product } from "./Models/Producto"
import { PromotionalProduct } from "./Models/ProductoPromocional"
export const AppDataSource = new DataSource({
    type : "mysql",
    host : "localhost",
    username : "root",
    password : "Admin123",
    port : 3306,
    database : "AutoPartes",
    entities : [Compra, DetalladoCompra, Product,PromotionalProduct, usuario, ], // Anadir nuevas tablas aqui y en models
    logging: true,
    synchronize : false  // Para crear bases de datos

})
