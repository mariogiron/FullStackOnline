const AlarmaModel = require('../models/alarma.model');
const { validationResult } = require('express-validator');// valida el body

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo objetos
exports.AlarmaNuevo = async (req, res) => {
    const foto = req.body.foto;
    const titulo = req.body.titulo;
    const texto = req.body.texto;

    const errors = validationResult(req);//Ejecuta las validaciones

    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {
            const data = await AlarmaModel.AlarmaNuevoModel(foto, titulo, texto);
            res.send({ "message": " 🐨 Alarma creada !!!", "ID": data.insertId });
        };
    } catch (error) {
        res.send("Error AlarmaNuevoModel: " + error);
    };
};

// cRrud : READ --> Leer o ver todos los objetos
exports.AlarmaVer = async (req, res) => {
    try {
        const data = await AlarmaModel.AlarmaVerModel();
        res.send(data);
    } catch (error) {
        res.send("Error AlarmaVerModel: " + error);
    };
};

// crRud : READ --> Leer o ver un objetos por su id
exports.AlarmaVerId = async (req, res) => {
    const ID = req.params.ID;

    try {
        const data = await AlarmaModel.AlarmaVerIdModel(ID);
        res.send(data);
    } catch (error) {
        res.send("Error AlarmaVerId: " + error);
    }
}

// crrUd : UPLOAD --> actualizar objetos por su id
exports.AlarmaCambiar = async (req, res) => {
    const ID = req.body.ID;
    const foto = req.body.foto;
    const titulo = req.body.titulo;
    const texto = req.body.texto;

    const errors = validationResult(req);//Ejecuta las validaciones

    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {
            const data = await AlarmaModel.AlarmaCambiarModel(ID, foto, titulo, texto);

            if (data.affectedRows > 0) {
                res.send({ "message": `🐨 Alarma ${titulo} con id = ${ID} modificado con éxito!!!!!, Oh YEa 😎 !!` });
            } else {
                res.status(404).send({ "error": `Ese 🐨 Alarma con id = ${ID} no existe 😱` });
            };
        };
    } catch (error) {
        res.send("Error AlarmaCambiarController: " + error);
    };
};

// crruD : DELETED ID --> borrar  un objetos por su id
exports.AlarmaBorrar = async (req, res) => {
    const ID = req.params.ID;

    try {
        const data = await AlarmaModel.AlarmaBorrarModel(ID);
        if (data.affectedRows > 0) {
            res.send({ "message": `🐨 Alarma con id ${ID} borrado ☠️!!` });
        } else {
            res.status(404).send({ "error": `Esa 🐨 Alarma con id = ${ID} no existe 😱` })
        };
    } catch (error) {
        res.send("Error AlarmaBorrarController: " + error);
    };
};
