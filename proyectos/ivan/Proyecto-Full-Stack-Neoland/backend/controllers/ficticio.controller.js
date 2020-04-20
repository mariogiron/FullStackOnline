const FicticioModel = require('../models/ficticio.model');
const { validationResult } = require('express-validator');// valida el body

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo objetos
exports.FicticioNuevo = async (req, res) => {
    const nombre = req.body.nombre;
    const foto = req.body.foto;
    const icono = req.body.icono;
    const descripcion = req.body.descripcion;
    const latitud = req.body.latitud;
    const longitud = req.body.longitud;

    const errors = validationResult(req);//Ejecuta las validaciones

    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {
            const data = await FicticioModel.FicticioNuevoModel(nombre, foto, icono, descripcion, latitud, longitud);
            res.send({ "message": " 🐨 Ficticio creada !!!", "ID": data.insertId });
        };
    } catch (error) {
        res.send("Error FicticioNuevoController: " + error);
    };
};

// cRrud : READ --> Leer o ver todos los objetos
exports.FicticioVer = async (req, res) => {
    try {
        const data = await FicticioModel.FicticioVerModel();
        res.send(data);
    } catch (error) {
        res.send("Error FicticioVerController: " + error);
    };
};

// crRud : READ --> Leer o ver un objetos por su id
exports.FicticioVerId = async (req, res) => {
    const ID = req.params.ID;

    try {
        const data = await FicticioModel.FicticioVerIdModel(ID);
        res.send(data);
    } catch (error) {
        res.send("Error FicticioVerIdController: " + error);
    }
}

// crrUd : UPLOAD --> actualizar objetos por su id
exports.FicticioCambiar = async (req, res) => {
    const ID = req.body.ID;
    const nombre = req.body.nombre;
    const foto = req.body.foto;
    const icono = req.body.icono;
    const descripcion = req.body.descripcion;
    const latitud = req.body.latitud;
    const longitud = req.body.longitud;

    const errors = validationResult(req);//Ejecuta las validaciones

    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {
            const data = await FicticioModel.FicticioCambiarModel(ID, nombre, foto, icono, descripcion, latitud, longitud);

            if (data.affectedRows > 0) {
                res.send({ "message": `🐨 Ficticio ${titulo} con id = ${ID} modificado con éxito!!!!!, Oh YEa 😎 !!` });
            } else {
                res.status(404).send({ "error": `Ese 🐨 Ficticio con id = ${ID} no existe 😱` });
            };
        };
    } catch (error) {
        res.send("Error FicticioCambiarController: " + error);
    };
};

// crruD : DELETED ID --> borrar  un objetos por su id
exports.FicticioBorrar = async (req, res) => {
    const ID = req.params.ID;

    try {
        const data = await FicticioModel.FicticioBorrarModel(ID);
        if (data.affectedRows > 0) {
            res.send({ "message": `🐨 Ficticio con id ${ID} borrado ☠️!!` });
        } else {
            res.status(404).send({ "error": `Esa 🐨 Ficticio con id = ${ID} no existe 😱` })
        };
    } catch (error) {
        res.send("Error FicticioBorrarController: " + error);
    };
};
