const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


var admin = require('./firebase-admin');

var connection= require('./db.js');

router.post('/retrieveDuty', (req, res, next) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from dutyContactLogs where ownerId='${req.body.ownerId}'`,function (err, result) {
    if (err) {
      console.log(err)
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  });
  }
})
});

router.post('/retrieveBookings', (req, res, next) => {
          var token=req.headers['authorization'];
    
      if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
      jwt.verify(token, "secret", function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      else{
    
      connection((err,connection)=>{
      connection.query(`select * from bookingContactLogs where ownerId='${req.body.ownerId}'`,function (err, result) {
        if (err) {
           connection.release();
        }
       res.json(result)
       connection.release();
      });
    
      });
      }
    })
});
router.post('/retrieveFlight', (req, res, next) => {
          var token=req.headers['authorization'];
    
      if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
      jwt.verify(token, "secret", function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      else{
    
      connection((err,connection)=>{
      connection.query(`select * from flightBookingContactLogs where ownerId='${req.body.ownerId}'`,function (err, result) {
        if (err) {
           connection.release();
        }
       res.json(result)
       connection.release();
      });
    
      });
      }
    })
    });
router.post('/retrieveHotel', (req, res, next) => {
                  var token=req.headers['authorization'];
        
          if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
          
          jwt.verify(token, "secret", function(err, decoded) {
          if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
          else{
        
          connection((err,connection)=>{
          connection.query(`select * from hotelBookingContactLogs where ownerId='${req.body.ownerId}'`,function (err, result) {
            if (err) {
               connection.release();
            }
           res.json(result)
           connection.release();
          });
        
        });
    }
    })
});
router.post('/retrieveVisa', (req, res, next) => {
          var token=req.headers['authorization'];
    
      if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
      jwt.verify(token, "secret", function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      else{
    
      connection((err,connection)=>{
      connection.query(`select * from visaContactLogs where ownerId='${req.body.ownerId}'`,function (err, result) {
        if (err) {
           connection.release();
        }
       res.json(result)
       connection.release();
      });
    
      });
      }
    })
});
module.exports = router;