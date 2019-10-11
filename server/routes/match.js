var express = require('express');
var router = express.Router();
var request = require('request');
const path = require('path');
const mysql = require('mysql');


function buildQuery(params) {
  var str;
  
  if (typeof params.zip1 !== 'undefined' && typeof params.zip2 !== 'undefined' && typeof params.distance !== 'undefined') {
    str = "http://www.zipcodeapi.com/rest/mVTsOF6LAfOLjYwzH3fp2RjmEdsOXBtudbA0ftzE23pSGPI3xKKXRoSSyPXB6kyf/match-close.json/"+params.zip1+","+params.zip2+"/"+params.distance+"/mile";

  } else {
    str = "http://www.zipcodeapi.com/rest/mVTsOF6LAfOLjYwzH3fp2RjmEdsOXBtudbA0ftzE23pSGPI3xKKXRoSSyPXB6kyf/match-close.json/53703,53704/10/mile"
  }
  // console.log(str);
  return str;
}

router.all('/', function (req, res, next) {
  var postData = req.body;
  console.log(req.body);
  var query = buildQuery(postData);
  request(query, function (error, response, body) {
    if (!error) {
      res.json({ zipList: body });
    } else {
      res.send(error);
      console.log(response.statusCode );
      throw error;
    }
  })
});

module.exports = router;
