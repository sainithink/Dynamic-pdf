var express = require("express");
var pdfRouter = require("./pdf");

var app = express();

app.use("/pdf/", pdfRouter);


module.exports = app;
