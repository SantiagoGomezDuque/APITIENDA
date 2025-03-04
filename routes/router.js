const exp = require('express')
const modeloProducto = require("../src/models/producto")
const router = exp.Router();
const controladorProductos = require("../src/controller/producto.controller")

router.get('/productos', controladorProductos.consultar)

module.exports= router