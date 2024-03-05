const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const AWS = require('aws-sdk');
const fs=require('fs');
const pdf = require('puppeteer');
const PDFDocument = require('pdfkit');
const multer = require('multer');
const multerS3 = require('multer-s3');
var path = require('path');


const s3 = new AWS.S3({
      accessKeyId: 'AKIAXUQCJIP5XFFDPSPT',
      secretAccessKey: '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',
      region: 'ap-south-1',
      apiVersion:'2006-03-01'
    });

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'yfmtest',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
      cb(null, file.fieldname)
    }
  })
})

router.post('/upload', (req, res) => {

    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

        console.log(req.body.Key)
        var body = req.body.Body;

        var path = ''+req.body.tmpName;

        if(body.includes("data:image/jpg;base64"))
        {
            console.log("jpg")
            var base64Data = body.replace(/^data:image\/jpg;base64,/, "");
        }
        if(body.includes("data:image/png;base64"))
        {
            console.log("png")
            var base64Data = body.replace(/^data:image\/png;base64,/, "");
        }
        if(body.includes("data:image/jpeg;base64"))
        {
            console.log("jpeg")
            var base64Data = body.replace(/^data:image\/jpeg;base64,/, "");
        }

        fs.writeFile(path, base64Data, 'base64', function(err) {
        // console.log(err);
        });

        const params = {
            Bucket: 'yfmtest',
            Key: req.body.Key,
            Body: fs.createReadStream(path)
        };
  
        s3.upload(params, function (err, data) {
            if (err) {
            console.log('There was an error uploading your file: ', err);
            return false;
            }
        
            fs.unlink(path,()=>{})
            console.log('Successfully uploaded file.', data);
            res.json(data)
            return true;
        });

    }
    })
  
});

router.post('/uploadS3',(req, res) => {
  
  var storage= multerS3({
      s3: s3,
      bucket: 'yfmtest',
      metadata: function (req, file, cb) {
        console.log(file.fieldname);
        
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, file.fieldname)
      }
    })
    
    const upload = multer({ storage: storage }).any();

    upload(req, res, function(err) {     
      if (err) {
          throw err;
      }
      res.json({
          success: true,
          message: 'Image was uploaded successfully'
      });
    })

})


router.post('/download', (req, res) => {

    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

        const params = {
            Bucket: 'yfmtest',
            Key: req.body.key
        };

        console.log(req.body.key);
        

        if(req.body.key.includes(".jpg") || req.body.key.includes(".png") || req.body.key.includes(".jpeg"))
        {
            s3.getObject(params, function (err, data) {
                if (err) {
                console.log('There was an error uploading your file: ', err);
                return false;
                }
                
                res.send(data.Body.toString('base64'))
                // console.log(data.ContentType)
                // console.log('Successfully downloaded file.', data.Body.toString('utf-8'));
                return true;
            })
        }
        else if(req.body.key.includes(".pdf")) {
          s3.getObject(params, function (err, data) {
            if (err) {
            console.log('There was an error uploading your file: ', err);
            return false;
            }
            
            res.send(data.Body)
            // console.log(data.ContentType)
            // console.log('Successfully downloaded file.', data.Body.toString('utf-8'));
            return true;
          })
        }
    }
    })
  
});

router.post('/getVideoFile', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

      const params = {
          Bucket: 'yfmtest',
          Delimiter:"/",
          Prefix: req.body.key
      };

      s3.listObjects(params, function (err, data) {
          if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
          }
          
          const Urlparams = {Bucket:'yfmtest', Key: data.Contents[0].Key, Expires: 1000}

          s3.getSignedUrl('getObject',Urlparams, function (err, url) {
            res.send(url)
            return true;
          })
          
      })
  }
  })

});

router.post('/getPresignedUrl', (req, res) => {

      const params = {
          Bucket: 'yfmtest',
          Delimiter:"/",
          Prefix: req.body.key
      };

      s3.listObjects(params, function (err, data) {
          if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
          }

          console.log(data);
          
          if(data.Contents[0] != undefined) {
            const Urlparams = {Bucket:'yfmtest', Key: data.Contents[0].Key}

            s3.getSignedUrl('getObject',Urlparams, function (err, url) {
              res.send(url)
              return true;
            })
          }
      })

});

