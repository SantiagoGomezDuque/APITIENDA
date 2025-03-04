const exp = require('express');
const modeloProducto = require('./src/models/producto');

require('dotenv').config();
const enrutamiento = require('./routes/router')



const app = exp();
app.listen(process.env.PORT,()=>{
    console.log('servidor ejecutandose en '+process.env.PORT)
})

app.use('/v1', enrutamiento)