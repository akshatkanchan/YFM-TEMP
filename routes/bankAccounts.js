const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var connection= require('./db.js');


// Register
router.post('/retrieve', (req, res, next) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from bankAccount where ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/add', (req, res, next) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
  connection.query("insert into bankAccount set ?",req.body,function (err, result) {
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

router.post('/update', (req, res, next) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update bankAccount set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/delete', (req, res, next) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`delete from bankAccount where id=${req.body.id}`,req.body,function (err, result) {
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

module.exports = router;