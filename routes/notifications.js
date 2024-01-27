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

router.post('/retreive', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
  connection.query(`select * from Notification where ownerId='${req.body.ownerId}' and (DATE(dateTime)<='${req.body.startDate}' and DATE(dateTime)>='${req.body.endDate}')`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  })
}
  })
});

router.post('/getRecentNotifications', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret",async function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  try {
    await connection(async (err,connection)=>{
    await connection.query(`select * from Notification where ownerId='${req.body.ownerId}' limit 7`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
     res.json(result)
     connection.release();
    });
  
    })
  } catch (err) {
    
  }
}
  })
});

router.post('/setReadNotification', (req, res) => {

  // console.log(req.body.id)
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
  connection.query(`update Notification set status='Read' where id=${req.body.id}`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  })
}
  })
});

router.post('/getUnreadCount', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  try {
    connection(async(err,connection)=>{
    await connection.query(`select count(*) as count from Notification where ownerId='${req.body.ownerId}' and status='Unread'`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
     res.json(result)
     connection.release();
    });
  
    })
  } catch (err) {
    
  }
}
  })
});
router.post('/retrieveLazy', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
  connection.query(`select * from Notification where ownerId='${req.body.ownerId}' LIMIT 10 OFFSET ${req.body.offset}`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  })
}
  })
});

module.exports = router;