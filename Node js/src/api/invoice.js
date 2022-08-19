var easyinvoice = require('easyinvoice');
const express = require("express");
const Usage = require("../models/usage");
const fs=require("fs")

const router = express.Router();

router.get("/invoice", async (req, res) => {

var data = {
    //"documentTitle": "RECEIPT", //Defaults to INVOICE
    "currency": "IND",
    "taxNotation": "vat", //or gst
    "marginTop": 25,
    "marginRight": 25,
    "marginLeft": 25,
    "marginBottom": 25,
    "logo": "https://www.easyinvoice.cloud/img/logo.png", //or base64
    //"logoExtension": "png", //only when logo is base64
    "sender": {
        "company": "BillEzy",
        "address": "BillEzy",
        "zip": "1234 AB",
        "city": "Ernakulam",
        "country": "India"
        //"custom1": "custom value 1",
        //"custom2": "custom value 2",
        //"custom3": "custom value 3"
    },
    "client": {
        "company": "Kent",
        "address": "Clientstreet 456",
        "zip": "4567 CD",
        "city": "Kakkanad",
        "country": "India"
        //"custom1": "custom value 1",
        //"custom2": "custom value 2",
        //"custom3": "custom value 3"
    },
    "invoiceNumber": "2020.0001",
    "invoiceDate": "05-01-2020",
    "products": [
        {
            "quantity": "300",
            "description": "Test1",
            "tax": 6,
            "price": 33.87
        },
        {
            "quantity": "4",
            "description": "Test2",
            "tax": 21,
            "price": 10.45
        }
    ],
    "bottomNotice": "Kindly pay your invoice within 15 days."
};
//Create your invoice! Easy!
easyinvoice.createInvoice(data, async function (result) {
    //The response will contain a base64 encoded PDF file
    console.log(result.pdf);
   
await fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
});
});
module.exports = router;
