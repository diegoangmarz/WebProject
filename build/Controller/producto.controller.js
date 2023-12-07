const { Product } = require("../Models/Producto"); // Asegúrate de importar la entidad Product correctamente

const CrearProducto = async (req, res) => {
  const { nombre, descripcion, precio, categoria, fabricante, cantidad_en_existencia, unidad_de_medida, tipo_de_vehiculo, vida_util } = req.body;

  const producto = new Product();
  producto.nombre = nombre;
  producto.descripcion = descripcion;
  producto.precio = precio;
  producto.categoria = categoria;
  producto.fabricante = fabricante;
  producto.cantidad_en_existencia = cantidad_en_existencia;
  producto.unidad_de_medida = unidad_de_medida;
  producto.fecha_de_creacion = new Date();
  producto.usuario_de_creacion = "NombreUsuario"; // Puedes establecer el usuario aquí
  producto.fecha_de_actualizacion = new Date();
  producto.usuario_de_actualizacion = "NombreUsuario"; // Puedes establecer el usuario aquí
  producto.activo = 1; // Por ejemplo, activo por defecto
  producto.tipo_de_vehiculo = tipo_de_vehiculo;
  producto.vida_util = vida_util;

  console.log(producto);
  await producto.save();
  res.send("Producto creado");
};

const ObtenerProducto = async (req, res) => {
  const products = await Product.find();
  return res.json(products);
};

const ActualizarProducto = async (req, res) => {
  const { nombre, descripcion, precio, categoria, fabricante, cantidad_en_existencia, unidad_de_medida, tipo_de_vehiculo, vida_util } = req.body;

  const productId = parseInt(req.params.id);
  const product = await Product.findOne({ id: productId });

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

const EliminarProducto = async (req, res) => {
  const productId = parseInt(req.params.id);
  const result = await Product.delete(productId);

  if (result.affected === 0) res.send("Producto no encontrado");
  else res.send("Producto Borrado");
};

module.exports = { CrearProducto, ObtenerProducto, ActualizarProducto, EliminarProducto };
