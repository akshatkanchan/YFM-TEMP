const express = require('express');
const router = express.Router();
const request = require('request');
const nodemailer = require('nodemailer');
const moment = require('moment');

const AWS = require('aws-sdk');
const fs=require('fs');

var admin = require('./firebase-admin');
const jwt = require('jsonwebtoken');
var connection = require('./db.js');
var Imap = require('imap');
var mimemessage = require('mimemessage');

const s3 = new AWS.S3({
      accessKeyId: 'AKIAJFYKHTS4CRIO4FHA',
      secretAccessKey: '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',
      region: 'us-east-2',
      apiVersion:'2006-03-01'
    });


router.post('/sendMailFlight', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    var attachments=[]

    var files=[]
    files.push(req.body.key)
    

    for(var i in req.body.key)
    {
      const params = {
        Bucket: 'yfmtest',
        Key: req.body.key[i]
       };

      var file = fs.createWriteStream('./'+req.body.files[i]);

      s3.getObject(params, function (err, data) {
          if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
          }

          file.write(data.Body);
          file.close();
      })


      attachments.push(file);
    }

      var transporter = nodemailer.createTransport({
        service: "SMTP",
        host: "md-in-64.webhostbox.net",
        port:'465',
        // headers: ["MIME-Version: 1.0","Content-type: text/html; charset=iso-8859-1"],
        auth: {
          user: 'no-reply-notify@yourfleetman.com',
          pass: 'P@55word!@#'
        }
      });
      
      var mailOptions = {
        from: req.body.name+' <no-reply-notify@yourfleetman.com>',
        // to: 'aaronsam41@gmail.com',
        to: req.body.email,
        // cc: [req.body.cc],
        subject: req.body.subject,
        headers: ["MIME-Version: 1.0","Content-type: text/html; charset=iso-8859-1"],
        html: req.body.mailBody,
        attachments: attachments
      };
      var imap = new Imap({
        user: 'info@yourfleetman.com',
        password:'P@55word!@#',
        host: "md-in-64.webhostbox.net",
        port: 993,
        tls: true,
        authTimeout: 30000,
        connTimeout: 30000,
      })
    
      // imap.once('ready', function () {
      //   if(imap.state != 'authenticated') {
      //     imap.connect()
      //   }
      //   imap.openBox('inbox.Sent', false, (err, box) => {
      //     if (err) console.log(err)
    
      //     let msg, htmlEntity,pdfEntity;
      //     msg = mimemessage.factory({
      //       contentType: 'multipart/alternate',
      //       body: []
      //     });
      //     htmlEntity = mimemessage.factory({
      //       contentType: 'text/html;charset=utf-8',
      //       body: mailOptions.html
      //     });
    
      //     var arry=[];
    
      //     attachments.forEach(element => {
      //       var bitmap = fs.readFileSync(element.path);
      //       var pdf = new Buffer.from(bitmap).toString('base64');
    
      //       pdfEntity = mimemessage.factory({
      //         contentType: 'application/pdf',
      //         contentTransferEncoding: 'base64',
      //         body:pdf
      //       });
            
      //       pdfEntity.header('Content-Disposition', 'attachment ;filename='+element.fileName);
    
      //       arry.push(pdfEntity)
      //     });
    
      //     msg.header('Message-ID', Math.random().toString());
      //     msg.header('From', mailOptions.from);
      //     msg.header('To', mailOptions.to);
      //     msg.header('Subject', mailOptions.subject);
      //     msg.header('Date', new Date());
      //     msg.body.push(htmlEntity);
      //     arry.forEach(element => {
      //       msg.body.push(element);
      //     });
      //     // msg.body.push(plainEntity);
    
      //     imap.append(msg.toString());
    
      //   })
      // });
    
      // imap.on('error', function (err) {
      //   // console.log(err);
      // });
    
      // imap.once('end', function () {
      //   // console.log(response);
      // });
      
      // imap.connect();
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("Email "+error);
        } 
        else {
    
          console.log('Email sent: ' + info.response);
    
          attachments.forEach(element => {
            
            fs.unlink(element.path,()=>{})
          });

          res.json({success:info.message});
        }
      });
    
    }
  })

});

