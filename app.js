var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var connectionString = require('./connectionString');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var menuRouter = require("./routes/menu");
var updateRouter = require('./routes/update');
var cartRouter = require('./routes/cart');
var orderRouter = require('./routes/orders');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routers
app.use('/', indexRouter);
app.use('/menu', menuRouter);
app.use('/update', updateRouter);
app.use('/cart', cartRouter);
app.use('/orders', orderRouter);

// set up mongoose connection
mongoose.connect(connectionString, { useNewUrlParser: true,  useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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
  res.render('error', {errorMessage: res.locals.message});
});

module.exports = app;
