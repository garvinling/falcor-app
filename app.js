var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var falcorExpress = require('falcor-express');
var Router = require('falcor-router');
var app = express();


var ColumnsRouter = Router.createClass([
    //Sort of like a replacement for the REST API 
    {
        route: 'columns.length',
        get: function() {                              //seems like arrow replaces the function callback + returns?
            console.log('HIT')
            console.log(db.columns.length)
            return {path:['columns','length'],value : db.columns.length}

        }

    }

])

app.use('/model.json',falcorExpress.dataSourceRoute(function(req,res){

    return new ColumnsRouter()

}));

//will need to refactor to ES6  ex...
// var ColumnsRouter = Router.createClass([
//     
//     {
//         route: 'columns.length',
//         get() => {                              
//             {path:['columns','length'],value:db.columns.length}
//         }
//     }
// ])


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
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


var db = {

    columns:[

        {
            _id: "56a2d0a8c6bda211dd4c3547",
            name: "Date Submitted",
            title: "_dateSubmitted",
            type: "date",
            category: "general",
            fieldrequired: 0,
            orderNumber: 0,
            visible: true,
            width: 150
        },
        {
            _id: "56a2d0a8c6bda211dd4c3548",
            name: "Date Modified",
            title: "_dateModified",
            type: "date",
            category: "general",
            fieldrequired: 0,
            orderNumber: 1,
            visible: true,
            width: 150
        }

    ]
};







module.exports = app;