router.post('/sendMailAirlineConfirm', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", async function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    var attachments=[]

    var files=[]
    files.push(req.body.key)
    

    for await (var i of req.body.key)
    {
      
      const params = {
        Bucket: 'yfmtest',
        Key: req.body.name+'/airlineFiles/'+req.body.bookingId+"/"+i
       };

      var file = fs.createWriteStream('./'+i);

      s3.getObject(params, function (err, data) {
          if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
          }

          file.write(data.Body);
      })

      attachments.push(file);
    }

      var transporter = nodemailer.createTransport({
        service: "SMTP",
        host: "md-in-64.webhostbox.net",
        port:'465',
        // headers: ["MIME-Version: 1.0","Content-type: text/html; charset=iso-8859-1"],
        auth: {
          user: 'no-reply-notify@yourfleetman.com',
          pass: 'P@55word!@#'
        }
      });
      
      var mailOptions = {
        from: req.body.name+' <no-reply-notify@yourfleetman.com>',
        // to: 'aaronsam41@gmail.com',
        to: req.body.email,
        // cc: [req.body.cc],
        subject: req.body.subject,
        headers: ["MIME-Version: 1.0","Content-type: text/html; charset=iso-8859-1"],
        html: req.body.mailBody,
        attachments: attachments
      };
      var imap = new Imap({
        user: 'info@yourfleetman.com',
        password:'P@55word!@#',
        host: "md-in-64.webhostbox.net",
        port: 993,
        tls: true,
        authTimeout: 30000,
        connTimeout: 30000,
      })
    
      // imap.once('ready', function () {
      //   if(imap.state != 'authenticated') {
      //     imap.connect()
      //   }
      //   imap.openBox('inbox.Sent', false, (err, box) => {
      //     if (err) console.log(err)
    
      //     let msg, htmlEntity,pdfEntity;
      //     msg = mimemessage.factory({
      //       contentType: 'multipart/alternate',
      //       body: []
      //     });
      //     htmlEntity = mimemessage.factory({
      //       contentType: 'text/html;charset=utf-8',
      //       body: mailOptions.html
      //     });
    
      //     var arry=[];
    
      //     attachments.forEach(element => {
      //       var bitmap = fs.readFileSync(element.path);
      //       var pdf = new Buffer.from(bitmap).toString('base64');
    
      //       pdfEntity = mimemessage.factory({
      //         contentType: 'application/pdf',
      //         contentTransferEncoding: 'base64',
      //         body:pdf
      //       });
            
      //       pdfEntity.header('Content-Disposition', 'attachment ;filename='+element.fileName);
    
      //       arry.push(pdfEntity)
      //     });
    
      //     msg.header('Message-ID', Math.random().toString());
      //     msg.header('From', mailOptions.from);
      //     msg.header('To', mailOptions.to);
      //     msg.header('Subject', mailOptions.subject);
      //     msg.header('Date', new Date());
      //     msg.body.push(htmlEntity);
      //     arry.forEach(element => {
      //       msg.body.push(element);
      //     });
      //     // msg.body.push(plainEntity);
    
      //     imap.append(msg.toString());
    
      //   })
      // });
    
      // imap.on('error', function (err) {
      //   // console.log(err);
      // });
    
      // imap.once('end', function () {
      //   // console.log(response);
      // });
      
      // imap.connect();
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("Email "+error);
        } 
        else {
    
          console.log('Email sent: ' + info.response);
    
          attachments.forEach(element => {
            
            fs.unlink(element.path,()=>{})
          });

          res.json({success:info.message});
        }
      });
    
    }
  })

});

