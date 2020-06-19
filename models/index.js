const db = require("./../db")
const Sequelize = require('sequelize');

const Usuario = db.define('usuarios', {
    // attributes
    email: {
      type: Sequelize.STRING(50),
      validate: {
          isEmail: {
              msg: 'Debe introducir un Email correcto'
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
      allowNull: false     
    },
    activo: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true }
  });

//MODELO : Proyecto
const Proyecto = db.define("proyectos",{
    nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    detalle: Sequelize.TEXT,
    url: Sequelize.STRING
})

// MODELO: Actividad 
const Actividad = db.define("actividades", {
    id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    descripcion: Sequelize.TEXT,
    estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    proyecto_id: {
        type: Sequelize.INTEGER,
        references: {model: Proyecto, key: 'id'}
    }
})

Proyecto.hasMany(Actividad, {foreignKey: 'proyecto_id'})

//Tabla relacion
const UsuarioActividad = db.define("actividad_usuario");
Actividad.belongsToMany(Usuario, {through:UsuarioActividad})
Usuario.belongsToMany(Actividad, {through:UsuarioActividad})

// Model: Role

const Role = db.define("roles", {
    nombre: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    detalle: Sequelize.TEXT
})

const RoleUsuario = db.define('role_usuarios');
Usuario.belongsToMany(Role, {through: RoleUsuario});
Role.belongsToMany(Usuario, {through: RoleUsuario})


  module.exports = {
    Usuario,
    Proyecto,
    Actividad,
    Role
  }