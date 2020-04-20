const ConversacionModel = require('../models/conversacion.model');
const UsuarioModel = require('../models/usuario.model');
const UsuarioController = require('../controllers/usuario.controller');
//const MensajeModel = require('../models/mensaje.model');
const { validationResult } = require('express-validator');// valida el body

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo conversacion
exports.ConversacionNuevo = async (req, res) => {
    const emisor = req.body.emisor;
    const receptor = req.body.receptor;
    const asunto = req.body.asunto;

    try {
        const errors = validationResult(req)//Ejecuta las validaciones 
        if (!errors.isEmpty()) {
            return res.status(422).json({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {
            const data = await ConversacionModel.ConversacionNuevoModel(emisor, receptor, asunto);
            res.send({ "message": " 📪 conversacion creada !!!", "ID": data.insertId });
        }
    } catch (error) {
        res.send("Error ConversacionNuevoController: " + error)
    };
};

// cRrud : READ --> Leer o ver todos los conversacion
exports.ConversacionVer = async (req, res) => {
    try {
        const data = await ConversacionModel.ConversacionVerModel();
        res.send(data);
    } catch (error) { res.send("Error ConversacionVerController: " + error) };
};

// crRud : READ --> Leer o ver un conversacion por su id
exports.ConversacionVerId = async (req, res) => {
    const ID = req.params.ID;
    try {
        const data = await ConversacionModel.ConversacionVerIdModel(ID);
        res.send(data);
    } catch (error) {
        res.send("Error ConversacionVerId: " + error);
    }
};
// crrUd : UPLOAD --> actualizar conversacion por su id
exports.ConversacionCambiar = async (req, res) => {
    const ID = req.body.ID;
    const emisor = req.body.emisor;
    const receptor = req.body.receptor;
    const asunto = req.body.asunto;

    const errors = validationResult(req);//Ejecuta las validaciones

    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {
            const data = await ConversacionModel.ConversacionCambiarModel(ID, emisor, receptor, asunto);

            if (data.affectedRows > 0) {
                res.send({ "message": ` 📪 conversacion ${asunto} con id = ${ID} modificado con éxito!!!!!, Oh YEa 😎 !!;` });
            } else {
                res.status(404).send({ "error": `Ese 📪 conversacion con id = ${ID} no existe 😱` })
            };
        };
    } catch (error) {
        res.send("Error ConversacionCambiarController: " + error);
    };
};
// crruD : DELETED ID --> borrar  un conversacion por su id
exports.ConversacionBorrar = async (req, res) => {
    const ID = req.params.ID;

    try {
        const data = await ConversacionModel.ConversacionBorrarModel(ID);
        if (data.affectedRows > 0) {
            res.send({ "message": `📪 conversacion con id ${ID} borrado ☠️!!` });
        } else {
            res.status(404).send({ "error": `Esa 📪 conversacion con id = ${ID} no existe 😱` })
        };
    } catch (error) {
        res.send("Error X: " + error);
    };
};
//Extras ------------- obtener todas las conversaciones
exports.ConversacionMensaje = async (req, res) => {

    try {
        //console.log("entro1");
        const data = await ConversacionModel.ConversacionVerModel();

        for (let d of data) {
            /* console.log("entro2"); */
            const emisornombre = await UsuarioModel.UsuarioVerIdModel(d.emisor);
            d.emisorNombre = emisornombre;
            const receptornombre = await UsuarioModel.UsuarioVerIdModel(d.receptor);
            d.receptorNombre = receptornombre;
            const mensajes = await ConversacionModel.ConversacionMensajeModel(d.ID);
            for (let m of mensajes) {
                d.mensajes = mensajes;
                const emisorNombre = await UsuarioModel.UsuarioVerIdModel(m.emisor);
                m.emisorNombre = emisorNombre;
            }
        };
        res.send(data);
    } catch (error) { res.send("Error ConversacionMensaje " + error) };
};

