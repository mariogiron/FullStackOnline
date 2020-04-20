const ObjetoTipoModel = require('../models/objetotipo.model');
const ObjetoFamiliaModel = require('../models/objetofamilia.model');
const { validationResult } = require('express-validator');// valida el body

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo objetotipo
exports.ObjetoTipoNuevo = async (req, res) => {
    const tipo = req.body.tipo;
    const icono = req.body.icono;

    const errors = validationResult(req);//Ejecuta las validaciones 

    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {
            const data = await ObjetoTipoModel.ObjetoTipoNuevoModel(tipo, icono);
            res.send({ "message": " 🌟 ObjetoTipo creado !!!", "ID": data.insertId });
        };
    } catch (error) {
        res.send("Error ObjetiTipoNuevoController: " + error);
    }
}

// cRrud : READ --> Leer o ver todos los objetotipo
exports.ObjetoTipoVer = async (req, res) => {
    try {
        const data = await ObjetoTipoModel.ObjetoTipoVerModel();
        res.send(data);
    } catch (error) {
        res.send("Error ObjetoTipoVerController: " + error);
    };
};

// crRud : READ --> Leer o ver un objetotipo por su id
exports.ObjetoTipoVerId = async (req, res) => {
    const ID = req.params.ID;

    try {
        const data = await ObjetoTipoModel.ObjetoTipoVerIdModel(ID);
        res.send(data);
    } catch (error) {
        res.send("Error ObjetoTipoVerIdController: " + error);
    };
};

// crrUd : UPLOAD --> actualizar objetotipo por su id
exports.ObjetoTipoCambiar = async (req, res) => {
    const ID = req.body.ID;
    const tipo = req.body.tipo;
    const icono = req.body.icono;

    const errors = validationResult(req);//Ejecuta las validaciones

    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {
            const data = await ObjetoTipoModel.ObjetoTipoCambiarModel(ID, tipo, icono);

            if (data.affectedRows > 0) {
                res.send({ "message": `🌟 ObjetoTipo ${tipo} con id = ${ID} modificado con éxito!!!!!, Oh YEa 😎 !!` });
            } else {
                res.status(404).send({ "error": `Ese 🌟 ObjetoTipo con id = ${ID} no existe 😱` })
            };
        };
    } catch (error) {
        res.send("Error ObjetoTipoCambiar: " + error);
    };
};

// crruD : DELETED ID --> borrar  un objetotipo por su id
exports.ObjetoTipoBorrar = async (req, res) => {
    const ID = req.params.ID;

    try {
        const data = await ObjetoTipoModel.ObjetoTipoBorrarModel(ID);
        if (data.affectedRows > 0) {
            res.send({ "message": `🌟 ObjetoTipo con id ${ID} borrado ☠️!!` });
        } else {
            res.status(404).send({ "error": `Ese 🌟 ObjetoTipo con id = ${ID} no existe 😱` })
        };
    } catch (error) {
        res.send("Error ObjetoTipoBorrar: " + error);
    };
};