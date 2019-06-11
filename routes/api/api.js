const express = require('express');
const router = express.Router();

var RutaReceta = require('./receta');

router.use('/receta', RutaReceta);

module.exports = router;