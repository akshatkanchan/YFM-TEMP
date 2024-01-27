const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var connection = require('./db.js');

router.post('/retrieveDuties', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     
      var query=`select count(*) as count  from duties where month(startDate)='1' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from duties where month(startDate)='2' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from duties where month(startDate)='3' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from duties where month(startDate)='4' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from duties where month(startDate)='5' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from duties where month(startDate)='6' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from duties where month(startDate)='7' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from duties where month(startDate)='8' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from duties where month(startDate)='9' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from duties where month(startDate)='10' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from duties where month(startDate)='11' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from duties where month(startDate)='12' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}'`;


      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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

router.post('/retrieveHotels', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     
      var query=`select count(*) as count  from hotelBooking where month(checkInDate)='1' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from hotelBooking where month(checkInDate)='2' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from hotelBooking where month(checkInDate)='3' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from hotelBooking where month(checkInDate)='4' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from hotelBooking where month(checkInDate)='5' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from hotelBooking where month(checkInDate)='6' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from hotelBooking where month(checkInDate)='7' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from hotelBooking where month(checkInDate)='8' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from hotelBooking where month(checkInDate)='9' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from hotelBooking where month(checkInDate)='10' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from hotelBooking where month(checkInDate)='11' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from hotelBooking where month(checkInDate)='12' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}'`;


      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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


router.post('/retrieveFlights', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     
      var query=`select count(*) as count  from flightbooking where month(departureDate)='1' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from flightbooking where month(departureDate)='2' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from flightbooking where month(departureDate)='3' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from flightbooking where month(departureDate)='4' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from flightbooking where month(departureDate)='5' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from flightbooking where month(departureDate)='6' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from flightbooking where month(departureDate)='7' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from flightbooking where month(departureDate)='8' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from flightbooking where month(departureDate)='9' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from flightbooking where month(departureDate)='10' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from flightbooking where month(departureDate)='11' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}';`;
      query=query+`select count(*) as count from flightbooking where month(departureDate)='12' and ownerId='${req.body.ownerId}' and customerId LIKE '${req.body.customerId}'`;


      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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


router.post('/retrieveBookingsByCustomer', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
  connection.query(`select * from bookings where id LIKE '${req.body.bookingId}'`,function (err, result) {
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

router.post('/retrieveMonthlyDuties', (req, res) => {
  var token=req.headers['authorization'];
console.log("Chal")
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    var query=`select count(*) as count, status from duties where MONTH(startDate)='${req.body.month}' and customerId like '${req.body.customerId}' and ownerId="${req.body.ownerId}" group by status`;
  connection((err,connection)=>{
  connection.query(query,function (err, result) {
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/retrievePriceFromDuties', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     //console.log(req.body.ownerId)
      var query=`select sum(price) as price  from duties where month(startDate)='1' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(price) as price from duties where month(startDate)='2' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(price) as price from duties where month(startDate)='3' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(price) as price from duties where month(startDate)='4' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(price) as price from duties where month(startDate)='5' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(price) as price from duties where month(startDate)='6' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(price) as price from duties where month(startDate)='7' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(price) as price from duties where month(startDate)='8' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(price) as price from duties where month(startDate)='9' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(price) as price from duties where month(startDate)='10' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(price) as price from duties where month(startDate)='11' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(price) as price from duties where month(startDate)='12' and ownerId='${req.body.ownerId}'`;


      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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

router.post('/retrieveQuarterlyPriceFromDuties', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     //console.log(req.body.ownerId)
      var query=`select sum(price) as price  from duties where month(startDate) between '1' and '3' and ownerId='${req.body.ownerId}';`;
      
      query=query+`select sum(price) as price from duties where month(startDate) between '4' and '6' and ownerId='${req.body.ownerId}';`;
      
      query=query+`select sum(price) as price from duties where month(startDate) between '7' and '9' and ownerId='${req.body.ownerId}';`;
      
      query=query+`select sum(price) as price from duties where month(startDate) between '10' and '12' and ownerId='${req.body.ownerId}';`;
      
      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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

router.post('/retrieveYearlyPriceFromDuties', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     //console.log(req.body.ownerId)
      var query=`select sum(price) as price, year(startDate) as year from duties where ownerId='${req.body.ownerId}' group by year(startDate)`;
            
      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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

router.post('/retrieveFuelCostFromVehicle', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     //console.log(req.body.ownerId)
      var query=`select sum(f.fuelCost) as price, v.modelName from fuelExpenses f, vehicles v where f.ownerId='${req.body.ownerId}' and f.vehicleId = v.id group by f.vehicleId`;


      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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

router.post('/retrieveVehicleBreakdownCostFromVehicle', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     //console.log(req.body.ownerId)
      var query=`select sum(d.amount) as price, v.modelName from vehicleBreakdownExpenses b left join vehicleBreakdownExpensesData d on b.id = d.vehicleBreakdownExpensesId, vehicles v where b.ownerId='${req.body.ownerId}' and b.vehicleId = v.id group by b.vehicleId`;


      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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

router.post('/retrieveVehicleMaintenanceCostFromVehicle', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     //console.log(req.body.ownerId)
      var query=`select sum(d.amount) as price, v.modelName from vehicleMaintenanceExpenses m left join vehicleMaintenanceExpensesData d on m.id = d.vehicleMaintenanceExpensesId, vehicles v where m.ownerId='${req.body.ownerId}' and m.vehicleId = v.id group by m.vehicleId`;


      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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

router.post('/retrieveOfficeExpensesCost', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     //console.log(req.body.ownerId)
      var query=`select sum(d.amount) as price, d.particulars from officeExpenses o left join officeExpensesData d on o.id = d.officeExpensesId where ownerId='${req.body.ownerId}' group by particulars`;


      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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

router.post('/retrievePriceFromInvoiceInHotels', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     //console.log(req.body.ownerId)
      var query=`select sum(totalAmount) as price  from invoiceInHotels where month(invoiceDate)='1' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInHotels where month(invoiceDate)='2' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInHotels where month(invoiceDate)='3' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInHotels where month(invoiceDate)='4' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInHotels where month(invoiceDate)='5' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInHotels where month(invoiceDate)='6' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInHotels where month(invoiceDate)='7' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInHotels where month(invoiceDate)='8' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInHotels where month(invoiceDate)='9' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInHotels where month(invoiceDate)='10' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInHotels where month(invoiceDate)='11' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInHotels where month(invoiceDate)='12' and ownerId='${req.body.ownerId}'`;


      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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

router.post('/retrieveQuarterlyPriceFromInvoiceInHotels', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     //console.log(req.body.ownerId)
      var query=`select sum(totalAmount) as price  from invoiceInHotels where month(invoiceDate) between '1' and '3' and ownerId='${req.body.ownerId}';`;
      
      query=query+`select sum(totalAmount) as price from invoiceInHotels where month(invoiceDate) between '4' and '6' and ownerId='${req.body.ownerId}';`;
      
      query=query+`select sum(totalAmount) as price from invoiceInHotels where month(invoiceDate) between '7' and '9' and ownerId='${req.body.ownerId}';`;
      
      query=query+`select sum(totalAmount) as price from invoiceInHotels where month(invoiceDate) between '10' and '12' and ownerId='${req.body.ownerId}';`;      

      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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

router.post('/retrieveYearlyPriceFromInvoiceInHotels', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     //console.log(req.body.ownerId)
      var query=`select sum(totalAmount) as price, year(invoiceDate) as year from invoiceInHotels where ownerId='${req.body.ownerId}' group by year(invoiceDate)`;            

      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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

router.post('/retrievePriceFromInvoiceInFlights', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     //console.log(req.body.ownerId)
      var query=`select sum(totalAmount) as price  from invoiceInFlights where month(invoiceDate)='1' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInFlights where month(invoiceDate)='2' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInFlights where month(invoiceDate)='3' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInFlights where month(invoiceDate)='4' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInFlights where month(invoiceDate)='5' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInFlights where month(invoiceDate)='6' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInFlights where month(invoiceDate)='7' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInFlights where month(invoiceDate)='8' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInFlights where month(invoiceDate)='9' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInFlights where month(invoiceDate)='10' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInFlights where month(invoiceDate)='11' and ownerId='${req.body.ownerId}';`;
      query=query+`select sum(totalAmount) as price from invoiceInFlights where month(invoiceDate)='12' and ownerId='${req.body.ownerId}'`;


      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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

router.post('/retrieveQuarterlyPriceFromInvoiceInFlights', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     //console.log(req.body.ownerId)
      var query=`select sum(totalAmount) as price  from invoiceInFlights where month(invoiceDate) between '1' and '3' and ownerId='${req.body.ownerId}';`;
      
      query=query+`select sum(totalAmount) as price from invoiceInFlights where month(invoiceDate) between '4' and '6' and ownerId='${req.body.ownerId}';`;
      
      query=query+`select sum(totalAmount) as price from invoiceInFlights where month(invoiceDate) between '7' and '9' and ownerId='${req.body.ownerId}';`;
      
      query=query+`select sum(totalAmount) as price from invoiceInFlights where month(invoiceDate) between '10' and '12' and ownerId='${req.body.ownerId}';`;      

      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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

router.post('/retrieveYearlyPriceFromInvoiceInFlights', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
     //console.log(req.body.ownerId)
      var query=`select sum(totalAmount) as price, year(invoiceDate) as year from invoiceInFlights where ownerId='${req.body.ownerId}' group by year(invoiceDate)`;

      connection((err,connection)=>{
      connection.query(query,function (err, result, fields) {
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

router.post('/retrievePurchaseDuties', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
     //console.log(req.body.ownerId)
      var query=`select count(status) as name from duties where (supplierDId is not null or ownerDId is not null) and ownerId='${req.body.ownerId}' and status='Booked' group by status;`;

      query=query+`select count(status) as name from duties where (supplierDId is not null or ownerDId is not null) and ownerId='${req.body.ownerId}' and status='Allotted' group by status;`;

      query=query+`select count(status) as name from duties where (supplierDId is not null or ownerDId is not null) and ownerId='${req.body.ownerId}' and status='Pending' group by status;`;

      query=query+`select count(status) as name from duties where (supplierDId is not null or ownerDId is not null) and ownerId='${req.body.ownerId}' and status='Upcoming' group by status;`;

      query=query+`select count(status) as name from duties where (supplierDId is not null or ownerDId is not null) and ownerId='${req.body.ownerId}' and status='Cancelled' group by status;`;

      query=query+`select count(status) as name from duties where (supplierDId is not null or ownerDId is not null) and ownerId='${req.body.ownerId}' and status='Completed' group by status;`;

      query=query+`select sum(totalAmount) as cnt from invoiceInPurchase i, customer c where i.ownerId='${req.body.ownerId}' and i.customerId = c.id;`;

      query=query+`select sum(totalAmount) as cnt from (select p.*, invoiceId from purchasePayments p LEFT JOIN invoiceInPurchasePayments ip on p.id = ip.receiptId) a left join invoiceInPurchase b on a.invoiceId=b.id  where a.ownerId LIKE '${req.body.ownerId}'`

      connection((err,connection)=>{
        connection.query(query,function (err, result, fields) {
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