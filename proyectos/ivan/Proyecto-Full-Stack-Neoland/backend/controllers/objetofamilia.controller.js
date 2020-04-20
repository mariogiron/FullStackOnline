const ObjetoFamiliaModel = require('../models/objetofamilia.model');
const ObjetoTipoModel = require('../models/objetotipo.model');
const { validationResult } = require('express-validator');// valida el body

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo objetoFamilia
exports.ObjetioFamiliaNuevo = async (req, res) => {
    const familia = req.body.familia;
    const color = req.body.color;

    const errors = validationResult(req);//Ejecuta las validaciones 

    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {
            const data = await ObjetoFamiliaModel.ObjetoFamiliaNuevoModel(familia, color);
            res.send({ "message": " 👨‍👨‍👦‍👦 objetofamilia creada !!!", "ID": data.insertId });
        };
    } catch (error) {
        res.send("Error ObjetoFamiliaNuevoController: " + error);
    };
};
// cRrud : READ --> Leer o ver todos los objetoFamilia
exports.ObjetoFamiliaVer = async (req, res) => {
    try {
        const data = await ObjetoFamiliaModel.ObjetoFamiliaVerModel();
        res.send(data);
    } catch (error) {
        res.send("Error ObjetoFamiliaVerController: " + error);
    };
};

// crRud : READ --> Leer o ver un objetoFamilia por su id
exports.ObjetoFamiliaVerId = async (req, res) => {
    const ID = req.params.ID;

    try {
        const data = await ObjetoFamiliaModel.ObjetoFamiliaVerIdModel(ID);
        res.send(data);
    } catch (error) {
        res.send("Error ObjetoFamiliaVerIdController" + error);
    };
};

// crrUd : UPLOAD --> actualizar objetoFamilia por su id
exports.ObjetoFamiliaCambiar = async (req, res) => {
    const ID = req.body.ID;
    const familia = req.body.familia;
    const color = req.body.color;

    const errors = validationResult(req);//Ejecuta las validaciones

    try {

        if (!errors.isEmpty()) {
            return res.status(422).json({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {
            const data = await ObjetoFamiliaModel.ObjetoFamiliaCambiarModel(ID, familia, color);

            if (data.affectedRows > 0) {
                res.send({ "message": `👨‍👨‍👦‍👦 objetodamilia con id = ${ID} modificado con éxito!!!!!, Oh YEa 😎 !!` });
            } else {
                res.status(404).send({ "error": `Ese 👨‍👨‍👦‍👦 objetodamilia con id = ${ID} no existe 😱` })
            };
        };
    } catch (error) {
        res.send("Error ObjetoFamiliaCambiar: " + error);
    };
};
// crruD : DELETED ID --> borrar  un objetoFamilia por su id
exports.ObjetoFamiliaBorrar = async (req, res) => {
    const ID = req.params.ID;

    try {
        const data = await ObjetoFamiliaModel.ObjetoFamiliaBorrarModel(ID);
        if (data.affectedRows > 0) {
            res.send({ "message": `👨‍👨‍👦‍👦 objetofamilia con id ${ID} borrado ☠️!!` });
        } else {
            res.status(404).send({ "error": `Ese 👨‍👨‍👦‍👦 objetofamili con id = ${ID} no existe 😱` })
        };
    } catch (error) {
        res.send("Error ObjetoFamiliaBrorrar: " + error);
    };
};
//Extras-------------------------------------------------------
//Relacion entre objeto tipo y objeto familia
exports.ObjetoFamiliaTipo = async (req, res) => {

    try {
        const familia = await ObjetoFamiliaModel.ObjetoFamiliaVerModel();

        for (let f of familia) {
            const tipo = await ObjetoFamiliaModel.ObjetoFamiliaTipoModel(f.ID);
            f.tipo = tipo;
            console.log(f.ID);
        }
        const data = familia;
        res.send(data);
    } catch (error) {
        res.send("Error ObjetoFamiliaTipo: " + error);
    }

};