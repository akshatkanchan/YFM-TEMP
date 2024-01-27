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

router.post('/retrieve', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`select * from permissions where userId='${req.body.id}'`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
     res.json(result)
     connection.release();
    });
  
    })
}
  })
});

router.post('/add', (req, res) => {

  // var token=req.headers['authorization'];
  

  // if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  // jwt.verify(token, "secret", function(err, decoded) {
  // if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  // else{
  connection((err,connection)=>{
  connection.query("insert into permissions set ?",req.body,function (err, result) {
    if (err) {
      console.log(err); 
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  })
//   }
// })
});

router.post('/update', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update permissionsProfile set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/delete', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`delete from permissionsProfile where id=${req.body.id}`,req.body,function (err, result) {
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