router.post('/getImageFiles', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

      // console.log(req.body.key)

      const params = {
          Bucket: 'yfmtest',
          Delimiter:"/",
          Prefix: req.body.key
      };

      var imgUrls=[]

      s3.listObjects(params, function (err, data) {
          if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
          }

          var i=0;

          var listLength = data.Contents.length

          data.Contents.forEach(element=>{
            
            var Urlparams = {Bucket:'yfmtest', Key: element.Key}

            s3.getObject(Urlparams, function (err, data) {
              if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
              }
              
              imgUrls.push(data.Body.toString('base64'))
              
              i=i+1;

              if(i==listLength)
              {
                res.send(imgUrls)
          
                return true;
              }
            })
          })
          
      })
  }
  })

});

router.post('/attachmentImages', (req, res) => {

    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

        const doc = new PDFDocument()

        doc.pipe(fs.createWriteStream(''+req.body.invoiceId+"_imageAttachments.pdf")); // write to PDF
        // doc.pipe(res); 

        var files = req.body.Body;

        files.forEach(element => {
          var path = ''+element.fileName;

          var body = ""+element.image.changingThisBreaksApplicationSecurity;

          if(body.includes("data:image/jpg;base64"))
          {
              var base64Data = body.replace(/^data:image\/jpg;base64,/, "");
          }
          if(body.includes("data:image/png;base64"))
          {
              var base64Data = body.replace(/^data:image\/png;base64,/, "");
          }
          if(body.includes("data:image/jpeg;base64"))
          {
              var base64Data = body.replace(/^data:image\/jpeg;base64,/, "");
          }

          fs.writeFile(path, base64Data, 'base64', function(err) {
          // console.log(err);
          });
        });

        setTimeout(()=>{
          for(i=0;i<files.length;i=i+2)
          {
            doc.image(files[i].fileName,50,50, {
                width: 350,
                height:300,
                align: 'center',
                valign: 'center'
            }).text(files[i].title, 50, 40);
            if(i+1<files.length)
            {
              doc.image(files[i+1].fileName,50,380, {
                width: 350,
                height:300,
                align: 'center',
                valign: 'center'
            }).text(files[i+1].title, 50, 370);
            }
  
            doc.addPage({
              margins: {
                top: 20,
                bottom: 20,
                left: 25,
                right: 25
              }
            })
          }
        },3000)

    }

    res.json('')
    });
  
});

