/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    nombre: {
      type: 'string'
    },
    apellido: {
      type: 'string',
      required: true
    },
    cedula: {
      type: 'string',
      require: true,
      unique: true,
      minLength: 10,
      maxLength: 25
    },
    username: {
      type: 'string',
      require: true,
      unique: true,
      minLength: 3,
      maxLength: 60
    },
    sueldo: {
      type: 'number',
      min:100,
      max:5000.00
      defaulsTo:100
    },
    estacasado:{
type:'boolean',
defaultsTo:false

    },
    tipoUsuario:{
      tyoe:'string',
      enum:['normal', 'pendiente','pemiun'],
      defaultsTo:'normal'
    },
    correo:{
      type:'string'
    }
  }
};

