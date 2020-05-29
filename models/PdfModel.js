var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PdfSchema = new Schema({
	invoice: {type: String, required: true},
	date: {type: Date, default:Date.now(), required: true},
	firstName: {type: String, required: true},
	amount: {type: String, required:true},
}, {timestamps: true});

module.exports = mongoose.model("Pdf", PdfSchema);