router.post('/generateCabInvoice', (req, res) => {

    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      if(req.body.type=='cabInvoice')
      {
        var cabInvoiceBody = `<html>
        <head>        
          <style>          
            body {
              font-family: "Roboto" !important;
              font-size: 11px !important;
            }
            table {      
              border-collapse: collapse;
              font-size: 11px !important;
            }
            th {
              text-align: center
            }        
            .box2 {
              display: flex;
              flex-direction: row;
              border-bottom: 0.1px solid;
              border-bottom-color: darkgrey;
            }        
            .vl {
              border-right: 0.1px solid;
              border-right-color: darkgrey;
            }
            .tdleft {
              text-align: left;
            }
            .tdright {
              text-align: right;
              align-content: right;
              place-content: right;
              border-top:1px solid darkgrey !important;
            }
            .trcenter {
              text-align: center;
            }        
            .invoiceTable td {
              border-top:1px solid darkgrey !important;            
            }
            .iTbl td {
              border-top:1px solid darkgrey !important;            
            }
            .footer {
              padding-top: 25px;
              page-break-before: auto;
              page-break-inside: avoid;
              width: 100%;
              color: white;
              text-align: center;
           }
            @page 
            {
                margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
            }
          @media print {
            @page 
            {
                margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
            }
            html
            {
                margin: 0px !important;  /* this affects the margin on the html before sending to printer */
            }

            body
            {
                margin: 0mm 5mm 0mm 5mm !important; /* margin you want for the content */
            }
          }
          </style>
        </head>
        <body>${req.body.data}
        <div class="footer">
      <table style="width:100%">
      <tr>
          <td colspan="3">
            <p style="font-size:12px; margin-bottom:0px">Subject to MUMBAI Jurisdiction<br>
            No objection pertaining to this invoice would be entertained after 7 days from the date hereof</p>
            <p style="font-size:12px; margin-bottom:0px"><b style="font-size:12px; margin-bottom:0px">GSTIN:</b> ${req.body.companyProfile.gstin} | <b style="font-size:12px; margin-bottom:0px">SAC/HSN/Accounting code:</b> ${req.body.companyProfile.hsnCode} | <b style="font-size:12px; margin-bottom:0px">PAN:</b> ${req.body.companyProfile.panNo} |</p><br>
            
              <b style="font-size:12px; margin-bottom:0px"><u>Bank Details</u></b><br>
              <p style="font-size:12px; margin-bottom:0px"><b>Account No:</b> ${req.body.bankAccount.number} <b>Bank Name:</b> ${req.body.bankAccount.bankName} </p>
              <p style="font-size:12px; margin-bottom:0px"><b>Branch: </b>${req.body.bankAccount.branch} <b>IFSC Code:</b> ${req.body.bankAccount.ifscCode}</p>
              <p style="font-size:12px; margin-bottom:0px"><b>Cheque in favour of:</b> ${req.body.bankAccount.chequeInTheNameOf}</p>
            
          </td>
          <td colspan="2" style="text-align: right">
            <p style="margin-top: -10px;font-size:12px; margin-bottom:0px">
              <b>For ${req.body.user.companyName}</b>
              <br><br><br><br><br>
              This is a computer generated invoice with no need for signature.
            </p>
          </td>
        </tr>
      </table>
      </div>
        </body>
        </html>`

        createPDF(cabInvoiceBody,req.body.tmpName);
      }
      
      if(req.body.type=='dutySummary')
      {
        var cabDutySummarybody = `<html>
        <head>
        <style>          
            body {
              font-family: "Trebuchet MS" !important;
            }
            @page {
              size: landscape;
              margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
            }
            @media print {
              @page 
              {
                  size: landscape;
                  margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
              }
              html
              {
                  margin: 0px !important;  /* this affects the margin on the html before sending to printer */
              }
  
              body
              {
                  margin: 0mm 5mm 0mm 5mm !important; /* margin you want for the content */
              }
            }
        </style>
        </head>
          <body>${req.body.data}</body>
        </html>`

        createPDF(cabDutySummarybody,req.body.tmpName);
      }

      if(req.body.type=='hotelInvoice')
      {
        var hotelInvoiceBody = `<html>
            <head>        
              <style>          
                body {
                  font-family: "Roboto" !important;
                  font-size: 11px !important;
                }
                table {      
                  border-collapse: collapse;
                  font-size: 11px !important;
                }
                th {
                  text-align: center
                }        
                .box2 {
                  display: flex;
                  flex-direction: row;
                  border-bottom: 0.1px solid;
                  border-bottom-color: darkgrey;
                }        
                .vl {
                  border-right: 0.1px solid;
                  border-right-color: darkgrey;
                }
                .tdleft {
                  text-align: left;
                }
                .tdright {
                  text-align: right;
                  align-content: right;
                  place-content: right;
                  border-top:1px solid darkgrey !important;
                }
                .trcenter {
                  text-align: center;
                }        
                .invoiceTable td {
                  border-top:1px solid darkgrey !important;            
                }
                .iTbl td {
                  border-top:1px solid darkgrey !important;            
                }
                .footer {
                  padding-top: 25px;
                  page-break-before: auto;
                  page-break-inside: avoid;
                  width: 100%;
                  color: white;
                  text-align: center;
                }
                @page 
                {
                    margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
                }
              @media print {
                @page 
                {
                    margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
                }
                html
                {
                    margin: 0px !important;  /* this affects the margin on the html before sending to printer */
                }

                body
                {
                    margin: 0mm 5mm 0mm 5mm !important; /* margin you want for the content */
                }
              }
              </style>
            </head>
            <body>${req.body.data}
            <div class="footer">
          <table style="width:100%">
          <tr>
              <td colspan="3">
                <p style="font-size:12px; margin-bottom:0px">Subject to MUMBAI Jurisdiction<br>
                No objection pertaining to this invoice would be entertained after 7 days from the date hereof</p>
                <p style="font-size:12px; margin-bottom:0px"><b style="font-size:12px; margin-bottom:0px">GSTIN:</b> ${req.body.companyProfile.gstin} | <b style="font-size:12px; margin-bottom:0px">SAC/HSN/Accounting code:</b> ${req.body.companyProfile.hsnCode} | <b style="font-size:12px; margin-bottom:0px">PAN:</b> ${req.body.companyProfile.panNo} |</p><br>
                
                  <b style="font-size:12px; margin-bottom:0px"><u>Bank Details</u></b><br>
                  <p style="font-size:12px; margin-bottom:0px"><b>Account No:</b> ${req.body.bankAccount.number} <b>Bank Name:</b> ${req.body.bankAccount.bankName} </p>
                  <p style="font-size:12px; margin-bottom:0px"><b>Branch: </b>${req.body.bankAccount.branch} <b>IFSC Code:</b> ${req.body.bankAccount.ifscCode}</p>
                  <p style="font-size:12px; margin-bottom:0px"><b>Cheque in favour of:</b> ${req.body.bankAccount.chequeInTheNameOf}</p>
                
              </td>
              <td colspan="2" style="text-align: right">
                <p style="margin-top: -10px;font-size:12px; margin-bottom:0px">
                  <b>For ${req.body.user.companyName}</b>
                  <br><br><br><br><br>
                  This is a computer generated invoice with no need for signature.
                </p>
              </td>
            </tr>
          </table>
          </div>
            </body>
            </html>`

        createPDF(hotelInvoiceBody,req.body.tmpName);

      }

      if(req.body.type=='flightInvoice')
      {
        var flightInvoiceBody = `<html>
            <head>        
              <style>          
                body {
                  font-family: "Roboto" !important;
                  font-size: 11px !important;
                }
                table {      
                  border-collapse: collapse;
                  font-size: 11px !important;
                }
                th {
                  text-align: center
                }        
                .box2 {
                  display: flex;
                  flex-direction: row;
                  border-bottom: 0.1px solid;
                  border-bottom-color: darkgrey;
                }        
                .vl {
                  border-right: 0.1px solid;
                  border-right-color: darkgrey;
                }
                .tdleft {
                  text-align: left;
                }
                .tdright {
                  text-align: right;
                  align-content: right;
                  place-content: right;
                  border-top:1px solid darkgrey !important;
                }
                .trcenter {
                  text-align: center;
                }        
                .invoiceTable td {
                  border-top:1px solid darkgrey !important;            
                }
                .iTbl td {
                  border-top:1px solid darkgrey !important;            
                }
                .footer {
                  padding-top: 25px;
                  page-break-before: auto;
                  page-break-inside: avoid;
                  width: 100%;
                  color: white;
                  text-align: center;
               }
                @page 
                {
                    margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
                }
              @media print {
                @page 
                {
                    margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
                }
                html
                {
                    margin: 0px !important;  /* this affects the margin on the html before sending to printer */
                }
    
                body
                {
                    margin: 0mm 5mm 0mm 5mm !important; /* margin you want for the content */
                }
              }
              </style>
            </head>
            <body>${req.body.data}
            <div class="footer">
          <table style="width:100%">
          <tr>
              <td colspan="3">
                <p style="font-size:12px; margin-bottom:0px">Subject to MUMBAI Jurisdiction<br>
                No objection pertaining to this invoice would be entertained after 7 days from the date hereof</p>
                <p style="font-size:12px; margin-bottom:0px"><b style="font-size:12px; margin-bottom:0px">GSTIN:</b> ${req.body.companyProfile.gstin} | <b style="font-size:12px; margin-bottom:0px">SAC/HSN/Accounting code:</b> ${req.body.companyProfile.hsnCode} | <b style="font-size:12px; margin-bottom:0px">PAN:</b> ${req.body.companyProfile.panNo} |</p><br>
                
                  <b style="font-size:12px; margin-bottom:0px"><u>Bank Details</u></b><br>
                  <p style="font-size:12px; margin-bottom:0px"><b>Account No:</b> ${req.body.bankAccount.number} <b>Bank Name:</b> ${req.body.bankAccount.bankName} </p>
                  <p style="font-size:12px; margin-bottom:0px"><b>Branch: </b>${req.body.bankAccount.branch} <b>IFSC Code:</b> ${req.body.bankAccount.ifscCode}</p>
                  <p style="font-size:12px; margin-bottom:0px"><b>Cheque in favour of:</b> ${req.body.bankAccount.chequeInTheNameOf}</p>
                
              </td>
              <td colspan="2" style="text-align: right">
                <p style="margin-top: -10px;font-size:12px; margin-bottom:0px">
                  <b>For ${req.body.user.companyName}</b>
                  <br><br><br><br><br>
                  This is a computer generated invoice with no need for signature.
                </p>
              </td>
            </tr>
          </table>
          </div>
            </body>
            </html>`

        createPDF(flightInvoiceBody,req.body.tmpName);

      }

      if(req.body.type=='visaInvoice')
      {
        var visaInvoiceBody = `<html>
            <head>        
              <style>          
                body {
                  font-family: "Roboto" !important;
                  font-size: 11px !important;
                }
                table {      
                  border-collapse: collapse;
                  font-size: 11px !important;
                }
                th {
                  text-align: center
                }        
                .box2 {
                  display: flex;
                  flex-direction: row;
                  border-bottom: 0.1px solid;
                  border-bottom-color: darkgrey;
                }        
                .vl {
                  border-right: 0.1px solid;
                  border-right-color: darkgrey;
                }
                .tdleft {
                  text-align: left;
                }
                .tdright {
                  text-align: right;
                  align-content: right;
                  place-content: right;
                  border-top:1px solid darkgrey !important;
                }
                .trcenter {
                  text-align: center;
                }        
                .invoiceTable td {
                  border-top:1px solid darkgrey !important;            
                }
                .iTbl td {
                  border-top:1px solid darkgrey !important;            
                }
                .footer {
                  padding-top: 25px;
                  page-break-before: auto;
                  page-break-inside: avoid;
                  width: 100%;
                  color: white;
                  text-align: center;
                }
                @page 
                {
                    margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
                }
              @media print {
                @page 
                {
                    margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
                }
                html
                {
                    margin: 0px !important;  /* this affects the margin on the html before sending to printer */
                }

                body
                {
                    margin: 0mm 5mm 0mm 5mm !important; /* margin you want for the content */
                }
              }
              </style>
            </head>
            <body>${req.body.data}
            <div class="footer">
          <table style="width:100%">
          <tr>
              <td colspan="3">
                <p style="font-size:12px; margin-bottom:0px">Subject to MUMBAI Jurisdiction<br>
                No objection pertaining to this invoice would be entertained after 7 days from the date hereof</p>
                <p style="font-size:12px; margin-bottom:0px"><b style="font-size:12px; margin-bottom:0px">GSTIN:</b> ${req.body.companyProfile.gstin} | <b style="font-size:12px; margin-bottom:0px">SAC/HSN/Accounting code:</b> ${req.body.companyProfile.hsnCode} | <b style="font-size:12px; margin-bottom:0px">PAN:</b> ${req.body.companyProfile.panNo} |</p><br>
                
                  <b style="font-size:12px; margin-bottom:0px"><u>Bank Details</u></b><br>
                  <p style="font-size:12px; margin-bottom:0px"><b>Account No:</b> ${req.body.bankAccount.number} <b>Bank Name:</b> ${req.body.bankAccount.bankName} </p>
                  <p style="font-size:12px; margin-bottom:0px"><b>Branch: </b>${req.body.bankAccount.branch} <b>IFSC Code:</b> ${req.body.bankAccount.ifscCode}</p>
                  <p style="font-size:12px; margin-bottom:0px"><b>Cheque in favour of:</b> ${req.body.bankAccount.chequeInTheNameOf}</p>
                
              </td>
              <td colspan="2" style="text-align: right">
                <p style="margin-top: -10px;font-size:12px; margin-bottom:0px">
                  <b>For ${req.body.user.companyName}</b>
                  <br><br><br><br><br>
                  This is a computer generated invoice with no need for signature.
                </p>
              </td>
            </tr>
          </table>
          </div>
            </body>
            </html>`

        createPDF(visaInvoiceBody,req.body.tmpName);

      }
    
    }

    res.json('')

    });
  
});

