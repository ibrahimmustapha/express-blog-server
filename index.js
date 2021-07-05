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

// static files
app.use(express.static("store"));

app.use(express.json());
app.use(cors());
app.use(fileUpload());

// fileupload middleware use
app.use(fileUpload());

app.listen(port, () => {
    console.log("App running on http://localhost:2500");
});