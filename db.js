const Sequelize = require('sequelize');

const sequelize = new Sequelize('app-proyectos', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión exitosa.');
  })
  .catch(err => {
    console.error('Error de conexion:', err);
  });
  
 
  module.exports = sequelize