router.post('/sendMailHotelConfirm', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", async function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    var attachments=[]

    var files=[]
    files.push(req.body.key)
    

    for await (var i of req.body.key)
    {
      
      const params = {
        Bucket: 'yfmtest',
        Key: req.body.name+'/hotelFiles/'+req.body.bookingId+"/"+i
       };

      var file = fs.createWriteStream('./'+i);

      s3.getObject(params, function (err, data) {
          if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
          }

          file.write(data.Body);
      })

      attachments.push(file);
    }

      var transporter = nodemailer.createTransport({
        service: "SMTP",
        host: "md-in-64.webhostbox.net",
        port:'465',
        // headers: ["MIME-Version: 1.0","Content-type: text/html; charset=iso-8859-1"],
        auth: {
          user: 'no-reply-notify@yourfleetman.com',
          pass: 'P@55word!@#'
        }
      });
      
      var mailOptions = {
        from: req.body.name+' <no-reply-notify@yourfleetman.com>',
        // to: 'aaronsam41@gmail.com',
        to: req.body.email,
        // cc: [req.body.cc],
        subject: req.body.subject,
        headers: ["MIME-Version: 1.0","Content-type: text/html; charset=iso-8859-1"],
        html: req.body.mailBody,
        attachments: attachments
      };
      var imap = new Imap({
        user: 'info@yourfleetman.com',
        password:'P@55word!@#',
        host: "md-in-64.webhostbox.net",
        port: 993,
        tls: true,
        authTimeout: 30000,
        connTimeout: 30000,
      })
    
      // imap.once('ready', function () {
      //   if(imap.state != 'authenticated') {
      //     imap.connect()
      //   }
      //   imap.openBox('inbox.Sent', false, (err, box) => {
      //     if (err) console.log(err)
    
      //     let msg, htmlEntity,pdfEntity;
      //     msg = mimemessage.factory({
      //       contentType: 'multipart/alternate',
      //       body: []
      //     });
      //     htmlEntity = mimemessage.factory({
      //       contentType: 'text/html;charset=utf-8',
      //       body: mailOptions.html
      //     });
    
      //     var arry=[];
    
      //     attachments.forEach(element => {
      //       var bitmap = fs.readFileSync(element.path);
      //       var pdf = new Buffer.from(bitmap).toString('base64');
    
      //       pdfEntity = mimemessage.factory({
      //         contentType: 'application/pdf',
      //         contentTransferEncoding: 'base64',
      //         body:pdf
      //       });
            
      //       pdfEntity.header('Content-Disposition', 'attachment ;filename='+element.fileName);
    
      //       arry.push(pdfEntity)
      //     });
    
      //     msg.header('Message-ID', Math.random().toString());
      //     msg.header('From', mailOptions.from);
      //     msg.header('To', mailOptions.to);
      //     msg.header('Subject', mailOptions.subject);
      //     msg.header('Date', new Date());
      //     msg.body.push(htmlEntity);
      //     arry.forEach(element => {
      //       msg.body.push(element);
      //     });
      //     // msg.body.push(plainEntity);
    
      //     imap.append(msg.toString());
    
      //   })
      // });
    
      // imap.on('error', function (err) {
      //   // console.log(err);
      // });
    
      // imap.once('end', function () {
      //   // console.log(response);
      // });
      
      // imap.connect();
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("Email "+error);
        } 
        else {
    
          console.log('Email sent: ' + info.response);
    
          attachments.forEach(element => {
            
            fs.unlink(element.path,()=>{})
          });

          res.json({success:info.message});
        }
      });
    
    }
  })

});

