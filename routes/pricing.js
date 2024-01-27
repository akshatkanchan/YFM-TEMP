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
  connection.query(`select d.name,p.baseRate,p.extraHrs,p.extraKm,p.id,d.id as dutyTypeId from dutyType d left join prices p on p.dutyTypeId=d.id and p.vehicleGroupId=${req.body.vehicleGroupId} and p.city='${req.body.city}' and p.customerId='${req.body.customerId}' where d.ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrieveCustomer', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from customer where ownerId LIKE '${req.body.ownerId}'`,function (err, result) {
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
  connection.query("insert into prices set ?",req.body,function (err, result) {
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
  connection.query(`update prices set baseRate=${req.body.baseRate},extraKm=${req.body.extraKm},extraHrs=${req.body.extraHrs} where id=${req.body.id}`,function (err, result) {
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

router.post('/getPrice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from prices where vehicleGroupId=${req.body.vehicleGroupId} and city='${req.body.city}' and customerId='${req.body.customerId}' and dutyTypeId='${req.body.dutyTypeId}'`,function (err, result) {
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

router.post('/copyPricing', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
      connection.query(`insert IGNORE into prices (vehicleGroupId,city,baseRate,extraHrs,extraKm,dutyTypeId,customerId,ownerId) select vehicleGroupId,city,baseRate,extraHrs,extraKm,dutyTypeId,${req.body.customerId},ownerId from prices where customerId=${req.body.fromCustomerId}`,function (err, result) {
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