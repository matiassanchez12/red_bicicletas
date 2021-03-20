var Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list = function(req, res){
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
}

exports.bicicleta_create = function(req, res){
    
    var AuxBiciNueva = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    
    AuxBiciNueva.ubicacion = [req.body.lat, req.body.lng];

    Bicicleta.add(AuxBiciNueva);

    res.status(200).json({
        bicicletas: AuxBiciNueva
    });
}

exports.bicicleta_update = function(req, res){
    
    var AuxBici = Bicicleta.findById(req.body.id);
    
    AuxBici.id = req.body.id;
    AuxBici.color = req.body.color;
    AuxBici.modelo = req.body.modelo;
    AuxBici.ubicacion = [req.body.lat, req.body.lng]

    res.status(200).json({
        bicicletas: AuxBici
    });
}

exports.bicicleta_delete = function(req, res){
    
    Bicicleta.removeById(req.body.id);

    res.status(204).send();
}