router.post('/sendMailVisaConfirm', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", async function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    var attachments=[]

    var files=[]
    files.push(req.body.key)
    

    for await (var i of req.body.key)
    {
      
      const params = {
        Bucket: 'yfmtest',
        Key: req.body.name+'/visaFiles/'+req.body.bookingId+"/"+i
       };

      var file = fs.createWriteStream('./'+i);

      s3.getObject(params, function (err, data) {
          if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
          }

          file.write(data.Body);
      })

      attachments.push(file);
    }

      var transporter = nodemailer.createTransport({
        service: "SMTP",
        host: "md-in-64.webhostbox.net",
        port:'465',
        // headers: ["MIME-Version: 1.0","Content-type: text/html; charset=iso-8859-1"],
        auth: {
          user: 'no-reply-notify@yourfleetman.com',
          pass: 'P@55word!@#'
        }
      });
      
      var mailOptions = {
        from: req.body.name+' <no-reply-notify@yourfleetman.com>',
        // to: 'aaronsam41@gmail.com',
        to: req.body.email,
        // cc: [req.body.cc],
        subject: req.body.subject,
        headers: ["MIME-Version: 1.0","Content-type: text/html; charset=iso-8859-1"],
        html: req.body.mailBody,
        attachments: attachments
      };
      var imap = new Imap({
        user: 'info@yourfleetman.com',
        password:'P@55word!@#',
        host: "md-in-64.webhostbox.net",
        port: 993,
        tls: true,
        authTimeout: 30000,
        connTimeout: 30000,
      })
    
      // imap.once('ready', function () {
      //   if(imap.state != 'authenticated') {
      //     imap.connect()
      //   }
      //   imap.openBox('inbox.Sent', false, (err, box) => {
      //     if (err) console.log(err)
    
      //     let msg, htmlEntity,pdfEntity;
      //     msg = mimemessage.factory({
      //       contentType: 'multipart/alternate',
      //       body: []
      //     });
      //     htmlEntity = mimemessage.factory({
      //       contentType: 'text/html;charset=utf-8',
      //       body: mailOptions.html
      //     });
    
      //     var arry=[];
    
      //     attachments.forEach(element => {
      //       var bitmap = fs.readFileSync(element.path);
      //       var pdf = new Buffer.from(bitmap).toString('base64');
    
      //       pdfEntity = mimemessage.factory({
      //         contentType: 'application/pdf',
      //         contentTransferEncoding: 'base64',
      //         body:pdf
      //       });
            
      //       pdfEntity.header('Content-Disposition', 'attachment ;filename='+element.fileName);
    
      //       arry.push(pdfEntity)
      //     });
    
      //     msg.header('Message-ID', Math.random().toString());
      //     msg.header('From', mailOptions.from);
      //     msg.header('To', mailOptions.to);
      //     msg.header('Subject', mailOptions.subject);
      //     msg.header('Date', new Date());
      //     msg.body.push(htmlEntity);
      //     arry.forEach(element => {
      //       msg.body.push(element);
      //     });
      //     // msg.body.push(plainEntity);
    
      //     imap.append(msg.toString());
    
      //   })
      // });
    
      // imap.on('error', function (err) {
      //   // console.log(err);
      // });
    
      // imap.once('end', function () {
      //   // console.log(response);
      // });
      
      // imap.connect();
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("Email "+error);
        } 
        else {
    
          console.log('Email sent: ' + info.response);
    
          attachments.forEach(element => {
            
            fs.unlink(element.path,()=>{})
          });

          res.json({success:info.message});
        }
      });
    
    }
  })

});

router.post('/sendMailBookingConfirm', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", async function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    var attachments=[]

    var files=[]
    files.push(req.body.key)
    

    for await (var i of req.body.key)
    {
      
      const params = {
        Bucket: 'yfmtest',
        Key: req.body.name+'/bookingFiles/'+req.body.bookingId+"/"+i
       };

      var file = fs.createWriteStream('./'+i);

      s3.getObject(params, function (err, data) {
          if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
          }

          file.write(data.Body);
      })

      attachments.push(file);
    }

      var transporter = nodemailer.createTransport({
        service: "SMTP",
        host: "md-in-64.webhostbox.net",
        port:'465',
        // headers: ["MIME-Version: 1.0","Content-type: text/html; charset=iso-8859-1"],
        auth: {
          user: 'no-reply-notify@yourfleetman.com',
          pass: 'P@55word!@#'
        }
      });
      
      var mailOptions = {
        from: req.body.name+' <no-reply-notify@yourfleetman.com>',
        // to: 'aaronsam41@gmail.com',
        to: req.body.email,
        // cc: [req.body.cc],
        subject: req.body.subject,
        headers: ["MIME-Version: 1.0","Content-type: text/html; charset=iso-8859-1"],
        html: req.body.mailBody,
        attachments: attachments
      };
      var imap = new Imap({
        user: 'info@yourfleetman.com',
        password:'P@55word!@#',
        host: "md-in-64.webhostbox.net",
        port: 993,
        tls: true,
        authTimeout: 30000,
        connTimeout: 30000,
      })
    
      // imap.once('ready', function () {
      //   if(imap.state != 'authenticated') {
      //     imap.connect()
      //   }
      //   imap.openBox('inbox.Sent', false, (err, box) => {
      //     if (err) console.log(err)
    
      //     let msg, htmlEntity,pdfEntity;
      //     msg = mimemessage.factory({
      //       contentType: 'multipart/alternate',
      //       body: []
      //     });
      //     htmlEntity = mimemessage.factory({
      //       contentType: 'text/html;charset=utf-8',
      //       body: mailOptions.html
      //     });
    
      //     var arry=[];
    
      //     attachments.forEach(element => {
      //       var bitmap = fs.readFileSync(element.path);
      //       var pdf = new Buffer.from(bitmap).toString('base64');
    
      //       pdfEntity = mimemessage.factory({
      //         contentType: 'application/pdf',
      //         contentTransferEncoding: 'base64',
      //         body:pdf
      //       });
            
      //       pdfEntity.header('Content-Disposition', 'attachment ;filename='+element.fileName);
    
      //       arry.push(pdfEntity)
      //     });
    
      //     msg.header('Message-ID', Math.random().toString());
      //     msg.header('From', mailOptions.from);
      //     msg.header('To', mailOptions.to);
      //     msg.header('Subject', mailOptions.subject);
      //     msg.header('Date', new Date());
      //     msg.body.push(htmlEntity);
      //     arry.forEach(element => {
      //       msg.body.push(element);
      //     });
      //     // msg.body.push(plainEntity);
    
      //     imap.append(msg.toString());
    
      //   })
      // });
    
      // imap.on('error', function (err) {
      //   // console.log(err);
      // });
    
      // imap.once('end', function () {
      //   // console.log(response);
      // });
      
      // imap.connect();
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log("Email "+error);
        } 
        else {
    
          console.log('Email sent: ' + info.response);
    
          attachments.forEach(element => {
            
            fs.unlink(element.path,()=>{})
          });

          res.json({success:info.message});
        }
      });
    
    }
  })

});


