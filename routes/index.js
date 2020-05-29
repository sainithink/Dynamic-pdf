var express = require("express");
var router = express.Router();
const PdfController = require("../controllers/PdfController");
/* GET home page. */
router.get("/", function(req, res) {
	res.render("index", { title: "Express" });
});
router.post("/create", PdfController.pdfcreate);


module.exports = router;
