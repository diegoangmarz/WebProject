import { Request, Response } from "express";
import { PromotionalProduct } from "../Models/ProductoPromocional";
import { Product } from "../Models/Producto";


export const CrearProductoPromocional = async (req: Request, res: Response) => {

  const ProductoPromocional = new PromotionalProduct;
  const{idproducto,fecha_de_finalizacion, fecha_de_inicio, precio_de_promocion, nombre, descripcion, tipo_de_promocion} =  req.body;

  const Producto = await Product.findOneBy({id :parseInt(idproducto)})
  ProductoPromocional.precio_de_promocion = precio_de_promocion
  ProductoPromocional.fecha_de_inicio = fecha_de_inicio;
  ProductoPromocional.fecha_de_finalizacion =  fecha_de_finalizacion;
  ProductoPromocional.nombre = nombre;
  ProductoPromocional.descripcion = descripcion;
  ProductoPromocional.precio_antiguo =  Producto!.precio

  Producto!.precio = ProductoPromocional.precio_de_promocion
  ProductoPromocional.producto = Producto!
  ProductoPromocional.tipo_de_promocion = tipo_de_promocion

  console.log(PromotionalProduct);
  await PromotionalProduct.save(ProductoPromocional);
  await Product.save(Producto!)
  res.send("Producto Promocional creado");
};

export const ObtenerProductoPromocional = async (req: Request, res: Response) => {
  const products = await PromotionalProduct.find();
  return res.json(products);
};

export const ObtenerProductoPromocionalID = async (req: Request, res: Response) => {
  const product = await PromotionalProduct.findOneBy({id :parseInt(req.params.id) });
  return res.json(product);
};

export const ActualizarProductoPromocional = async (req: Request, res: Response) => {
  const {
    nombre,
    descripcion,
    precio_de_promocion,
    fecha_de_inicio,
    fecha_de_finalizacion,
    activo,
    precio_antiguo,
    tipo_de_promocion
  } = req.body;

  const promotionalproductsID = parseInt(req.params.id);
  const ProductoPromocional = await PromotionalProduct.findOneBy({id :parseInt(req.params.id) });

  if (!ProductoPromocional) return res.json({ message: "Producto promocional no encontrado" });

  ProductoPromocional.nombre = nombre;
  ProductoPromocional.descripcion = descripcion;
  ProductoPromocional.precio_de_promocion = precio_de_promocion;
  ProductoPromocional.fecha_de_inicio =new Date();;
  ProductoPromocional.fecha_de_finalizacion = new Date();;
  ProductoPromocional.activo = 1;
  ProductoPromocional.precio_antiguo = precio_antiguo;
  ProductoPromocional.tipo_de_promocion = tipo_de_promocion;

  await PromotionalProduct.save(ProductoPromocional);
  res.send("Producto promocional actualizado");
  return res.json(ProductoPromocional);
};

export const EliminarProductoPromocional = async (req: Request, res: Response) => {
  const PromotionalProductId = parseInt(req.params.id);
  const result = await PromotionalProduct.delete(PromotionalProductId);

  if (result.affected === 0) res.send("Producto promocional no encontrado");
  else res.send("Producto promocional eliminado");
};
