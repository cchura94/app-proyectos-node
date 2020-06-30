var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Habilitar el layout base de nuestra pagina
var expressLayout = require('express-ejs-layouts') 
//Importando express-session para guardar datos en memoria
var session = require('express-session')
//Importando connet-flash para envio de mensaje como (errores, mesanjes)
var flash = require('connect-flash');

//Importando la configuración de conexion de base de datos
var db = require('./db')

//Importar la configuración de passport
var passport = require("./config/passport") 




db.sync().then(() => {
  console.log("tablas Migradas")
}).catch((err) => {
  console.log("ERROR de migración");
});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var proyectoRouter = require('./routes/proyectos');
var actividadesRouter = require('./routes/Actividades');

var app = express();
//Configuración para la session 
app.use(session({
  secret: 'MI_CODIGO_SECRETO',
  resave: false, //Evita guardar otra sesion
  saveUninitialized: true //Evita que no sea inicializado 
}))

//Configuración de connect-flash para mensajes
app.use(flash())

//COnfigurando passport
app.use(passport.initialize());
app.use(passport.session());

//Configuración de plantilla de diseño base
app.use(expressLayout);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuario', usersRouter);
app.use('/proyecto', proyectoRouter);
app.use('/actividad', actividadesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
