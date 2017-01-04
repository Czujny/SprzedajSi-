var bodyParser  = require('body-parser');
var express     = require('express');
var ejs         = require('ejs');
var fs          = require('fs');
var cookie      = require('cookie');
var app         = express();


app.set('view engine', 'ejs');

var mysql       = require('mysql');

var pool      =    mysql.createPool({
    connectionLimit : 100, //important
    host     : 'localhost',
    user     : 'uczen',
    password : 'qwerty',
    database : 'OGLOSZENIOWA',
    debug    :  false
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

function getCategories(connection,callback) {
  dBquery = "select * from kategoria"
  connection.query(dBquery, function(err, rows2, fields) {
    if (err) {
      throw err;
    } else {
      return callback(rows2);
    }
  });
}//TODO: tutaj reguła 1000 ifów albo 1000 caseów i nowy parametr

app.use('/rsrc', express.static('rsrc'));

app.get('/', function(req,res) {
  pool.getConnection(function(err,connection) {
    getCategories(connection, function(res0) {
      res.render('pages/main', {categories: res0});
      connection.release();
    });
  });
});

app.use('/login', function(req,res){
  res.render('pages/signin');
});


app.post('/LogInIN', function(req, res){
  console.log('test log ');

  pool.getConnection(function(err,connection) {

    console.log('connected as id '+ connection.threadId);

    var dBquery = "SELECT haslo FROM uzytkownicy WHERE mail ='" + req.body.mail +"'";

    connection.query(dBquery, function(err, rows, fields) {
      //var query = JSON.parse(rows2);
      console.log(rows[0].haslo);
      if(req.body.haslo == rows[0].haslo){
        console.log("Dobre haslo");        // DOBRE HASLO LOGOWANIE
        res.setHeader('Set-Cookie', cookie.serialize('user', 'zalogowano', {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 2 // 2 DNI
        }));

        res.redirect('/');
      } else{           // ZŁE HASLO LOGOWANIE
        console.log("Zle haslo");
        res.redirect('/login/');
      }
      if (err) {
        throw err;
      } else {
        console.log("ksz ksz");
      }
      connection.release();
    });
  });


  //express.static('home_page')
});

app.post('/RegIn', function(req, res){
  pool.getConnection(function(err,connection) {
    //console.log('connected as id ' + connection.threadId);
    console.log('connected as id '+ connection.threadId);
    var dBquery = "INSERT INTO uzytkownicy (mail, imie, nazwisko, nick, haslo, datarej, punkty, ogloszenia) VALUES ('"
                + req.body.mail + "','"
                + req.body.imie + "','"
                + req.body.nazwisko + "','"
                + req.body.nick + "','"
                + req.body.haslo + "',"
                + "CURDATE()"+ ","
                + 0 + ","
                + 0 +")";
    connection.query(dBquery, function(err, rows2, fields) {
      if (err) {
        throw err;
      } else {
        console.log("ksz ksz");
      }
      connection.release();
    });
  });
  res.redirect('/login/');
  //express.static('home_page')
});

app.get('/search', function(req,res) {
  pool.getConnection(function(err,connection) {
    console.log('connected as id ' + connection.threadId);
    getCategories(connection,function(res0){
      var dBquery="";
      if (req.query.q)
        dBquery = "select * from ogloszenie where lower(name) like lower('%" + req.query.q + "%')";
      else if (req.query.cat)
        dBquery = "select * from ogloszenie where kat_id = " + req.query.cat;
      connection.query(dBquery, function(err, rows, fields) {
        if (err) {
          console.log('sql error (empty query or something)');
          res.render('pages/search', {entriesEJ: [], categories: res0});
        } else {
          res.render('pages/search', {entriesEJ: rows, categories: res0}); //TODO: jak dojdzie więcej parametrów to zagnieździć w pizdu
        }
        connection.release(); //najważniejsza linia w całym kodzie
      });
    });
  });
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
