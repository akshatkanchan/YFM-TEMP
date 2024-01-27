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
    connection.query(`select d.name,p.baseRate,p.extraHrs,p.extraKm,p.id,d.id as dutyTypeId from dutyType d left join supplierPrices p on p.dutyTypeId=d.id and p.vehicleGroupId=${req.body.vehicleGroupId} and p.city='${req.body.city}' and p.customerId='${req.body.supplierId}' where d.ownerId='${req.body.ownerId}'`,function (err, result) {
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

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into supplierPrices set ?",req.body,function (err, result) {
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
  connection.query(`update supplierPrices set baseRate=${req.body.baseRate},extraKm=${req.body.extraKm},extraHrs=${req.body.extraHrs} where id=${req.body.id}`,function (err, result) {
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
  connection.query(`select * from supplierPrices where vehicleGroupId=${req.body.vehicleGroupId} and city='${req.body.city}' and dutyTypeId='${req.body.dutyTypeId}'  and customerId='${req.body.customerOwnerId}'`,function (err, result) {
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



router.post('/getB2BCustomer', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from customer where ownerId LIKE '${req.body.ownerId}' and (customerOwnerId!=null or customerOwnerId!='')`,function (err, result) {
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

module.exports = router;