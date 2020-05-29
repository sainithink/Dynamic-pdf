const { body,validationResult } = require("express-validator");
const { sanitizeBody } = require("express-validator");
const apiResponse = require("../helpers/apiResponse");
const auth = require("../middlewares/jwt");
var mongoose = require("mongoose");
const Pdfdb = require("../models/PdfModel");
var pdf = require("pdf-creator-node");
var fs = require('fs');

var htmls = fs.readFileSync('template/pdftemplate.html', 'utf8');

exports.pdfcreate = async (req, res) => {


  pdfreciept = await Pdfdb.create(req.body);


          var pdfdetails = [
        {
            date:pdfreciept.date,
            invoice:pdfreciept.invoice,
            firstName:pdfreciept.firstName,
            amount: pdfreciept.amount
        }
    ]
          var options = {
                  height: "10.55in",
                  width: "7.12in",
                  orientation: "portrait",
                  border: "10mm",
                  header: {
              height: "45mm",
              contents: '<div style="text-align: center;">Author: Sai Nithin</div>'
          },
          "footer": {
            "height": "28mm",
            "contents": {
            first: 'Cover page',
            2: 'Second page', // Any page number is working. 1-based index
            default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
            last: 'Last Page'
        }}

              };

              var document = {
                  html: htmls,
                  data: {
                      users: pdfdetails
                  },
                  path:'./invoices/'+pdfreciept.invoice+'.pdf'
              };
            let response = await pdf.create(document, options).then(res => {console.log(res);});
            
            return apiResponse.successResponse(res,"Pdf Created");
};

exports.pdflist = [async (req, res) => {
    pdflist = await Pdfdb.find({});
return apiResponse.successResponseWithData(res, 'Pdf list', pdflist);
}];
