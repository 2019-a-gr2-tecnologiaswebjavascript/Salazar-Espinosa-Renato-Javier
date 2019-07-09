/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = { // metodos dentro del backend

    'GET /': {
        view: 'pages/homepage'
    },
    'GET /holaMundo': { //url-> hola mundo, usuario -->controler, saludar -->metodo
        action: 'usuario/saludar'
    },
    'POST /cargarArchivo/:idProducto': { //recibe un parametro --> idProducto
        action: 'usuario/upload'
    },
    'GET /descargarArchivo/:idProducto': {
        action: 'usuario/download'
    },
    'POST /prenderLed/:idLet': {
        action: 'usuario/download'
    },

};