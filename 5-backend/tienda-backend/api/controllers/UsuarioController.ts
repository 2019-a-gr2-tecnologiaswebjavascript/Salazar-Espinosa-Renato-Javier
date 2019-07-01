/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
declare var Producto;

module.exports = {
  // req = peticion = request
  // res = respuesta = response
  // URL EXPRESSJS => https://expressjs.com/es/4x/api.html
  // REQUEST SAILSJS => https://sailsjs.com/documentation/reference/request-req
  // RESPONSE SAILSJS => https://sailsjs.com/documentation/reference/request-req
  saludar: async (req, res) => {
    console.log(__dirname);
    const parametros = req.allParams();
    // req.param('nombre'); => 'Adrian'
    console.log(parametros);
    const nombre = parametros.nombre;
    if (nombre) {
      // PROMESA!!!! -> SYNC
      try {
        const productoEncontrado = await Producto.find({
          where: {
            id: 1
          },
          skip: 0,
          limit: 5,
          sort: 'id ASC' // 'id DESC'
        });
        return res.ok({
          mensaje: `Bienvenido ${nombre}`,
          productoEncontrado: productoEncontrado
        });
      } catch (e) {
        console.error(e);
        return res.serverError({
          error: 500,
          mensaje: 'Error del servidor'
        });
      }
    } else {
      return res.serverError({
        error: 400,
        mensaje: 'Peticion invalida'
      });
    }
  },
  upload: (req, res) => {
    const parametros = req.allParams();

    const opcionesCarga = {
      maxBytes: 10000000,
      dirname: __dirname + '/../../archivos'
    };

    if (parametros.idProducto) {
      req.file('imagen').upload(opcionesCarga, async (error, archivosSubidos) => {
        if (error) {
          return res.serverError({
            error: 500,
            mensaje: 'Error subiendo archivo de imagen'
          });
        }
        const noExistenArchivos = archivosSubidos.length === 0;
        if (noExistenArchivos) {
          return res.badRequest({
            error: 400,
            mensaje: 'No envia ningun archivo'
          });
        } else {
          console.log(archivosSubidos);

          try {
            const archivo = archivosSubidos[0];
            const respuestaActualizar = await Producto.updateOne({
              id: parametros.idProducto
            }).set({
              tamanio: archivo.size,
              descriptorArchivo: archivo.fd,
              nombreArchivo: archivo.filename,
              tipo: archivo.type
            });
            return res.ok({
              mensaje: `Se actualizo el producto ${parametros.idProducto}`
            });
          } catch (e) {
            return res.serverError({
              error: 500,
              mensaje: 'Error del servidor'
            });
          }

          // LOGICA NEGOCIO
          // GUARDAR LOS METADATOS DEL ARCHIVO
          // (ID PRODUCTO)

          return res.ok({ mensaje: 'ok' });
        }
      });
    } else {
      return res.error({
        error: 400,
        mensaje: 'No envia id de producto'
      });
    }
  },
  download: async (req, res) => {
    const parametros = req.allParams();
    if (parametros.idProducto) {
      try {
        const productoEncontrado = await Producto.findOne({
          id: parametros.idProducto
        });

        if (!productoEncontrado) {
          return res.badRequest({
            error: 400,
            mensaje: 'No existe el producto'
          });
        } else {
          if (productoEncontrado.descriptorArchivo) {
            return res.download(
              productoEncontrado.descriptorArchivo,
              productoEncontrado.nombreArchivo
            );
          } else {
            return res.badRequest({
              error: 400,
              mensaje: 'No existe el fd'
            });
          }
        }
      } catch (e) {
        console.log(e);
        return res.serverError({
          error: 500,
          mensaje: 'No envia el id del producto'
        });
      }
    } else {
      return res.serverError({
        error: 400,
        mensaje: 'No envia el id del producto'
      });
    }
  }
};

//protocolo hhtp
// estandar : restfull web services
//protolo  + ip + puerto+opcional segmento url+modelo  ==> standar de un modelo
//http://localHost:1337/Usuario

/* 1. Crear Dato
POST
Para craea un dato se debe hacer un Post  A http://localHost:1337/Usuario
se manda los parametros a travez de los parametros de cuerpo
BODY PARAMS.
La repuesta del API RESFULL nos va a responder con Respuesta->Nuevo Registro*/

/* 2. Buscar todos los Datos
GET
 A http://localHost:1337/Usuario

respuesta -> Todos los registros(limitado=30 datos) */

/* 3. Buscar al usuario por identificador ID
GET , este biene un parametro de Ruta que es el identificador
http://localHost:1337/Usuario/:id
 http://localHost:1337/Usuario/1

respuesta -> el Usuario */

/* 4. Actualixar usuario por ID
FETCH o PUT
http://localHost:1337/Usuario/:id
 http://localHost:1337/Usuario/1
BODY PARAMS (PARA ACTUALIZAR LOS PARAMETROS)
respuesta -> el Usuario Actualiado*/

/* 5. Borrar al usuario por identificador ID
Delete
http://localHost:1337/Usuario/:id
 http://localHost:1337/Usuario/1

respuesta -> el Usuario borrado */

//localhost:1337  -Delta  'sails'
//localhost:4200  -Gamma   'Angular'

//Cualquier Ip esta bloqueado
//Delta -->quiere llamar a Gamma => BLOQUEADO
//La razón de bloqueo es pq no se quiere compartir recursos

//cors
