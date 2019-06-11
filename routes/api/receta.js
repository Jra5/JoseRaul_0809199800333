const express = require('express');
const router = express.Router();

var uuid = require('uuid/v4');

var ColeccionReceta = [];

var EstructuraReceta = {
    "id": "uuid",
    "receta":'',
    "precio":0,
    "tipo":'',
    "observacion":'',
    "estado":''
}

ColeccionReceta.push(
    Object.assign(
        {},
        EstructuraReceta,
        {
            id:uuid(),
            receta:'Receta1',
            precio:100,
            tipo:'Vegetariana',
            observacion:'Muy Saludable',
            estado:'ACT'
        })
);


module.exports = router;