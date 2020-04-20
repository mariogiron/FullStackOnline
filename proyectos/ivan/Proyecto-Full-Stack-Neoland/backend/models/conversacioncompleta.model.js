const connection = require('./db.model');
const 

//recojemos toda la conversacion de un usuario a otro
/* exports.ConversionCompletaModel = (parametros¿?) => {
    return new Promise((resolve, reject) => {
        const data = conncection.query(`query`)
        .then(resolve(data))
        .catch(reject(error));
        );
    };
}
*/
        //!PROCESO --> recojer datos totales de la conversación
        /*
        conversacion(ID, emisor, receptor, asunto, fecha_inicio, fk_usuario)
        mensaje(ID, emisor, fecha, texto)
        "anuncio" se denomian al objeto añadido en el mapa
        RELACION
            conversiacion = con, mensaje = men
            con.ID
            con.emisor --> persona que responde al "anuncio" del objeto perdido
            con.receptor = user.ID --> Dueño del anuncio
            con.asunto
            con.fecha_inicio
            con.fk_usuario = user.ID = con.receptor  --> Dueño del anuncio 
    
            1º mensaje    
            men.ID --> marca el orden
            men.emisor = //*con.emisor --> empieza conversacion
            men.fecha --> marca el orden
            men.texto
            men.fk_conversacion = con.ID --> se mantiene 
   
           2º mensaje
            men.ID --> marca el orden, porque si el id del mensaje es mayor que otro de la misma conversacion, este significa queha sido posterior
            men.emisor = //*con.receptor --> //!!continua conversaion
            if(men.emisor == con.receptor){
                contesta al mensaje
            }else (men.emisor != con.receptor && men.emisor == con.emisor){
                insiste en el mensaje
            }
            men.fecha --> marca el orden, segundo registro de orden por si falla el ID.
            men.texto
            men.fk_conversacion = con.ID --> se mantien
        
        ¿cómo sabemos a que conversacion pertenece el mensaje?
        por el ID de la conversacion = fk_conversacion
        ¿cómo sabemos si la conversaión la empieza el anunciante?
        siempre empezará la conversación el emisor != del usuario ID de quien pone el anuncio o el objeto en el mapa.
        --> de esta forma diferenciamos entre mensaje enviado y mensaje recibido en el "buzón de envió".
            */



