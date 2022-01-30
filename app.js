const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql');

const indexRouter = require('./routes/index');
const queueRouter = require('./routes/queue');
const videoRouter= require('./routes/video');
const mapRouter= require('./routes/map');

const con = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '1234',
  database: 'seadronix_db'
});

con.connect(function (err) {
  
  if(err) {throw err};
  console.log('Connect DB');
  
  const sql = "select * from SDRNX_MEMBER";
  con.query(sql, function(err, result, fields){
    if (err) {throw err};
    console.log(result);
  });
});


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended : true })); //URL -encoded Bodies
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/queue', queueRouter);
app.use('/video', videoRouter);
app.use('/map', mapRouter);


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
