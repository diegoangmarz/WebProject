"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Product_controller_1= require("../Controller/producto.controller");
const router = (0, express_1.Router)();
//router.get("/hola",(req,res)=> res.send ("Hola///"))
router.post("/CrearProducto", Product_controller_1.CrearProducto);
router.get("/ObtenerAllProducts", Product_controller_1.ObtenerProducto);
router.put("/ActualizarProducto/:id", Product_controller_1.ActualizarProducto);
router.delete("/EliminarProducto/:id", Product_controller_1.EliminarProducto);
exports.default = router;
