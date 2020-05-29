var express = require("express");
const PdfController = require("../controllers/PdfController");

var router = express.Router();

router.get("/", PdfController.pdflist);
router.post("/create", PdfController.pdfcreate);

module.exports = router;