router.post('/sendMail', (req, res) => {

  var transporter = nodemailer.createTransport({
    service: "SMTP",
    host: "md-in-64.webhostbox.net",
    port:'465',
    // headers: ["MIME-Version: 1.0","Content-type: text/html; charset=iso-8859-1"],
    auth: {
      user: 'info@yourfleetman.com',
      pass: 'P@55word!@#'
    }
  });

  var attachments=[]

  if(req.body.attachments != undefined)
  {
    attachments = req.body.attachments
  }
  
  var mailOptions = {
    from: req.body.name+' <info@yourfleetman.com>',
    // to: 'aaronsam41@gmail.com',
    to: req.body.email,
    replyTo: req.body.companyEmail,
    cc: [req.body.cc],
    subject: req.body.subject,
    headers: ["MIME-Version: 1.0","Content-type: text/html; charset=iso-8859-1"],
    html: req.body.mailBody,
    attachments: attachments
  };
  var imap = new Imap({
    user: 'info@yourfleetman.com',
    password:'P@55word!@#',
    host: "md-in-64.webhostbox.net",
    port: 993,
    tls: true,
    authTimeout: 30000,
    connTimeout: 30000,
  })

  imap.once('ready', function () {
    if(imap.state != 'authenticated') {
      imap.connect()
    }
    imap.openBox('inbox.Sent', false, (err, box) => {
      if (err) console.log(err)

      let msg, htmlEntity,pdfEntity;
      msg = mimemessage.factory({
        contentType: 'multipart/alternate',
        body: []
      });
      htmlEntity = mimemessage.factory({
        contentType: 'text/html;charset=utf-8',
        body: mailOptions.html
      });

      var arry=[];

      attachments.forEach(element => {
        var bitmap = fs.readFileSync(element.path);
        var pdf = new Buffer.from(bitmap).toString('base64');

        pdfEntity = mimemessage.factory({
          contentType: 'application/pdf',
          contentTransferEncoding: 'base64',
          body:pdf
        });
        
        pdfEntity.header('Content-Disposition', 'attachment ;filename='+element.fileName);

        arry.push(pdfEntity)
      });

      msg.header('Message-ID', Math.random().toString());
      msg.header('From', mailOptions.from);
      msg.header('To', mailOptions.to);
      msg.header('Subject', mailOptions.subject);
      msg.header('Date', new Date());
      msg.body.push(htmlEntity);
      arry.forEach(element => {
        msg.body.push(element);
      });
      // msg.body.push(plainEntity);

      imap.append(msg.toString());

    })
  });

  imap.on('error', function (err) {
    // console.log(err);
  });

  imap.once('end', function () {
    // console.log(response);
  });
  
  imap.connect();
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log("Email "+error);
    } 
    else {

      console.log('Email sent: ' + info.response);

      req.body.attachments.forEach(element => {
        fs.unlink(element.path,()=>{})
      });

      req.body.imgFiles.forEach(element=>{
        fs.unlink(element.fileName,()=>{})
      })

      res.json({success:info.message})
    }
  });

});

