/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    nombre: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 60
    },
    apellido: {
      type: 'string',
      required: true
    },
    cedula: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 10,
      maxLength: 25
    },

    username: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 60
    },
    sueldo: {
      type: 'number',
      min: 100,
      max: 5000.0,
      defaultsTo: 100
    },
    estaCasado: {
      type: 'boolean',
      defaultsTo: false
    },
    tipoUsuario: {
      type: 'string',
      enum: ['normal', 'pendiente', 'premium'],
      defaultsTo: 'normal'
    },
    correo: {
      type: 'string',
      isEmail: true
    },
    // Configuracion PAPA
    arregloProductosUsuario: {
      //--> nombre del hijo
      collection: 'productoUsuario', // // Usuario (papa)-> ProductoUsuario (hijo)
      via: 'fkUsuario' // Nombre atributo FK (HIJO)
      //el campo dentro del otro modelo que se hace referencia aquí
    }
  }
};

// Usuario -> ProductosUsuario

// Producto <  ProductosUsuario    > Usuario

// Usuario (papa)-> ProductoUsuario (hijo)

// Producto (papa )-> ProductoUsuario (hijo)
