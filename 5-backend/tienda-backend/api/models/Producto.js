/**
 * Producto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {

        nombre: {
            type: 'string',
            required: true
        },
        codigo: {
            type: 'string',
            required: true,
            unique: true,
            minLength: 4
        }, // Configuracion de papa a hijo
        arregloProductosUsuario: {
            collection: 'productoUsuario', //Modelo a relacionarse --> (Hijo)
            via: 'fkProducto' // FK Modelo a relacionarse del hijo
        }

    },

};