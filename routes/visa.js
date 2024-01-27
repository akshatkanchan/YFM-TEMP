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
        connection.query(`select * from visa where ownerId='${req.body.ownerId}' and status like '${req.body.status}'`,function (err, result) {
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

router.post('/retrieveTravellers', (req, res) => {
    
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from travellersInVisa where visaId=${req.body.id}`,function (err, result) {
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

router.post('/retrieveVisaByCustomer', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, "secret", function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      else{
        
        connection((err,connection)=>{
        connection.query(`select * from (select v.*, GROUP_CONCAT(tv.name) as travellers from visa v left join travellersInVisa tv on v.id=tv.visaId group by v.id) vv left join AdvancePaymentInVisaBookings a on vv.id = a.visaId where customerId='${req.body.customerId}' and status='Completed'`,function (err, result) {
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

router.post('/add', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into visa set ?",req.body,function (err, result) {
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

router.post('/addTravellers', (req, res) => {
    
      var token=req.headers['authorization'];
    
      if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
      jwt.verify(token, "secret", function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      else{
    
      connection((err,connection)=>{
      connection.query("insert into travellersInVisa set ?",req.body,function (err, result) {
        if (err) {
          console.log(err);
          return;
        }
       res.json(result)
       connection.release();
      });
      });
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
        
        
        connection.query(`update visa set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updateTraveller', (req, res) => {
  
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
    connection((err,connection)=>{
    connection.query(`update travellersInVisa set ? where id=${req.body.id}`,req.body,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
     res.json(result)
     connection.release();
    });
    });
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
        connection.query(`delete from travellersInVisa where visaId=${req.body.id}`,req.body,function (err, result) {
          if (err) {
            console.log(err);
            res.json(err)
          }   
        });
        connection.query(`delete from visa where id=${req.body.id}`,req.body,function (err, result) {
          if (err) {
            console.log(err);
            res.json(err)
          }
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/deleteTraveller', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
    
      connection((err,connection)=>{
        connection.query(`delete from travellersInVisa where id=${req.body.id}`,req.body,function (err, result) {
          if (err) {
            console.log(err);
            res.json(err)
          }   
          res.json(result)
          connection.release();
        });
      });
    }
  });
});

router.post('/addVisaFiles', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into visaFiles set ?",req.body,function (err, result) {
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

router.post('/getVisaFiles', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from visaFiles where flightId=${req.body.id}`,function (err, result) {
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