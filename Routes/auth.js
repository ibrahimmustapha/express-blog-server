const express = require('express');
let routes = express.Router();
const db = require("../config/db");
const Cryptr = require("cryptr");
cryptr = new Cryptr("devnami");
const cors = require("cors");

routes.use(express.json());
routes.use(cors());

// Signing in new users
routes.post("/api/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    // SQL query for database insertion
    const sql = "INSERT INTO BlogLogin (email, password) VALUES (?,?)";
    db.query(sql, [email, cryptr.encrypt(password)], 
        (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log('Signup successful');
        })
});

// Signing in users
routes.post("/api/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // SQL query for database selection
  const sql = "SELECT * FROM BlogLogin WHERE email = ? AND password = ?";
  db.query(sql, [email, cryptr.decrypt(password)], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result) {
        console.log("Login success :)");
      } else {
        console.log("Wrong crudentials try again");
      }
    }
  });
});

routes.get("/api/getUsers", (req, res) => {
  db.query("SELECT * FROM BlogLogin", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

module.exports = routes;