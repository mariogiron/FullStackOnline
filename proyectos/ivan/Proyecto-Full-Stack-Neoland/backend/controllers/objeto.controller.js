const ObjetoModel = require('../models/objeto.model');
const ObjetoFamiliaModel = require('../models/objetofamilia.model');
const ObjetoTipoModel = require('../models/objetotipo.model');
const UsuarioModel = require('../models/usuario.model');

const { validationResult } = require('express-validator');// valida el body

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo objetos
exports.ObjetoNuevo = async (req, res) => {

    const nombre = req.body.nombre;
    const foto = req.body.foto;
    const descripcion = req.body.descripcion;
    const perdido = req.body.perdido;
    const encontrado = req.body.encontrado;
    const fecha_perdida = req.body.fecha_perdida;
    const latitud_perdida = req.body.latitud_perdida;
    const longitud_perdida = req.body.longitud_perdida;
    const fecha_encontrado = req.body.fecha_encontrado;
    const latitud_encontrado = req.body.latitud_encontrado;
    const longitud_encontrado = req.body.longitud_encontrado;

    const errors = validationResult(req);//Ejecuta las validaciones 

    try {
        if (!errors.isEmpty()) {
            res.status(400).send({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {
            const data = await ObjetoModel.ObjetoNuevoModel(nombre, foto, descripcion, perdido, encontrado, fecha_perdida, latitud_perdida, longitud_perdida, fecha_encontrado, latitud_encontrado, longitud_encontrado);
            res.send({ "message": " 😎 Objeto creado !!!", "ID": data.insertId });
        };
    } catch (error) {
        res.send("Error ObjetoNuevoModel; " + error);
    };
};
// cRrud : READ --> Leer o ver todos los objetos
exports.ObjetoVer = async (req, res) => {
    try {
        const data = await ObjetoModel.ObjetoVerModel();
        res.send(data);
    } catch (error) {
        res.send("Error ObjetoVerModel: " + error);
    };
};

// crRud : READ --> Leer o ver un objetos por su id
exports.ObjetoVerId = async (req, res) => {
    const ID = req.params.ID;

    try {
        const data = await ObjetoModel.ObjetoVerIdModel(ID);
        res.send(data);
    } catch (error) {
        res.send("Error ObjetoVerIdController:" + error);
    };
};

// crrUd : UPLOAD --> actualizar objetos por su id
exports.ObjetoCambiar = async (req, res) => {
    const ID = req.body.ID;
    const nombre = req.body.nombre;
    const foto = req.body.foto;
    const descripcion = req.body.descripcion;
    const perdido = req.body.perdido;
    const encontrado = req.body.encontrado;
    const fecha_perdida = req.body.fecha_perdida;
    const latitud_perdida = req.body.latitud_perdida;
    const longitud_perdida = req.body.longitud_perdida;
    const fecha_encontrado = req.body.fecha_encontrado;
    const latitud_encontrado = req.body.latitud_encontrado;
    const longitud_encontrado = req.body.longitud_encontrado;

    const errors = validationResult(req);//Ejecuta las validaciones

    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {
            const data = await ObjetoModel.ObjetoCambiarModel(ID, nombre, foto, descripcion, perdido, encontrado, fecha_perdida, latitud_perdida, longitud_perdida, fecha_encontrado, latitud_encontrado, longitud_encontrado);
            if (data.affectedRows > 0) {
                res.send({ "message": `😎 Objeto ${nombre} con id = ${ID} modificado con éxito!!!!!, Oh YEa 😎 !!` });
            } else {
                res.status(404).send({ "error": `Ese 😎 Objeto con id = ${ID} no existe 😱` })
            };
        };
    } catch (error) {
        res.send("Error ObjetoCambiarController: " + error);
    };
};

// crruD : DELETED ID --> borrar  un objetos por su id
exports.ObjetoBorrar = async (req, res) => {
    const ID = req.params.ID;

    try {
        const data = await ObjetoModel.ObjetoBorrarModel(ID);
        if (data.affectedRows > 0) {
            res.send({ "message": `👨‍🎤 Objeto con id ${ID} borrado ☠️!!` });
        } else {
            res.status(404).send({ "error": `Ese Objeto con id = ${ID} no existe 😱` });
        };
    } catch (error) {
        res.send("Error ObjetBorrarController: " + error);
    };
};

//Extras ---------------------------------------------------
//realacion entre objeto y la familia
exports.ObjetoCompleto = async (req, res) => {
    try {

        const objeto = await ObjetoModel.ObjetoVerModel();

        for (let o of objeto) {
            const usuario = await UsuarioModel.UsuarioVerIdModel(o.fk_usuario);
            o.usuario = usuario;
            const tipo = await ObjetoModel.ObjetoTipoModel(o.fk_objetotipo);
            o.tipo = tipo;
            for (let t of tipo) {
                const familia = await ObjetoFamiliaModel.ObjetoFamiliaVerIdModel(t.fk_objetofamilia);
                t.familia = familia
            }
        }
        const data = objeto;
        res.send(data);
    } catch (error) {
        res.send("Error ObjetoFamilia: " + error)
    }
}
/* exports.ObjetoCompleto = async (req, res) => {
    try {

        const objeto = await ObjetoModel.ObjetoVerModel();

        for (let o of objeto) {

            const tipo = await ObjetoModel.ObjetoTipoModel(o.fk_objetotipo);
            o.tipo = tipo;
            for (let t of tipo) {
                const familia = await ObjetoFamiliaModel.ObjetoFamiliaVerIdModel(t.fk_objetofamilia);
                t.familia = familia
            }
        }
        const data = objeto;
        res.send(data);
    } catch (error) {
        res.send("Error ObjetoFamilia: " + error)
    }
} */