


const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');

const db = require('./config/mongoose-connection');

const app = express();

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(3000, () => {
    console.log("server running on port 3000");
});