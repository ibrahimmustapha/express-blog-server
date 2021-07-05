const express = require('express');
let routes = express.Router();
const db = require("../config/db");
const cors = require("cors");
const fileUpload =  require('express-fileupload');

routes.use(express.json());
routes.use(cors());

// File upload
routes.use(fileUpload());
routes.use(express.static(__dirname + "/store"));

// Handles post-request from end-users
routes.post('/api/create', (req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const text = req.body.text;
  const category = req.body.category;
  const description = req.body.description;

  // if (!req.files || Object.keys(req.files).length === 0) {
  //   return res.status(400).send( 'No files were uploaded!');
  // }
  //   const sampleFile = req.files.file;
  //   const image_name = sampleFile.name;
  //   const uploadPath = __dirname +'/store/';

  //   sampleFile.mv(`${uploadPath}/store/${image_name}`, function (err) {
  //     if (err) throw err;
  //     res.send('file was successfully uploaded!');
  //   })


  // MySQL database query
  db.query(
    "INSERT INTO Blog (title, category, description, post_text, username) VALUES (?,?,?,?,?)",
    [title, category, description, text, username],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});

module.exports = routes