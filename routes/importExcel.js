const express = require('express');
const router = express.Router();
const fs=require('fs');
const config = require('../config/config');
var mysql = require('mysql');
const jwt = require('jsonwebtoken');
var moment = require('moment');

const options = {
  user: config.get('MYSQL_USER'),
  password: config.get('MYSQL_PASSWORD'),
  database: 'yourfspl_fleetfinal',
  host:'103.50.162.146',
  multipleStatements:true
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

router.post('/getCustomerId', (req, res) => {

  connection((err,connection)=>{
  connection.query(`select id from customer where ownerId='${req.body.ownerId}' and name like '${req.body.cname}'`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  });
});

router.post('/getDutyTypeId', (req, res) => {

    connection((err,connection)=>{
    connection.query(`select id from dutyType where ownerId='${req.body.ownerId}' and name like '${req.body.dType}'`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
     res.json(result)
     connection.release();
    });
  
    });
});


router.post('/getVehicleGroupId', (req, res) => {
    connection((err,connection)=>{
    connection.query(`select id from vehicleGroup where ownerId='${req.body.ownerId}' and name like '${req.body.vGroup}'`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
     res.json(result)
     connection.release();
    });
  
    });
});

router.post('/getDetails', (req, res) => {
  var query =`select id from customer where ownerId='${req.body.ownerId}' and name like '${req.body.cname}';`;
  query=query+`select id from dutyType where ownerId='${req.body.ownerId}' and name like '${req.body.dType}';`;
  query=query+`select id from vehicleGroup where ownerId='${req.body.ownerId}' and name like '${req.body.vGroup}'`;
  
  connection((err,connection)=>{

  connection.query(query,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

})
});

router.post('/addBookings', (req, res) => {
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  console.log(req.body);
  
    connection((err,connection)=>{
        connection.query("insert into bookings set ?",req.body.booking,function (err, result) {
          if (err) {
            connection.release();
          }
          console.log(result);
          
          bookByAdd(result.insertId,req);
          passengerAdd(result.insertId,req);
          addDuties(result.insertId,req);
          res.json(result)
          connection.release();
        });
    });
  }
  })
});

function passengerAdd(id,req)
{
  connection((err,connection)=>{
  connection.query(`insert into travellingPassenger (passenger,passengerNo,passengerEmail,bookingId) values  ('${req.body.passenger.passenger}','${req.body.passenger.passengerNo}','${req.body.passenger.passengerEmail}','${id}')`,function (err, resul1) {
    if (err) {
       connection.release();
    }
    connection.release();
  });
  })
}

function bookByAdd(id,req)
{
  connection((err,connection)=>{
  connection.query(`insert into bookingBookedBy (bookByName,bookByNo,bookByEmail,bookingId) values  ('${req.body.bookedBy.bookByName}','${req.body.bookedBy.bookByNo}','${req.body.bookedBy.bookByEmail}','${id}')`,function (err, resul1) {
    if (err) {
       connection.release();
    }
    connection.release();
  });
  })
}

function addDuties(id,req)
{
  var duty=
  {
     bid:id,
     bookBy:req.body.booking.bookBy,
     passenger:req.body.booking.passenger,
     status:req.body.booking.status,
     cname:req.body.booking.cname,
     bookByNo:req.body.booking.bookByNo,
     bookByEmail:req.body.booking.bookByEmail,
     passenger:req.body.booking.passenger,
     passengerNo:req.body.booking.passengerNo, 
     passengerEmail:req.body.booking.passengerEmail,
     fromLoc:req.body.booking.fromLoc,
     toLoc:req.body.booking.toLoc,
     reportingTime:req.body.booking.reportingTime,
     startFromGarage:req.body.booking.startFromGarage,
     reportingAddress:req.body.booking.reportingAddress,
     dropAddress:req.body.booking.dropAddress,
     shortReportingAddress:req.body.booking.shortReportingAddress,
     flightTrainNo:req.body.booking.flightTrainNo,
     dispatchCenter:req.body.booking.dispatchCenter,
     billTo:req.body.booking.billTo,
     price:req.body.booking.price,
     remarks:req.body.booking.remarks,
     operatorNotes:req.body.booking.operatorNotes,
     label:req.body.booking.label,
     vehicleGroup:req.body.booking.vehicleGroup,
     dutyType:req.body.booking.dutyType,
     vehicleGroupId:req.body.booking.vehicleGroupId,
     dutyTypeId:req.body.booking.dutyTypeId,
     ownerId:req.body.booking.ownerID,
     customerId:req.body.booking.customerId
  }
    if(req.body.booking.startDate!=req.body.booking.endDate)
    {
      var sDate=new Date(req.body.booking.startDate)
      var eDate=new Date(req.body.booking.endDate)
   
        while(sDate<=eDate)
        {
              duty.startDate=moment(sDate,"DD-MM-YYYY").format('YYYY-MM-DD')
              sDate.setDate(sDate.getDate() + 1);
              connection((err,connection)=>{
              connection.query("insert into duties set ?",duty,function (err, result) {
                if (err) {
                  console.log(err);
                  return;
                }
                connection.release();
              });
              });
        }
    }
    else
    {
      var sDate=new Date(req.body.booking.startDate)
      duty.startDate=moment(sDate,"DD-MM-YYYY").format('YYYY-MM-DD')
      connection((err,connection)=>{
      connection.query("insert into duties set ?",duty,function (err, result) {
        if (err) {
          console.log(err);
          return;
        }
        connection.release();
      });
      });
    }
}

router.post('/getCustomerGroupId', (req, res) => {

  connection((err,connection)=>{
  connection.query(`select id from customerGroup where ownerId='${req.body.ownerId}' and name like '${req.body.cGroup}'`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  });
});

router.post('/getBranchId', (req, res) => {

  connection((err,connection)=>{
  connection.query(`select id from branches where ownerId='${req.body.ownerId}' and name like '${req.body.branchName}'`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  });
});

///////////////////// Download Formats ////////////////////////

router.get('/bookingFormat', (req, res) => {
  var file = __dirname + '/Booking Format.xlsx';
  res.download(file,'Booking Format - YFM.xlsx')
});

router.get('/customerFormat', (req, res) => {
  var file = __dirname + '/Customer Format.xlsx';
  res.download(file,'Customer Format - YFM.xlsx')
});

router.get('/driverFormat', (req, res) => {
  var file = __dirname + '/Driver Format.xlsx';
  res.download(file,'Driver Format - YFM.xlsx')
});

module.exports = router;