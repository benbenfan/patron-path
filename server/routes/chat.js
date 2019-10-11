var express = require('express');
var router = express.Router();
var request = require('request');
const path = require('path');
const mysql = require('mysql');


function buildQuery(params) {
  var str;
  if (typeof params.name !== 'undefined') {
    str = params.name;
  } else {
    str = "http://www.zipcodeapi.com/rest/mVTsOF6LAfOLjYwzH3fp2RjmEdsOXBtudbA0ftzE23pSGPI3xKKXRoSSyPXB6kyf/match-close.json/80526,80527/200/km"
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
  request(query, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
    res.json({ zipList: body });
  } else {
    res.send(error);
    throw error;
  }
})
});

module.exports = router;
