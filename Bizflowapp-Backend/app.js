const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
const mysql = require('mysql2');  
const session = require('express-session');
app.use(cors());

app.use(session({
  secret: 'your_secret_key', // Change this to a strong secret in production
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));


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
      req.session.user = { username: data[0].username }; // Store user data in session
      return res.json("Login successful");
    } else {
      return res.json("Invalid username or password");
    }
    
  });
});


app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.json({ status: "Error" });
        res.clearCookie('connect.sid'); // Default cookie name for express-session
        return res.json({ status: "Success" });
    });
});

app.post('/check-session', (req, res) => {
  if (req.session.user) {
    res.json({ valid: true, username: req.session.user.username });
  } else {
    res.json({ valid: false });
  }
});

app.listen(8081, () => {
  console.log('Server is running on port 8081');
});