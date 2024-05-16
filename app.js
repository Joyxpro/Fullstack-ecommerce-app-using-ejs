const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const app = express();

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.send("hey")
});

app.listen(3000, () => {
    console.log("server running on port 3000");
});