router.post('/sendWhatsApp', (req, res) => {

  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      var i=0;
      req.body.number.forEach(element => {
        req.body.number[i] = "91"+req.body.number[i]
        i++;
      });

      var numbers = req.body.number.join(",")
  
      console.log(req.body.message);
      console.log(numbers);
      

      request.get(`http://223.196.94.105/v2.0/html/insert_whatsapp_api.php?username=Tech Simians&password=906409&mobile_no=${numbers}&campaign_name=API&message=${req.body.message}`,function(err,result){
        if(err)
        {
          console.log(err);
        }

        // result.body = result.body.split("<br/>")[1].split("<br>")[0]

        // request.get(`http://223.196.94.133/v2.0/html/whatsapp_fetch_api.php?username=Tech Simians&requestid=${result.body}`,function(err,result){
        // if(err)
        // {
        //   console.log(err);
        // }
        
          // console.log(result.body);
        
        // })

        res.json(result);
      })  
    }
  })

});

router.post('/sendSMS', (req, res) => {

  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      
      var numbers = req.body.number.join(",")
      console.log(numbers);
      request.get(`http://quick.admarksolution.com/vendorsms/pushsms.aspx?clientid=8c0fa070-df8f-4b15-88f4-3d1b6933982a&apikey=vzoo8353VZOOte1c10&msisdn=${numbers}&sid=YFMBKG&msg=${req.body.message}&fl=0&gwid=2`,function(err,result){
        if(err)
        {
          console.log(err);
        }
        console.log(result.body,"wesda");
        result.body = JSON.parse(result.body)
        res.json(result.body)   
        
      })  
    }
  })

});

