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

//METODOS POSTMAN

//GET 
router.get('/', (req, res, next) => {
    res.status(200).json(ColeccionReceta);
});

//GET obteniéndolo mediante ID
router.get('/:id', (req, res, next) => {
    if (!req.params.id) return next;

    var id = req.params.id;
    var Receta = ColeccionReceta.filter((e,i) =>{
        return (e.id === id);
    });

    if (Receta.lenght > 0){
        res.status(200).json(Receta[0]);
    }
    else{
        res.status(403).json({});
    }
});




module.exports = router;