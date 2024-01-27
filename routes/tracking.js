const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const request = require('request');
const parser = require('xml2json');
const bcrypt = require('bcryptjs');;
const moment = require('moment');

var connection= require('./db.js');

router.post('/retrieve', (req, res) => {
    

    request.get('https://aditigps.com/jsp/Service.jsp?user=ashishrentacar&pass=123456', function (error, response, body) {
    var json = parser.toJson(body);
    res.json(json);
  });
    

});

router.post('/addTrackingInfo', (req, res) => {

  var token=req.headers['authorization'];

  var random = '';

  var trackInfo;

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    random = bcrypt.hashSync(''+req.body.dutyId,8);

    trackInfo = {
      randomNumber : random,
      dutyId: req.body.dutyId,
      vehicleId: req.body.vehicleId,
      driverId: req.body.driverId
    }

  
    connection((err,connection)=>{
    connection.query(`select randomNumber from trackingInfo where dutyId=${req.body.dutyId}`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      if(result.length==0)
      {
        
        connection.query("insert into trackingInfo set ?",trackInfo,function (err, result) {
          if (err) {
       connection.release();
    }
         res.json(random)
        });
      }
      else
      {
        res.json(result[0].randomNumber)
      }  
      connection.release();    
    });

  })
}
  })
});

router.post('/deleteTrackingInfo', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`delete from trackingInfo where dutyId=${req.body.dutyId}`,function (err, result) {
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

router.post('/retrieveTrackingInfo', (req, res) => {

  console.log("asd")
  connection((err,connection)=>{
  connection.query(`SELECT d.id, d.cname, d.passenger, d.reportingAddress, d.dropAddress, d.status, v.modelname, v.number, dr.name from trackingInfo t, duties d, vehicles v, drivers dr where d.id = t.dutyId and v.id = t.vehicleId and dr.id = t.driverId and t.randomNumber='${req.body.randomNumber}'`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   
  connection.release();
  });

  })
});

router.post('/addDriverTracker', (req, res) => {

  var CurrentDate = moment().format("DD-MM-YYYY HH:mm");
  connection((err,connection)=>{
  connection.query(`INSERT INTO driverTracker(driverId,lat,lng,ownerId,date,speed,rotation) 
  VALUES (${req.body.driverId},'${req.body.lat}','${req.body.lng}','${req.body.ownerId}','${CurrentDate}','${req.body.speed}','${req.body.rotation}') 
  ON DUPLICATE KEY UPDATE lat = '${req.body.lat}',lng='${req.body.lng}',date='${CurrentDate}',speed='${req.body.speed}',rotation='${req.body.rotation}'`,function (err, result) {
    if (err) {
      console.log(err)
       connection.release();
    }
   res.json(result)
   
  connection.release();
  });

  })
});

router.post('/getDriverTracker', (req, res) => {

  connection((err,connection)=>{
  connection.query(`select * from driverTracker where driverId=${req.body.driverId}`,function (err, result) {
    if (err) {
      console.log(err)
       connection.release();
    }
   res.json(result)
   
  connection.release();
  });

  })
});

router.post('/getDriversForTracker', (req, res) => {

  connection((err,connection)=>{
  connection.query(`SELECT name, dt.*,du.status,du.subStatus FROM driverTracker dt LEFT join drivers d  on d.id = dt.driverId LEFT JOIN duties du on du.driverId=dt.driverId and  du.status="Dispatched"  where d.ownerId = '${req.body.ownerId}'`,function (err, result) {
    if (err) {
      console.log(err)
       connection.release();
    }
   res.json(result)
   
  connection.release();
  });

  })
});

module.exports = router;