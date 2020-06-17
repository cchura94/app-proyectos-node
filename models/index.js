const db = require("./../db")
const Sequelize = require('sequelize');

const User = db.define('usuarios', {
    // attributes
    email: {
      type: Sequelize.STRING,
      validate: {
          isEmail: {
              msg: 'Ingrese un correo Valido'
          },
          notEmpty: {
              msg: 'El correo no puede estar vacio'
          }
      },
      unique: {
          args: true,
          msg: 'Usuario ya registrado'
      }
    },
    password: {
      type: Sequelize.STRING,      
    },
    activo: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true }
  });


  module.exports = {
      User
  }