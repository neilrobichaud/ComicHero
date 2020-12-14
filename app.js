var createError = require('http-errors');
var express = require('express');

var port = process.env.PORT || 3001;
var app = express();
app.use(express.static('views'))
app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.use(express.json());

var uuid = require('uuid');
var playerIds = [];
var router = express.Router();
app.use('/getId', function(req,res,next){
  var id = uuid.v1();
  playerIds.push(id);
  res.body = id;
  console.log(playerIds);
  next();
});
var indexRouter = require('./routes/index');
var drawRouter = require('./routes/draw');

app.use('/', indexRouter);
app.use('/draw', drawRouter);
app.use('/draw/drawing', drawRouter);


app.use('/getId', indexRouter);

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


module.exports = app;
