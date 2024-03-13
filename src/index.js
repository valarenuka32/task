const express = require("express");
const fs = require("fs");
const http = require("http");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const { connectDB } = require("./db/dbconnection");
const config = require("./config/config");
const routes = require("./routes");

const app = express();

// database connection
connectDB();

// body-parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(cookieParser());

//  enable cors
app.use(cors());
app.options("*", cors());

// namespace
app.use("/v1", routes);

// http server
const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`server is started port no ${config.port} `);
});

