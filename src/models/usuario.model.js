const mongo = require("../config/connection");

const schemaUsuario = new mongo.Schema({
    correo: {
        type: String,
        required: true,
        minLength: 5
    },
    contrasena: {
        type: String,
        required: true,
        minLength: 7
    },
    rol: {
        type: String,
        enum: ['Invitado', 'Vendedor', 'Cliente'],
        default: 'Invitado'
    }
}, {versionKey: false});

const modeloUsuario = mongo.model("usuario", schemaUsuario);

module.exports = modeloUsuario;