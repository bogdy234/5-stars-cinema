const express = require("express");
const mongoose = require("mongoose");
const movieRouter = require("./controllers/movie");
const userRouter = require("./controllers/user");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

function startServer() {
    app.listen(port, () => console.log(`Running on port ${port}...`));
}

const db = process.env.CONNECTION_STRING;

function startDatabase() {
    mongoose.connect(db, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("MongoDB database connection established successfully");
    });
}

function initRouters() {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        res.header("Access-Control-Allow-Methods", "*");
        next();
    });
    app.use(express.json());
    app.use("/user", userRouter);
    app.use("/movie", movieRouter);
}

(function run() {
    startServer();
    startDatabase();
    initRouters();
})();
