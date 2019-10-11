var express = require('express');
var router = express.Router();

const path = require('path');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Frontier11',
  database: 'fanmail'
});


/* GET  listing. */
router.get('/', function(req, res, next) {
  connection.query('SELECT * FROM users', function (error, results, fields) {
    if (error) {
      res.send(error);
      res.end(JSON.stringify(results));
      throw error;
    }
    // res.send({users:results});
    res.json({ users: results });
    // res.send({users:results});
    results.forEach(result => {
      // console.log(result);
    });
  });
});

function buildUser(params) {
  var str;
  if (typeof params.name !== 'undefined') {
    str = "INSERT INTO `users` (`user_id`, `username`, `password`, `isAdmin`, `email`, `handle`,`created_at`) VALUES('118515893', 'Test User1', 'ZxcvjqopDSxk13skk', '0', 't.user[at]fanfamily.org', 'testMe', NOW());";
  } else {
    // purposefully prevent any data when input is invalid
    str = "select * from users where 15<10"
  }
  return str;
}

/** Create user */
router.post('/new', function(req, res, next) {
  var newUser = buildUser(req.body);
  res.locals.connection.query(newUser, function (error, results, fields) {
      if(error) throw error;
      res.send(JSON.stringify(results));
  });
});

/** Modified Posts */
router.post('/', function (req, res, next) {
  var postData = req.body;
  console.log('postData: ' + JSON.stringify(req.body));
  var conditions = buildConditions(postData);
  var sql = 'SELECT * FROM artist WHERE ' + conditions.where;
  console.log(sql + conditions.values);

  // connection.query(sql, conditions.values, function (error, results, fields) {
  connection.query('SELECT handle FROM users', function (error, results, fields) {
    if (error) {
      res.send(error);
      res.end(JSON.stringify(results));
      throw error;
    }
    // res.send({users:results});
    res.json({ users: results });
    // res.send({users:results});
    results.forEach(result => {
      // console.log(result);
    });
  });
});

module.exports = router;
