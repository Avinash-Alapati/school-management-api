const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.dbPass,
  database: "school_db"
});

db.connect((err) => {
  if (err) {
    console.log("DB connection failed" , err);
  } else {
    console.log("MySQL Connected");
  }
});

module.exports = db;