router.post('/insertToken', (req, res) => {

  connection((err,connection)=>{
  connection.query(`INSERT INTO FCMNotification(userId,regToken) 
                    VALUES ('${req.body.userId}', '${req.body.regToken}' ) 
                    ON DUPLICATE KEY UPDATE regToken = '${req.body.regToken}';`,req.body,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  })

})

router.post('/insertWebToken', (req, res) => {

  connection((err,connection)=>{
  connection.query(`INSERT INTO FCMNotification(userId,webToken) 
                    VALUES ('${req.body.userId}', '${req.body.webToken}' ) 
                    ON DUPLICATE KEY UPDATE webToken = '${req.body.webToken}';`,req.body,function (err, result) {
    if (err) {
       connection.release();
    }

    subscribeToTopic(req.body.webToken,req.body.ownerId);

   res.json(result)

   connection.release();
  });

  })
})

function subscribeToTopic(webToken, ownerId)
{
  // These registration tokens come from the client FCM SDKs.
  var registrationTokens = [
    webToken
  ];
  
  var topic = ''+ownerId;
  // Subscribe the devices corresponding to the registration tokens to the topic.
  admin.messaging().subscribeToTopic(registrationTokens, topic)
    .then(function(response) {
      // See the MessagingTopicManagementResponse reference documentation
      // for the contents of response.
      console.log('Successfully subscribed to topic:', response);
    })
    .catch(function(error) {
      console.log('Error subscribing to topic:', error);
    });
}

function unSubscribeFromTopic(webToken, ownerId)
{
  
  var registrationTokens = [
    webToken
  ];
  
  var topic = ''+ownerId;
  
  admin.messaging().unsubscribeFromTopic(registrationTokens, topic)
    .then(function(response) {
      console.log('Successfully unsubscribed to topic:', response);
      
    })
    .catch(function(error) {
      console.log('Error unsubscribing to topic:', error);
    });
}

router.post('/unsubscribeTopic', (req, res) => {

  connection((err,connection)=>{
    connection.query(`select regToken,webToken from FCMNotification where userId='${req.body.id}'`,function (err, result) {
      if (err) {
        console.log(err);
        connection.release();
      }
      if(result.length>0)
      {

        unSubscribeFromTopic(result[0].webToken,req.body.id)
        res.json({message:"unsubscribed"})
      }
      if(result.length == 0)
      {
        res.json({message:"No device registered"})
      }
  
      connection.release();
    });
  
    })
  
})

router.post('/makeAppCall', (req, res) => {

      connection((err,connection)=>{
      connection.query(`select regToken from FCMNotification where userId='${req.body.userId}'`,function (err, result) {
        if (err) {
          console.log(err);
          connection.release();
        }
        
        if(result.length>0)
        {
          var token = result[0].regToken

          var payload = {
            data:{
              number: req.body.number,
              userId : req.body.userId,
              type: "call"
            }
          };

          var options = {
            priority: "high",
            timeToLive: 20
          }

          admin.messaging().sendToDevice(token,payload,options).then(function(response){
            console.log("Successfully sent: zxc",response)
            res.json(response);
          }).catch(function(error){
            console.log(error)
            res.json(error);
          })
        }
        if(result.length == 0)
        {
          res.json("No device registered")
        }

    connection.release();
  });

  })
  
});

router.post('/checkDevice', (req, res) => {
  
  connection((err,connection)=>{
  connection.query(`select regToken,webToken from FCMNotification where userId='${req.body.id}'`,function (err, result) {
    if (err) {
      console.log(err);
      connection.release();
    }
    if(result.length>0)
    {
      var token = result[0].regToken

      var payload = {
        data:{
          userId : req.body.id,
          type: "check"
        }
      };

      var options = {
        priority: "high",
        timeToLive: 20
      }

      admin.messaging().sendToDevice(token,payload,options).then(function(response){
        console.log("Successfully sent: asd",response)
        res.json(response);
      }).catch(function(error){
        console.log(error)
        res.json(error);
      })

      subscribeToTopic(result[0].webToken,req.body.id)

    }
    if(result.length == 0)
    {
      res.json("No device registered")
    }

    connection.release();
  });

  })

});

router.post('/setDeviceStatus', (req, res) => {
  
  connection((err,connection)=>{
    connection.query(`select webToken from FCMNotification where userId='${req.body.userId}'`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      if(result.length>0)
      {

        var call={
          number:req.body.number,
          type:'call'
        }
  
        var payload = {
          notification: {
            title: "YourFleetMan",
            body: JSON.stringify(call)
          }
        };
  
        admin.messaging().sendToTopic(req.body.userId, payload)
        .then(function(response) {
          console.log("Successfully sent message:", response);
          res.json(response)
        })
        .catch(function(error) {
          console.log("Error sending message:", error);
        })
      }
      if(result.length == 0)
      {
        res.json("No device registered")
      }
  
      connection.release();
    });
  
    })  
});

