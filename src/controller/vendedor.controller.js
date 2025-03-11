const modeloUsuario = require('../models/usuario.model');
const modeloVendedor = require('../models/vendedor.model');

exports.registrar = async (req, res)=>{
    const nuevoUsuario = new modeloUsuario({
        correo: "juanitopro",
        contrasena: "1234567",
        rol: "Vendedor"
    })
    let resul=await nuevoUsuario.save();
    console.log(resul)


const nuevoVendedor = new modeloVendedor({
    nombre: "pedro",
    documento: "1234567",
    ventas: 0,
    userId: resul._Id
})
let resultado = await nuevoVendedor.save()
console.log(resultado)
res.end()

}