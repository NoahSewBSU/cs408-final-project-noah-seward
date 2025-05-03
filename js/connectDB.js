const expres = require('express');
const mysql = require('mysql');
const connect = express();

connect.use(express.json());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_db_password',
  password: 'your_db_password',
  database: 'your_db_name'
});

// Connect to the database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log
})

connect.post