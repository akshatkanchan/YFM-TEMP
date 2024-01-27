const express = require('express');
const router = express.Router();
const fs=require('fs');
const config = require('../config/config');
var mysql = require('mysql');
const jwt = require('jsonwebtoken');

const options = {
  user: config.get('MYSQL_USER'),
  password: config.get('MYSQL_PASSWORD'),
  database: 'yourfspl_fleetfinal',
  host:'103.50.162.146',
  // ssl:{
  //   ca:fs.readFileSync(__dirname+'/../config/server-ca.pem'),
  //   key:fs.readFileSync(__dirname+'/../config/client-key.pem'),
  //   cert:fs.readFileSync(__dirname+'/../config/client-cert.pem')
  // }
};

if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
  options.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
}

var connection= require('./db.js');

router.post('/retrieveExportBookingProfiles', (req, res) => {
  
  var token=req.headers['authorization'];
  
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from exportBookingProfiles where ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrieveExportDutyProfiles', (req, res) => {
  
  var token=req.headers['authorization'];
  
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from exportDutyProfiles where ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/addExportBookingProfiles', (req, res) => {
  
  var token=req.headers['authorization'];
  
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`insert into exportBookingProfiles set ?`,req.body,function (err, result) {
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

router.post('/addExportDutyProfiles', (req, res) => {
  
  var token=req.headers['authorization'];
  
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      console.log(req.body);
      
      connection((err,connection)=>{
        connection.query("insert into exportDutyProfiles set ?",req.body,function (err, result) {
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

module.exports = router;