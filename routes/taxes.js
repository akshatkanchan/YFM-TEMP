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
  connection.query(`select * from taxes where ownerId = '${req.body.ownerId}'`,function (err, result) {
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

router.post('/add', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into taxes set ?",req.body,function (err, result) {
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

router.post('/update', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update taxes set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/retrieveTax', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select percent from taxes where name like '${req.body.tax}'`,function (err, result) {
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

  console.log("delete");
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`delete from taxes where id=${req.body.id}`,function (err, result) {
    if (err) {
      console.log(err);
      
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