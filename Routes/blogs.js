const express = require('express');
let routes = express.Router();
const db = require("../config/db");
const cors = require("cors");

routes.use(express.json());
routes.use(cors());

// Handles request from end-user
routes.get('/api/get', (req, res) => {
     db.query(
       "SELECT * FROM Blog",
       (err, result) => {
         if (err) {
           console.log(err);
         }
         res.send(result);
       }
     );
});

routes.get("/api/getFromId/:id", (req, res) => {
  const id = req.params.id;

  db.query("SELECT * FROM Blog WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

module.exports = routes;