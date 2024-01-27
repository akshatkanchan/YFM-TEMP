const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var connection= require('./db.js');


router.post('/retrieve', (req, res) => {
    
  var token=req.headers['authorization'];
  
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from wallet where ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/addMoney', (req, res) => {
    
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`update wallet set amount=amount+${req.body.amount} where ownerId='${req.body.ownerId}'`,function (err, result) {
          if (err) {
            console.log(err);
            connection.release();
          }
          updateDepositeTransaction(req)
          res.json(result)
          connection.release();
        });
      });
    }
  });
});
function updateDepositeTransaction(req) {
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`insert into walletDepositTransactions set ?`,req.body,function (err, result) {
          if (err) {
            console.log(err);
            connection.release();
          }
          // res.json(result)
          connection.release();
        });
      });
    }
  });
}

router.post('/insertMoney', (req, res) => {
  connection((err,connection) => {
    connection.query(`insert wallet set amount=0 where ownerId='${req.body.ownerId}'`,function (err, result) {
      if (err) {
        console.log(err);
        
        connection.release();
      }
      res.json(result)
      connection.release();
    });
  });  
});

router.post('/addDepositTransaction', (req, res) => {
    
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`inset into walletDepositTransaction set ?`,req.body,function (err, result) {
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

router.post('/retrieveDepositTransactions', (req, res) => {
    
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from walletDepositTransactions where ownerId='${req.body.ownerId}' and date(date) BETWEEN '${req.body.from}' AND '${req.body.to}'`,function (err, result) {
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

router.post('/retrieveWalletTransactions', (req, res) => {
    
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from walletTransactions where ownerId='${req.body.ownerId}' and date(date) BETWEEN '${req.body.from}' AND '${req.body.to}'`,function (err, result) {
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

router.post('/addwalletTransaction', (req, res) => {
    
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`insert into walletTransaction set ?`,req.body,function (err, result) {
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

router.post('/addWallet', (req, res) => {
  
      connection((err,connection)=>{
        connection.query(`insert into wallet set onwerId='${req.body.ownerId}',amount=5000`,function (err, result) {
          if (err) {
            console.log(err);
            
            connection.release();
          }
          res.json(result)
          connection.release();
        });
      });
});

module.exports = router;