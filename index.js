const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const exphbs = ('express-handlebars');
const uuid = require('uuid');
const db = require('./config/db');
const app = express();
const Cryptr = require("cryptr");
cryptr = new Cryptr("devnami");
const auth = require('./Routes/auth');
const blogs = require("./Routes/blogs");
const posts = require("./Routes/posts");

const port = process.env.PORT || 2500;

app.use("/", blogs);
app.use(("/"),posts);
app.use(("/"),auth);

app.use(express.json());
app.use(cors());

// fileupload middleware use
app.use(fileUpload());

// // Handles delete request from end-users
// app.delete('/api/delete/:id', (req, res) => {
//     let id = req.body.id;
//     // MySQL database query
//     db.query(
//         "DELETE FROM Blog WHERE id=?",
//         [id],
//         (err, result) => {
//             if (err) {
//                 console.log(err);
//             }
//             console.log(result);
//         }
//     )
// });

app.listen(port, () => {
    console.log("App running on http://localhost:2500");
});