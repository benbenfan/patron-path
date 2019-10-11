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
  connection.query('SELECT * FROM logs ORDER BY time', function (error, results, fields) {
    if (error) {
      res.send(error);
      res.end(JSON.stringify(results));
      throw error;
    }
    // res.send({users:results});
    res.json({ users: results });
    // res.render('index', { title: 'Express' });
    // res.send({users:results});
    results.forEach(result => {
      // console.log(result);
    });
  });
});


router.post('/', function (req, res, next) {
  var postData = req.body;
  // INSERT INTO `logs`(`time`,`user_id`,`line_text`) VALUES (NOW(),+++++req.body.id,req.body.text);
  console.log('postData: ' + JSON.stringify(req.body.newMsg));
  // connection.query(sql, conditions.values, function (error, results, fields) {
  connection.query(req.body.newMsg, function (error, results, fields) {
    if (error) {
      res.send(error);
      res.end(JSON.stringify(results));
      throw error;
    }
    // res.send({users:results});
    res.json({ users: results });
    // res.send({users:results});
    // results.forEach(result => {
    //   console.log(result);
    // });
  });
});

module.exports = router;
