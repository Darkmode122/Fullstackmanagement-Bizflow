// imports the Express.js framework
const express = require('express');
// Creates an instance of the Express application. This app variable will be used to define routes and configure the server.
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors());
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bizflowapp'
});

// Defines a route for the root URL (/). When a client makes a GET request to the root URL,
// the server responds with the message "Hello World!"
app.get('/', (req, res) => {
  return res.json("From backend side");
});

// Start the server
app.listen(port, () => {
  console.log(`listening...`);
});