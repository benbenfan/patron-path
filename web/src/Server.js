// using express module of node to route to database
const express = require('express');
//set port to 3000 or let auto process port
const PORT = process.env.PORT || 3001;
// initialize express
const app = express();
// require mysql in node modules
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Frontier11',
    database: 'university'
});

/**
 * This is an unussed page that I was using at first before I realized that I had to create
 * an entire server, not jsut a page to connect and transfer data correctly in the client/server
 * database architecture
 */
connection.connect(function (err) {
    (err) ? console.log(err + '+++++++++++++++//////////') : console.log('connection********');
});

require('./serviceWorker.js')(app, connection);
// server start
app.listen(PORT, () => {
    console.log('Test Server is on port ${PORT}');
});