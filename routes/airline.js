const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var connection= require('./db.js');

router.post('/retrieve', (req, res) => {
  //console.log("retrieve")
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  
      connection((err,connection)=>{
        if (err) throw err;
        connection.query(`select * from flightbooking where ownerId='${req.body.ownerId}' and status like '${req.body.status}'`,function (err, result) {
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

router.post('/add', (req, res) => {
console.log("called")
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query("insert into flightbooking set ?",req.body,function (err, result) {
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

router.post('/retrieveForInvoice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  
    connection((err,connection)=>{
      connection.query(`select fb.*, a.amount as advance from flightbooking fb left join AdvancePaymentInFlightBookings a on fb.id=a.flightBookingId where fb.customerId=${req.body.customerId} and status='Completed'`,function (err, result) {
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

router.post('/retrieveForCreateInvoice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
    connection.query(`select * from flightbooking where id=${req.body.customerId.id}`,function (err, result) {
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

  console.log(req.body)
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      
      connection((err,connection)=>{
      connection.query(`update flightbooking set ? where id=${req.body.id}`,req.body,function (err, result) {
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
    connection.query(`delete from flightbooking where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/getFlightBookingForExports', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    
 var columns = req.body.columns.join(",")
  connection((err,connection)=>{
    connection.query(`select ${columns} from flightbooking fb left join
                    flightsInInvoice i on i.flightBookingId=fb.id LEFT JOIN 
                    invoice iv on iv.id=fb.id  LEFT JOIN 
                    invoiceFlightExtras ie on ie.invoiceId=iv.id
                    where fb.departureDate='2019-03-28' GROUP BY fb.id;`,function (err, result) {
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

router.post('/addFlightBookingExportsProfiles', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    
  connection((err,connection)=>{
    connection.query(`insert into exportFlightProfiles set ?`,req.body,function (err, result) {
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
router.post('/getFlightBookingExportsProfiles', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    
  connection((err,connection)=>{
    connection.query(`select * from exportFlightProfiles where ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/addAirlineFiles', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into airlineFiles set ?",req.body,function (err, result) {
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

router.post('/getAirlineFiles', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from airlineFiles where flightId=${req.body.id}`,function (err, result) {
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