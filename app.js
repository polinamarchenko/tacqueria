var express = require('express');
var app = express();
var morgan = require('morgan');
var methodOverride = require("method-override");
var bodyParser = require('body-parser');
const eatersRoutes = require('./routes/eaters')

app.set('view engine', 'pug');
//__dirname - absolute path to where you are, pwd - to see the absolute path in iterm
app.use(express.static(__dirname + '/public'));
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use('/eaters', eatersRoutes)

app.get('/', function(req, res, next){
  res.redirect('/eaters');
});

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(3000, function() {
  console.log("Server is listening on port 3000");
});
