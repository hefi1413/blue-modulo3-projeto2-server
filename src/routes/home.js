const express = require('express');
const router = express.Router();

const paletasController = require('../controller/paletasController');

//
// find todas paletas
router.get('/find', paletasController.findAll);
//
// find by id
router.get('/find/:id', paletasController.find);
//
// create
router.post('/create', paletasController.create);

// put
router.put('/update/:id', paletasController.update);

// delete
router.delete('/delete/:id', paletasController.delete);


module.exports = router;
