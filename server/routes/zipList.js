var express = require('express');
var router = express.Router();

const path = require('path');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '@Frontier11',
  database: 'eatstreet'
});

function buildQuery(params) {
  var str;
  if (typeof params.name !== 'undefined') {
    str = params.name;
  } else {
    str = "select * from zip limit 400"
  }
  return str;
}
// /* GET  listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with data');
// });
router.all('/', function (req, res, next) {
  var postData = req.body;
  var query = buildQuery(postData);
  connection.query(query, function (error, results, fields) {
    if (error) {
      res.send(error);
      throw error;
    }
    // res.send({users:results});
    res.json({ zipList: results });
    // res.send({users:results});
    results.forEach(result => {
      // console.log();
    });
  });
});

module.exports = router;
