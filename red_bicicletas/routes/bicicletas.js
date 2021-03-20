var express = require('express');
var router = express.Router();
var bicicletaController = require('../controllers/bicicleta');

router.get('/', bicicletaController.bicicleta_list);
//crear bici
router.get('/create', bicicletaController.bicicleta_create_get);
router.post('/create', bicicletaController.bicicleta_create_post);
//modificar bici
router.get('/:id/update', bicicletaController.bicicleta_update_get);
router.post('/:id/update', bicicletaController.bicicleta_update_post);
//eliminar bici
router.post('/:id/delete', bicicletaController.bicicleta_delete_post);
//mostrar bici
router.get('/:id/show', bicicletaController.bicicleta_show_get);

module.exports = router;