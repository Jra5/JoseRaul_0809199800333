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


//POST
router.post('/', (req, res, next) => {
    var newReceta = Object.assign(
        {},
        EstructuraReceta,{
            id:uuid()},
            req.body
    );
    ColeccionReceta.push(newReceta);
    res.status(200).json(newReceta);
});


//PUT
router.put('/:id', (req, res, next) => {
    var id = req.params.id;
    var ModificarReceta = {};
    var OriginalReceta = {};

    ColeccionReceta = ColeccionReceta.map( (e, i) => {
        if (e.id === id){
            OriginalReceta = Object.assign({}, e);
            return ModificarReceta = Object.assign({}, e, req.body);
        }
        return e;
    });
    res.status(200).json({ o: OriginalReceta, m:ModificarReceta});
});


//DELETE
router.delete('/:id', (req, res, next) => {
    var id = req.params.id;
    var BorrarReceta = {};

    ColeccionReceta = ColeccionReceta.filter((e,i) => {
        if (e.id === id){
            BorrarReceta = Object.assign({}, e);
            return false;
        }
        return true;
    });
    res.status(200).json({d:BorrarReceta, c:ColeccionReceta});
});

module.exports = router;