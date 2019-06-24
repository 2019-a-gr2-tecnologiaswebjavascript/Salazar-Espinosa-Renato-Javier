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
      minLenght: 4
    }
  }, //configuracion del papa

  collection: 'productoUsuario', // modelo a relacionarse (hijo)
  via: 'fkProducto' //fk modleoa relacionarse
};
