import { Request, Response } from 'express';
import { Compra } from '../Models/Compra';
import { DetalladoCompra } from '../Models/DetalladoCompra';
import { Product } from '../Models/Producto';
import { usuario } from '../Models/usuario';


export const CrearCompra =async (req: Request, res: Response) => {
  
  const NuevaCompra = new Compra;
  const nombre_del_cliente = req.body.nombre_del_cliente;
  NuevaCompra.nombre_del_cliente = nombre_del_cliente;
  NuevaCompra.descripcion = ("Compra usuario" + nombre_del_cliente)
  NuevaCompra.precio_total = 0
  NuevaCompra.total_de_productos = 0
  NuevaCompra.usuario_de_creacion = "Admin"

  console.log(nombre_del_cliente)
  await Compra.save(NuevaCompra)
  res.send("Compra  " +  NuevaCompra.id + " Creada")
}

export const CrearDetalladoCompra = async (req: Request, res: Response) => {
  const{idproducto,cantidad,} =  req.body;
  const detalleCompra = new DetalladoCompra;
  const CompraActiva = await Compra.findOneBy({id :parseInt(req.params.id)})
  const Producto = await Product.findOneBy({id :parseInt(idproducto)})

  detalleCompra.idproducto = Producto!;
  detalleCompra.cantidad = cantidad;
  detalleCompra.orden = CompraActiva!;  
  CompraActiva!.precio_total += Producto?.precio! * cantidad
  CompraActiva!.total_de_productos += cantidad
  
  console.log(detalleCompra);
  await DetalladoCompra.save(detalleCompra); 
  await Compra.save(CompraActiva!);
  res.send("Producto agregado a compra");
  
}
export const ObtenerCompraID = async (req: Request, res: Response) => {
  const NuevaCompra = await Compra.findOneBy({id :parseInt(req.params.id) });
  return res.json(NuevaCompra);
};
export const ObtenerCompra = async (req: Request, res: Response) => {
  const NuevaCompra = await Compra.find();
  return res.json(NuevaCompra);
};