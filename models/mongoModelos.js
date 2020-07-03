const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({
    nombre: String,
    cantidad: Number,
    costo: Number,
    descripcion: String
  });

  const Producto = mongoose.model("Producto", ProductoSchema)

  module.exports = {
    Producto
  }