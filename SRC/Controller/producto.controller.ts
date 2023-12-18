import { Request, Response } from "express";
import { Product } from "../Models/Producto"; 


export const CrearProducto = async (req: Request, res: Response) => {
  const {
    nombre,
    descripcion,
    precio,
    categoria,
    fabricante,
    cantidad_en_existencia,
    unidad_de_medida,
    tipo_de_vehiculo,
    vida_util
  } = req.body;

  const Producto = new Product;
  Producto.nombre = nombre;
  Producto.descripcion = descripcion;
  Producto.precio = precio;
  Producto.categoria = categoria;
  Producto.fabricante = fabricante;
  Producto.cantidad_en_existencia = cantidad_en_existencia;
  Producto.unidad_de_medida = unidad_de_medida;
  Producto.fecha_de_creacion = new Date(); // Descomentado para establecer la fecha de creación actual
  // Aquí necesitas implementar la lógica para obtener dinámicamente el nombre de usuario
  Producto.usuario_de_creacion = "NombreUsuario"; // Reemplaza esto con el nombre de usuario adecuado
  Producto.activo = 1; // Por ejemplo, activo por defecto
  Producto.tipo_de_vehiculo = tipo_de_vehiculo;
  Producto.vida_util = vida_util;

  console.log(Producto);
  

    await Producto.save(); // Guarda el producto en la base de datos
    res.send("Producto creado");


  
};


export const ObtenerProducto = async (req: Request, res: Response) => {
  const products = await Product.find();
  return res.json(products);
};
export const ObtenerProductoID = async(req: Request, res: Response) => {
  const product = await Product.findOneBy({id :parseInt(req.params.id) })
  return res.json(product)
}
export const ActualizarProducto = async (req: Request, res: Response) => {
  const {nombre,descripcion,precio,categoria,fabricante,cantidad_en_existencia,unidad_de_medida,tipo_de_vehiculo,vida_util} = req.body;

  const productId = parseInt(req.params.id);
  const product = await Product.findOneBy({id :parseInt(req.params.id) });

  if (!product) return res.json({ message: "Producto no encontrado" });

  product.nombre = nombre;
  product.descripcion = descripcion;
  product.precio = precio;
  product.categoria = categoria;
  product.fabricante = fabricante;
  product.cantidad_en_existencia = cantidad_en_existencia;
  product.unidad_de_medida = unidad_de_medida;
  product.fecha_de_actualizacion = new Date();
  product.usuario_de_actualizacion = "NombreUsuario"; // Puedes establecer el usuario aquí
  product.tipo_de_vehiculo = tipo_de_vehiculo;
  product.vida_util = vida_util;

  console.log(product);
  await product.save();
  res.send("Producto actualizado");
  return res.json(product);
};

export const EliminarProducto = async (req: Request, res: Response) => {
  const productId = parseInt(req.params.id);
  const result = await Product.delete(productId);

  if (result.affected === 0) res.send("Producto no encontrado");
  else res.send("Producto Borrado");
};
