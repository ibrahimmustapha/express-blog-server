const express = require('express');
let routes = express.Router();
const db = require("../config/db");
const cors = require("cors");
const fileUpload =  require('express-fileupload');

routes.use(express.json());
routes.use(cors());

// File upload
routes.use(fileUpload());

// Handles post-request from end-users
routes.post('/api/create', (req, res) => {
    const username = req.body.username;
    const title = req.body.title;
    const text = req.body.text;
    const category = req.body.category;
    const description = req.body.description;
    let sampleFile;
    let uploadPath;

    // if(!req.files || Object.keys(req.files).length === 0) {
    //   return res.status(400).send('No files were uploaded.');
    // }

    // // name of the input is sampleFile
    // sampleFile = req.file.sampleFile;
    // uploadPath = __dirname + '/upload/' + sampleFile.name;

    // console.log(sampleFile);

    // // Use mv() to place file on the server
    // if (err) return res.status(500).send(err);
    
    // res.send('File uploaded!');

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