router.post('/downloadPDF', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    if(req.body.type=='cabInvoice')
    {
      var cabInvoiceBody = `<html>
      <head>        
        <style>          
          body {
            font-family: "Roboto" !important;
            font-size: 11px !important;
          }
          table {      
            border-collapse: collapse;
            font-size: 11px !important;
          }
          th {
            text-align: center
          }        
          .box2 {
            display: flex;
            flex-direction: row;
            border-bottom: 0.1px solid;
            border-bottom-color: darkgrey;
          }        
          .vl {
            border-right: 0.1px solid;
            border-right-color: darkgrey;
          }
          .tdleft {
            text-align: left;
          }
          .tdright {
            text-align: right;
            align-content: right;
            place-content: right;
            border-top:1px solid darkgrey !important;
          }
          .trcenter {
            text-align: center;
          }        
          .invoiceTable td {
            border-top:1px solid darkgrey !important;            
          }
          .iTbl td {
            border-top:1px solid darkgrey !important;            
          }
          .footer {
            padding-top: 25px;
            page-break-before: auto;
            page-break-inside: avoid;
            width: 100%;
            color: white;
            text-align: center;
         }
          @page 
          {
              margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
          }
        @media print {
          @page 
          {
              margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
          }
          html
          {
              margin: 0px !important;  /* this affects the margin on the html before sending to printer */
          }

          body
          {
              margin: 0mm 5mm 0mm 5mm !important; /* margin you want for the content */
          }
        }
        </style>
      </head>
      <body>${req.body.data}
      <div class="footer">
    <table style="width:100%">
    <tr>
        <td colspan="3">
          <p style="font-size:12px; margin-bottom:0px">Subject to MUMBAI Jurisdiction<br>
          No objection pertaining to this invoice would be entertained after 7 days from the date hereof</p>
          <p style="font-size:12px; margin-bottom:0px"><b style="font-size:12px; margin-bottom:0px">GSTIN:</b> ${req.body.companyProfile.gstin} | <b style="font-size:12px; margin-bottom:0px">SAC/HSN/Accounting code:</b> ${req.body.companyProfile.hsnCode} | <b style="font-size:12px; margin-bottom:0px">PAN:</b> ${req.body.companyProfile.panNo} |</p><br>
          
            <b style="font-size:12px; margin-bottom:0px"><u>Bank Details</u></b><br>
            <p style="font-size:12px; margin-bottom:0px"><b>Account No:</b> ${req.body.bankAccount.number} <b>Bank Name:</b> ${req.body.bankAccount.bankName} </p>
            <p style="font-size:12px; margin-bottom:0px"><b>Branch: </b>${req.body.bankAccount.branch} <b>IFSC Code:</b> ${req.body.bankAccount.ifscCode}</p>
            <p style="font-size:12px; margin-bottom:0px"><b>Cheque in favour of:</b> ${req.body.bankAccount.chequeInTheNameOf}</p>
          
        </td>
        <td colspan="2" style="text-align: right">
          <p style="margin-top: -10px;font-size:12px; margin-bottom:0px">
            <b>For ${req.body.user.companyName}</b>
            <br><br><br><br><br>
            Authorized signatory
          </p>
        </td>
      </tr>
    </table>
    </div>
      </body>
      </html>`        
        
      createPDF(cabInvoiceBody,req.body.tmpName).then(()=>{
        filepath = path.join(__dirname,'../') + req.body.tmpName+'.pdf';
        // res.download('./'+req.body.tmpName+'.pdf');
        res.sendFile(filepath); 
        setTimeout(()=>{
          fs.unlink(filepath,()=>{});
        },5000*60)
        
      });
      
    }
    
    if(req.body.type=='dutySummary')
    {
      var cabDutySummarybody = `<html>
      <head>
      <style>          
          body {
            font-family: "Trebuchet MS" !important;
          }
          @page {
            size: landscape;
            margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
          }
          @media print {
            @page 
            {
                size: landscape;
                margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
            }
            html
            {
                margin: 0px !important;  /* this affects the margin on the html before sending to printer */
            }

            body
            {
                margin: 0mm 5mm 0mm 5mm !important; /* margin you want for the content */
            }
          }
      </style>
      </head>
        <body>${req.body.data}</body>
      </html>`

      createPDF(cabDutySummarybody,req.body.tmpName).then(()=>{
        filepath = path.join(__dirname,'../') + req.body.tmpName+'.pdf';
        // res.download('./'+req.body.tmpName+'.pdf');
        res.sendFile(filepath); 
        setTimeout(()=>{
          fs.unlink(filepath,()=>{});
        },5000*60)
      });;
    }

    if(req.body.type=='hotelInvoice')
    {
      var hotelInvoiceBody = `<html>
          <head>        
            <style>          
              body {
                font-family: "Roboto" !important;
                font-size: 11px !important;
              }
              table {      
                border-collapse: collapse;
                font-size: 11px !important;
              }
              th {
                text-align: center
              }        
              .box2 {
                display: flex;
                flex-direction: row;
                border-bottom: 0.1px solid;
                border-bottom-color: darkgrey;
              }        
              .vl {
                border-right: 0.1px solid;
                border-right-color: darkgrey;
              }
              .tdleft {
                text-align: left;
              }
              .tdright {
                text-align: right;
                align-content: right;
                place-content: right;
                border-top:1px solid darkgrey !important;
              }
              .trcenter {
                text-align: center;
              }        
              .invoiceTable td {
                border-top:1px solid darkgrey !important;            
              }
              .iTbl td {
                border-top:1px solid darkgrey !important;            
              }
              .footer {
                padding-top: 25px;
                page-break-before: auto;
                page-break-inside: avoid;
                width: 100%;
                color: white;
                text-align: center;
              }
              @page 
              {
                  margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
              }
            @media print {
              @page 
              {
                  margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
              }
              html
              {
                  margin: 0px !important;  /* this affects the margin on the html before sending to printer */
              }

              body
              {
                  margin: 0mm 5mm 0mm 5mm !important; /* margin you want for the content */
              }
            }
            </style>
          </head>
          <body>${req.body.data}
          <div class="footer">
        <table style="width:100%">
        <tr>
            <td colspan="3">
              <p style="font-size:12px; margin-bottom:0px">Subject to MUMBAI Jurisdiction<br>
              No objection pertaining to this invoice would be entertained after 7 days from the date hereof</p>
              <p style="font-size:12px; margin-bottom:0px"><b style="font-size:12px; margin-bottom:0px">GSTIN:</b> ${req.body.companyProfile.gstin} | <b style="font-size:12px; margin-bottom:0px">SAC/HSN/Accounting code:</b> ${req.body.companyProfile.hsnCode} | <b style="font-size:12px; margin-bottom:0px">PAN:</b> ${req.body.companyProfile.panNo} |</p><br>
              
                <b style="font-size:12px; margin-bottom:0px"><u>Bank Details</u></b><br>
                <p style="font-size:12px; margin-bottom:0px"><b>Account No:</b> ${req.body.bankAccount.number} <b>Bank Name:</b> ${req.body.bankAccount.bankName} </p>
                <p style="font-size:12px; margin-bottom:0px"><b>Branch: </b>${req.body.bankAccount.branch} <b>IFSC Code:</b> ${req.body.bankAccount.ifscCode}</p>
                <p style="font-size:12px; margin-bottom:0px"><b>Cheque in favour of:</b> ${req.body.bankAccount.chequeInTheNameOf}</p>
              
            </td>
            <td colspan="2" style="text-align: right">
              <p style="margin-top: -10px;font-size:12px; margin-bottom:0px">
                <b>For ${req.body.user.companyName}</b>
                <br><br><br><br><br>
                Authorized signatory
              </p>
            </td>
          </tr>
        </table>
        </div>
          </body>
          </html>`

      createPDF(hotelInvoiceBody,req.body.tmpName).then(()=>{
        filepath = path.join(__dirname,'../') + req.body.tmpName+'.pdf';
        // res.download('./'+req.body.tmpName+'.pdf');
        res.sendFile(filepath); 
        setTimeout(()=>{
          fs.unlink(filepath,()=>{});
        },5000*60)
      });;

    }

    if(req.body.type=='flightInvoice')
    {
      var flightInvoiceBody = `<html>
          <head>        
            <style>          
              body {
                font-family: "Roboto" !important;
                font-size: 11px !important;
              }
              table {      
                border-collapse: collapse;
                font-size: 11px !important;
              }
              th {
                text-align: center
              }        
              .box2 {
                display: flex;
                flex-direction: row;
                border-bottom: 0.1px solid;
                border-bottom-color: darkgrey;
              }        
              .vl {
                border-right: 0.1px solid;
                border-right-color: darkgrey;
              }
              .tdleft {
                text-align: left;
              }
              .tdright {
                text-align: right;
                align-content: right;
                place-content: right;
                border-top:1px solid darkgrey !important;
              }
              .trcenter {
                text-align: center;
              }        
              .invoiceTable td {
                border-top:1px solid darkgrey !important;            
              }
              .iTbl td {
                border-top:1px solid darkgrey !important;            
              }
              .footer {
                padding-top: 25px;
                page-break-before: auto;
                page-break-inside: avoid;
                width: 100%;
                color: white;
                text-align: center;
             }
              @page 
              {
                  margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
              }
            @media print {
              @page 
              {
                  margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
              }
              html
              {
                  margin: 0px !important;  /* this affects the margin on the html before sending to printer */
              }
  
              body
              {
                  margin: 0mm 5mm 0mm 5mm !important; /* margin you want for the content */
              }
            }
            </style>
          </head>
          <body>${req.body.data}
          <div class="footer">
        <table style="width:100%">
        <tr>
            <td colspan="3">
              <p style="font-size:12px; margin-bottom:0px">Subject to MUMBAI Jurisdiction<br>
              No objection pertaining to this invoice would be entertained after 7 days from the date hereof</p>
              <p style="font-size:12px; margin-bottom:0px"><b style="font-size:12px; margin-bottom:0px">GSTIN:</b> ${req.body.companyProfile.gstin} | <b style="font-size:12px; margin-bottom:0px">SAC/HSN/Accounting code:</b> ${req.body.companyProfile.hsnCode} | <b style="font-size:12px; margin-bottom:0px">PAN:</b> ${req.body.companyProfile.panNo} |</p><br>
              
                <b style="font-size:12px; margin-bottom:0px"><u>Bank Details</u></b><br>
                <p style="font-size:12px; margin-bottom:0px"><b>Account No:</b> ${req.body.bankAccount.number} <b>Bank Name:</b> ${req.body.bankAccount.bankName} </p>
                <p style="font-size:12px; margin-bottom:0px"><b>Branch: </b>${req.body.bankAccount.branch} <b>IFSC Code:</b> ${req.body.bankAccount.ifscCode}</p>
                <p style="font-size:12px; margin-bottom:0px"><b>Cheque in favour of:</b> ${req.body.bankAccount.chequeInTheNameOf}</p>
              
            </td>
            <td colspan="2" style="text-align: right">
              <p style="margin-top: -10px;font-size:12px; margin-bottom:0px">
                <b>For ${req.body.user.companyName}</b>
                <br><br><br><br><br>
                Authorized signatory
              </p>
            </td>
          </tr>
        </table>
        </div>
          </body>
          </html>`

      createPDF(flightInvoiceBody,req.body.tmpName).then(()=>{
        filepath = path.join(__dirname,'../') + req.body.tmpName+'.pdf';
        // res.download('./'+req.body.tmpName+'.pdf');
        res.sendFile(filepath); 
        setTimeout(()=>{
          fs.unlink(filepath,()=>{});
        },5000*60)
      });;

    }

    if(req.body.type=='visaInvoice')
    {
      var visaInvoiceBody = `<html>
          <head>        
            <style>          
              body {
                font-family: "Roboto" !important;
                font-size: 11px !important;
              }
              table {      
                border-collapse: collapse;
                font-size: 11px !important;
              }
              th {
                text-align: center
              }        
              .box2 {
                display: flex;
                flex-direction: row;
                border-bottom: 0.1px solid;
                border-bottom-color: darkgrey;
              }        
              .vl {
                border-right: 0.1px solid;
                border-right-color: darkgrey;
              }
              .tdleft {
                text-align: left;
              }
              .tdright {
                text-align: right;
                align-content: right;
                place-content: right;
                border-top:1px solid darkgrey !important;
              }
              .trcenter {
                text-align: center;
              }        
              .invoiceTable td {
                border-top:1px solid darkgrey !important;            
              }
              .iTbl td {
                border-top:1px solid darkgrey !important;            
              }
              .footer {
                padding-top: 25px;
                page-break-before: auto;
                page-break-inside: avoid;
                width: 100%;
                color: white;
                text-align: center;
              }
              @page 
              {
                  margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
              }
            @media print {
              @page 
              {
                  margin: 5mm 0mm 5mm 0mm !important;  /* this affects the margin in the printer settings */
              }
              html
              {
                  margin: 0px !important;  /* this affects the margin on the html before sending to printer */
              }

              body
              {
                  margin: 0mm 5mm 0mm 5mm !important; /* margin you want for the content */
              }
            }
            </style>
          </head>
          <body>${req.body.data}
          <div class="footer">
        <table style="width:100%">
        <tr>
            <td colspan="3">
              <p style="font-size:12px; margin-bottom:0px">Subject to MUMBAI Jurisdiction<br>
              No objection pertaining to this invoice would be entertained after 7 days from the date hereof</p>
              <p style="font-size:12px; margin-bottom:0px"><b style="font-size:12px; margin-bottom:0px">GSTIN:</b> ${req.body.companyProfile.gstin} | <b style="font-size:12px; margin-bottom:0px">SAC/HSN/Accounting code:</b> ${req.body.companyProfile.hsnCode} | <b style="font-size:12px; margin-bottom:0px">PAN:</b> ${req.body.companyProfile.panNo} |</p><br>
              
                <b style="font-size:12px; margin-bottom:0px"><u>Bank Details</u></b><br>
                <p style="font-size:12px; margin-bottom:0px"><b>Account No:</b> ${req.body.bankAccount.number} <b>Bank Name:</b> ${req.body.bankAccount.bankName} </p>
                <p style="font-size:12px; margin-bottom:0px"><b>Branch: </b>${req.body.bankAccount.branch} <b>IFSC Code:</b> ${req.body.bankAccount.ifscCode}</p>
                <p style="font-size:12px; margin-bottom:0px"><b>Cheque in favour of:</b> ${req.body.bankAccount.chequeInTheNameOf}</p>
              
            </td>
            <td colspan="2" style="text-align: right">
              <p style="margin-top: -10px;font-size:12px; margin-bottom:0px">
                <b>For ${req.body.user.companyName}</b>
                <br><br><br><br><br>
                Authorized signatory
              </p>
            </td>
          </tr>
        </table>
        </div>
          </body>
          </html>`

      createPDF(visaInvoiceBody,req.body.tmpName).then(()=>{
        filepath = path.join(__dirname,'../') + req.body.tmpName+'.pdf';
        // res.download('./'+req.body.tmpName+'.pdf');
        res.sendFile(filepath); 
        setTimeout(()=>{
          fs.unlink(filepath,()=>{});
        },5000*60)
      });;

    }
  
  }

  // res.json('') 
  });

});

async function createPDF(temp,name)
{
    const browser = await pdf.launch()
    const page = await browser.newPage()

    await page.setContent(temp)

    await page.emulateMedia('screen');
    await page.pdf({
        path : './'+name+'.pdf',
        format : 'A4',
        printBackground : true
    });

    await browser.close()
}



module.exports = router;
