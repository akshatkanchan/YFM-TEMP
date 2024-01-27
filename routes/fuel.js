const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var connection= require('./db.js');

router.post('/retrieve', (req, res) => {
  // console.log("retrieve")
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
      connection.query(`select * from fuelExpenses where ownerId='${req.body.ownerId}'`,function (err, result) {
        if (err) {
          console.log(err);
          return;
        }
      res.json(result)
      connection.release();
      });
      })
    }
  });
});

router.post('/retrieveCurrentKMS', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
      connection.query(`select currentkms, quantity from fuelExpenses where vehicleNumber='${req.body.vehicleNumber}' order by date desc limit 1`,function (err, result) {
        if (err) {
          console.log(err);
          return;
        }
      res.json(result)
      connection.release();
      });
      })
    }
  });
});

router.post('/add', (req, res) => {
// console.log("called")
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into fuelExpenses set ?",req.body,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });
  })
  }
});

});


router.post('/update', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
  connection.query(`update fuelExpenses set ? where id=${req.body.id}`,req.body,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });
  })
  }
});
});

router.post('/delete', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    
  connection((err,connection)=>{
  connection.query(`delete from fuelExpenses where id=${req.body.id}`,req.body,function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    }
   res.json(result)
   connection.release();
  });
  })
  }
});

});

module.exports = router;