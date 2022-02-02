//모듈 설정
const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const app = express();

//router 분리
const indexRouter = require('./routes/index');
const queueRouter = require('./routes/queue'); 
const videoRouter= require('./routes/video');
const mapRouter= require('./routes/map');
const userRouter= require('./routes/user');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended : true })); //URL -encoded Bodies

//session 설정
app.use(session({
  secret : 'seadronix_key', //session Key
  resave : false, // 재저장 /X
  saveUninitialized : true //store 전 초기화 X
}))

// cookie 설정
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public/javascripts')));




app.use('/', indexRouter);
app.use('/queue', queueRouter);
app.use('/video', videoRouter);
app.use('/map', mapRouter);
app.use('/user', userRouter);


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
