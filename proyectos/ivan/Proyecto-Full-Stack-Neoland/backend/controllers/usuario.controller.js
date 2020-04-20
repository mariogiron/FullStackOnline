const UsuarioModel = require('../models/usuario.model');
const secret = require('../secret/secrets');
const { validationResult } = require('express-validator');// valida el body
const bcrypt = require('bcryptjs');//hashear contraseñas
const jwt = require('jsonwebtoken');//token para que se mantenga la sesión abierta del usuario

// CRRUD --> CREATE, READ, READ ID, UPLOAD, DELETE
// Crrud : CREATE --> crear un nuevo usuario
exports.UsuarioNuevo = async (req, res) => {
    //request, response --> solicitud, respuesta
    //try {
    const hash = await bcrypt.hash(req.body.password, 14);//hashear la contraseña para que tenga más seguridad}
    /* } catch (error) {
        res.send("Error en el hasha de la contraseña: " + error);
        return//ponemos el return para que no siga más
    } */
    const alias = req.body.alias;
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const edad = req.body.edad;
    const email = req.body.email;
    const password = hash;//passwoord hasheada
    const foto = req.body.foto;
    //! la fecha la incluye directamente mysql

    const errors = validationResult(req);//Ejecuta las validaciones 

    const UsuarioDuplicado = await UsuarioModel.UsuarioVerModel();

    try {
        if (!errors.isEmpty()) {

            return res.status(422).json({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {

            if (email !== secret.email_contacto) {
                if (UsuarioDuplicado[0].email !== email) {
                    const data = await UsuarioModel.UsuarioNuevoModel(alias, nombre, apellidos, edad, email, password, foto);
                    res.send({ "message": " 👨‍🎤 usuario creado !!!", "ID": data.insertId });

                } else {
                    res.send({ "message": " 👨‍🎤 usuario duplicado con el mismo email !!!", "email": email });
                };
            } else {
                const data = await UsuarioModel.UsuarioNuevoModel(alias, nombre, apellidos, edad, email, password, foto);
                res.send({ "message": " 👨‍🎤 usuario creado !!!", "ID": data.insertId });
            }
        };
    } catch (error) {
        res.send("Error UsuarioNuevoController:" + error);
    };
};
// cRrud : READ --> Leer o ver todos los usuarios
exports.UsuarioVer = async (req, res) => {
    try {
        const data = await UsuarioModel.UsuarioVerModel();
        res.send(data);
    } catch (error) {
        res.send("Error UsuarioVerController:" + error);
    };
};
// crRud : READ ID --> Leer o ver un usuarios por su id
exports.UsuarioVerId = async (req, res) => {
    const ID = req.params.ID;//sacamos del path param el id del usuario
    try {
        const data = await UsuarioModel.UsuarioVerIdModel(ID);
        if (data.lenght === 0) {
            res.status(400).send({ "message": `Ese Usuari@ con id = ${ID} no existe 😱` });
        } else {
            res.send(data);
        };
    } catch (error) {
        res.send("Error UsuarioVerIdController:" + error);
    };

};
//crrUd : UPLOAD --> actualizar usuario
exports.UsuarioCambiar = async (req, res) => {

    const ID = req.body.ID;
    const alias = req.body.alias;
    const nombre = req.body.nombre;
    const apellidos = req.body.apellidos;
    const edad = req.body.edad;
    const email = req.body.email;
    const password = req.body.password;
    const foto = req.body.foto;

    const errors = validationResult(req)//Ejecuta las validaciones

    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {
            const data = await UsuarioModel.UsuarioCambiarModel(ID, alias, nombre, apellidos, edad, email, password, foto);

            if (data.affectedRows > 0) {
                res.send({ "message": `👨‍🎤 Usuari@ ${alias} con id = ${ID} modificado con éxito!!!!!, Oh YEa 😎 !!` });
            } else {
                res.status(404).send({ "error": `Ese 👨‍🎤 Usuari@ con id = ${ID} no existe 😱` })
            };
        };
    } catch (error) {
        res.send("Error UsuarioCambiarControler: " + error);
    };
};

// crruD : DELETED ID --> borrar  un usuarios por su id
exports.UsuarioBorrar = async (req, res) => {
    const ID = req.params.ID;//sacamos del path param el id del usuario
    try {
        const data = await UsuarioModel.UsuarioBorrarModel(ID);
        if (data.affectedRows > 0) {
            res.send({ "message": `👨‍🎤 Usuari@ con id ${ID} borrado ☠️!!` })
        } else {
            res.status(404).send({ "error": `Ese Usuari@ con id = ${ID} no existe 😱` })
        }
        //res.send(data)
    } catch (error) {
        res.send("Error UsuarioBorrarId:" + error);
    };
};

//Extras  -------------------------------------------------------------------------------
//Obtener converaciones del usuario
exports.UsuarioConversacion = async (req, res) => {
    try {
        const data = await UsuarioModel.UsuarioVerModel();

        for (let conversacion of data) {
            const conversaciones = await UsuarioModel.UsuarioConversacionModel(conversacion.ID);
            conversacion.conversacionesRecibida = conversaciones;
        };
        res.send(data);
    } catch (error) {
        res.send("Error UsuarioConversacion:" + error);
    };
};

exports.UsuarioCompleto = async (req, res) => {
    try {
        const data = await UsuarioModel.UsuarioVerModel();
        for (let d of data) {
            const objeto = await UsuarioModel.UsuarioObjetoModel(d.ID);

            for (let o of objeto) {
                if (o.perdido == 1) {
                    d.objetoPerdido = objeto;
                }
                if (o.encontrado == 1) {
                    d.objetoEncontrado = objeto;
                }
                const tipo = await UsuarioModel.UsuarioObjetoFamiliaTipoModel(o.fk_objetotipo);

                o.tipo = tipo;
                for (let t of tipo) {
                    const familia = await UsuarioModel.UsuarioObjetoFamiliaModel(t.fk_objetofamilia);
                    t.familia = familia
                };
            };
        };

        for (let conversacion of data) {
            const conversaciones = await UsuarioModel.UsuarioConversacionModel(conversacion.ID);
            conversacion.conversacionesRecibida = conversaciones;

            for (let mensaje of conversaciones) {
                const emisorNombre = await UsuarioModel.UsuarioVerIdModel(mensaje.emisor);
                mensaje.emisorNombre = emisorNombre;
                const receptorNombre = await UsuarioModel.UsuarioVerIdModel(mensaje.receptor);
                mensaje.receptorNombre = receptorNombre;
                const mensajes = await UsuarioModel.UsuarioConversacionMensajeModel(mensaje.ID);
                mensaje.mensajes = mensajes;
                for (let m of mensajes) {
                    mensaje.mensajes = mensajes;
                    const emisorNombre = await UsuarioModel.UsuarioVerIdModel(m.emisor);
                    m.emisorNombre = emisorNombre;
                }

            };
            const conversacionesEnv = await UsuarioModel.UsuarioConversacionEnvidaModel(conversacion.ID);
            conversacion.conversacionesEnviada = conversacionesEnv;

            for (let mensaje of conversacionesEnv) {
                const emisorNombre = await UsuarioModel.UsuarioVerIdModel(mensaje.emisor);
                mensaje.emisorNombre = emisorNombre;
                const receptorNombre = await UsuarioModel.UsuarioVerIdModel(mensaje.receptor);
                mensaje.receptorNombre = receptorNombre;
                const mensajes = await UsuarioModel.UsuarioConversacionMensajeModel(mensaje.ID);
                mensaje.mensajes = mensajes;
                for (let m of mensajes) {
                    mensaje.mensajes = mensajes;
                    const emisorNombre = await UsuarioModel.UsuarioVerIdModel(m.emisor);
                    m.emisorNombre = emisorNombre;
                }
            };
        };
        res.send(data);
    } catch (error) {
        res.send("Error UsuarioCompleto:" + error);
    };
};

exports.UsuarioCompletoID = async (req, res) => {
    const ID = req.params.ID;//sacamos del path param el id del usuario
    try {
        const data = await UsuarioModel.UsuarioVerIdModel(ID);
        for (let d of data) {
            const objeto = await UsuarioModel.UsuarioObjetoModel(d.ID);

            for (let o of objeto) {
                if (o.perdido == 1) {
                    d.objetoPerdido = objeto;
                }
                if (o.encontrado == 1) {
                    d.objetoEncontrado = objeto;
                }
                const tipo = await UsuarioModel.UsuarioObjetoFamiliaTipoModel(o.fk_objetotipo);

                o.tipo = tipo;
                for (let t of tipo) {
                    const familia = await UsuarioModel.UsuarioObjetoFamiliaModel(t.fk_objetofamilia);
                    t.familia = familia
                };
            };
        };

        for (let conversacion of data) {
            const conversaciones = await UsuarioModel.UsuarioConversacionModel(conversacion.ID);
            conversacion.conversacionesRecibida = conversaciones;

            for (let mensaje of conversaciones) {
                const emisorNombre = await UsuarioModel.UsuarioVerIdModel(mensaje.emisor);
                mensaje.emisorNombre = emisorNombre;
                const receptorNombre = await UsuarioModel.UsuarioVerIdModel(mensaje.receptor);
                mensaje.receptorNombre = receptorNombre;
                const mensajes = await UsuarioModel.UsuarioConversacionMensajeModel(mensaje.ID);
                mensaje.mensajes = mensajes;
                for (let m of mensajes) {
                    mensaje.mensajes = mensajes;
                    const emisorNombre = await UsuarioModel.UsuarioVerIdModel(m.emisor);
                    m.emisorNombre = emisorNombre;
                }

            };
            const conversacionesEnv = await UsuarioModel.UsuarioConversacionEnvidaModel(conversacion.ID);
            conversacion.conversacionesEnviada = conversacionesEnv;

            for (let mensaje of conversacionesEnv) {
                const emisorNombre = await UsuarioModel.UsuarioVerIdModel(mensaje.emisor);
                mensaje.emisorNombre = emisorNombre;
                const receptorNombre = await UsuarioModel.UsuarioVerIdModel(mensaje.receptor);
                mensaje.receptorNombre = receptorNombre;
                const mensajes = await UsuarioModel.UsuarioConversacionMensajeModel(mensaje.ID);
                mensaje.mensajes = mensajes;
                for (let m of mensajes) {
                    mensaje.mensajes = mensajes;
                    const emisorNombre = await UsuarioModel.UsuarioVerIdModel(m.emisor);
                    m.emisorNombre = emisorNombre;
                }
            };
        };
        res.send(data);
    } catch (error) {
        res.send("Error UsuarioCompletoID:" + error);
    };
};

exports.UsuarioLogin = async (req, res) => {
    //const ID = req.body.ID;
    //  const alias = req.body.alias;
    const nombre = req.body.nombre;
    const email = req.body.email;
    const password = req.body.password;
    console.log(password);
    const errors = validationResult(req);//Ejecuta las validaciones 

    try {
        if (!errors.isEmpty()) {
            return res.status(422).json({ "error": "El body esta mal formado", "Explicacion": errors });
        } else {
            const usuario = await UsuarioModel.UsuarioLoginModel(nombre, email);
            /* console.log(usuario[0]);
            console.log(usuario.length);
            console.log(usuario[0].password);
            console.log(password); */
            if (usuario.length > 0) {
                const coincidencia = bcrypt.compareSync(password, usuario[0].password);
                console.log(coincidencia);
                /* console.log("coincidencia: " + coincidencia)
                console.log("usuario[0].password: " + usuario[0].password) */
                if (coincidencia) {
                    jwt.sign(
                        { "userID": usuario.ID },
                        secret.jwt_clave,
                        (error, token) => {
                            if (error) {
                                res.send("Error Token: " + error);
                            } else {
                                res.cookie("cookie_lostthing", token);
                                res.send({ "message": "👍 Ok, tu contraseña coincide - Estás autorizado" });
                            };
                        });
                    //res.send({ "message": " 👍 Ok, tu contraseña coincide" })
                } else {
                    res.status(400).send({ "error": " 🙅 Las contraseñas no coinciden" })
                };

            } else {
                return res.json({ "error": " 👨‍🎤 El usuario nombre y email no coincide" });
            }
        };
    } catch (error) {
        res.send("Error UsuarioCambiarControler: " + error);
    };
};
/* const createToken = (user) => {
    const obj = {
        id: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(15, 'days').unix()
    }
    return jwt.sign(obj, secret.jwt_clave);
} */