const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
const mysql = require('mysql2');  
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bizflow'
}); 




app.post('/login', (req, res) => {
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(sql,[req.body.username,req.body.password] , (err, data) => {
    if (err) {return res.json("Error");}
    if (data.length > 0) {
      return res.json("Login successful");
    } else {
      return res.json("Invalid username or password");
    }
    
  });
});



app.listen(8081, () => {
  console.log('Server is running on port 8081');
});