router.post('/getAllBookedBy', (req, res) => {
  
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from bookingBookedBy where bookingId=${req.body.bookingId}`,req.body,function (err, result) {
          if (err) {
            console.log(err);
            
            connection.release();
          }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/getAllPassengers', (req, res) => {
    
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from travellingPassenger where bookingId=${req.body.bookingId}`,req.body,function (err, result) {
          if (err) {
            console.log(err);
            
            connection.release();
          }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/insertContactLogs', (req, res) => {
  
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`insert into dutyContactLogs set?`,req.body,function (err, result) {
          if (err) {
       connection.release();
    }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/insertHotelBookingContactLogs', (req, res) => {
  
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`insert into hotelBookingContactLogs set?`,req.body,function (err, result) {
          if (err) {
            console.log(err);
            
          connection.release();
        }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/insertBookingContactLogs', (req, res) => {
  
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`insert into bookingContactLogs set?`,req.body,function (err, result) {
          if (err) {
            console.log(err);
            
          connection.release();
        }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/insertFlightBookingContactLogs', (req, res) => {
  
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`insert into flightBookingContactLogs set?`,req.body,function (err, result) {
          if (err) {
            console.log(err);
            
          connection.release();
        }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/insertVisaContactLogs', (req, res) => {
  
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`insert into visaContactLogs set?`,req.body,function (err, result) {
          if (err) {
            console.log(err);
            
          connection.release();
        }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/getContactLogs', (req, res) => {
  
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from dutyContactLogs where dutyId=${req.body.dutyId} and type='${req.body.type}'`,function (err, result) {
          if (err) {
       connection.release();
    }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/getHotelBookingContactLogs', (req, res) => {
  
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from hotelBookingContactLogs where hotelBookingId=${req.body.hotelBookingId}`,function (err, result) {
          if (err) {
       connection.release();
    }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/getBookingContactLogs', (req, res) => {
  
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from bookingContactLogs where bookingId=${req.body.bookingId}`,function (err, result) {
          if (err) {
       connection.release();
    }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/getFlightBookingContactLogs', (req, res) => {
  
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from flightBookingContactLogs where flightBookingId=${req.body.flightBookingId}`,function (err, result) {
          if (err) {
       connection.release();
    }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/getVisaContactLogs', (req, res) => {
  
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from visaContactLogs where visaId=${req.body.visaId}`,function (err, result) {
          if (err) {
       connection.release();
    }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/insertContactCount', (req, res) => {
    
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`insert into contactCount (sms,whatsApp,email,date,ownerId) values (${req.body.sms},${req.body.whatsApp},${req.body.email},'${moment().format("YYYY-MM-DD")}','${req.body.ownerId}') 
        ON DUPLICATE KEY 
        update sms=sms+${req.body.sms}, whatsApp=whatsApp+${req.body.whatsApp}, email=email+${req.body.email}`,function (err, result) {
          if (err) {
            connection.release();
          }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/insertBookingCount', (req, res) => {
    
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`insert into contactCount (booking,date,ownerId) values (${req.body.booking},'${moment().format("YYYY-MM-DD")}','${req.body.ownerId}') 
        ON DUPLICATE KEY 
        update booking=booking+${req.body.booking}`,function (err, result) {
          if (err) {
            connection.release();
          }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/insertCallCount', (req, res) => {
    
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`insert into contactCount (calls,date,ownerId) values (1,'${moment().format("YYYY-MM-DD")}','${req.body.ownerId}') 
        ON DUPLICATE KEY 
        update calls=calls+1`,function (err, result) {
          if (err) {
            connection.release();
          }
          else
          {
            res.json(result)
            connection.release();
          }
        });
      });
    }
  });
});

router.post('/getSMSCount', (req, res) => {
    
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`SELECT MONTH(date) as MONTH, SUM(sms) as SMS FROM contactCount WHERE YEAR(date)='${req.body.year}' and ownerId='${req.body.ownerId}' GROUP BY YEAR(date), MONTH(date) ORDER BY YEAR(date), MONTH(date)`,function (err, result) {
          if (err) {
            connection.release();
          }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/getWhatsAppCount', (req, res) => {
    
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`SELECT MONTH(date) as MONTH, SUM(whatsApp) as WHATSAPP FROM contactCount WHERE YEAR(date)='${req.body.year}' and ownerId='${req.body.ownerId}' GROUP BY YEAR(date), MONTH(date) ORDER BY YEAR(date), MONTH(date)`,function (err, result) {
          if (err) {
            connection.release();
          }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/getCallCount', (req, res) => {
    
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`SELECT MONTH(date) as MONTH, SUM(calls) as CALLS FROM contactCount WHERE YEAR(date)='${req.body.year}' and ownerId='${req.body.ownerId}' GROUP BY YEAR(date), MONTH(date) ORDER BY YEAR(date), MONTH(date)`,function (err, result) {
          if (err) {
            connection.release();
          }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/getBookingCount', (req, res) => {
    
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`SELECT MONTH(date) as MONTH, SUM(booking) as booking FROM contactCount WHERE YEAR(date)='${req.body.year}' and ownerId='${req.body.ownerId}' GROUP BY YEAR(date), MONTH(date) ORDER BY YEAR(date), MONTH(date)`,function (err, result) {
          if (err) {
            connection.release();
          }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

module.exports = router;