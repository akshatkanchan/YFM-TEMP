const express = require('express');
const router = express.Router();
const fs=require('fs');
const config = require('../config/config');
var mysql = require('mysql');
const jwt = require('jsonwebtoken');

const options = {
  user: config.get('MYSQL_USER'),
  password: config.get('MYSQL_PASSWORD'),
  database: 'yourfspl_fleetfinal',
  host:'103.50.162.146',
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

router.post('/retrieve', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from hotel where ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrieveHotelCity', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`select * from hotel where city='${req.body.city}'and ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrieveHotelBookings', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
    
      connection((err,connection)=>{
        connection.query(`select * from hotelBooking where ownerId='${req.body.ownerId}' and status like '${req.body.status}'`,function (err, result) {
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

router.post('/retrieveHotelBookingsForCustomer', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      
      connection((err,connection)=>{
        connection.query(`select * from hotelBooking where id='${req.body.id}'`,function (err, result) {
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

router.post('/retrieveForMail', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      
      connection((err,connection)=>{
        connection.query(`select hb.*, h.hotelName as hotelName, h.address as address from hotelBooking hb left join hotel h on h.id=hb.hotelId where hb.id=${req.body.id}`,function (err, result) {
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

router.post('/retrieveHotelBookingAdditionalCharges', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`select * from hotelBookingAdditionalCharges where hotelBookingId='${req.body.id}'`,function (err, result) {
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

router.post('/retrieveHotelTermsAndConditions', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {

      connection((err,connection)=>{
        connection.query(`select termsAndConditions from hotel where id='${req.body.hotelId}'`,function (err, result) {
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

router.post('/add', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into hotel set ?",req.body,function (err, result) {
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

router.post('/addBooking', (req, res) => {
  
  var token=req.headers['authorization'];
  
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query("insert into hotelBooking set ?",req.body,function (err, result) {
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

router.post('/addBookingAdditionalCharges', (req, res) => {
  console.log("add1");

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query("insert into hotelBookingAdditionalCharges set ?",req.body,function (err, result) {
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

  router.post('/getBooking', (req, res) => {
    
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
    connection((err,connection)=>{
        connection.query(`select hb.*, a.amount as advance from hotelBooking hb left join AdvancePaymentInHotelBookings a on hb.id=a.hotelBookingId where hb.customerId='${req.body.customerId}' and status='Completed'`,function (err, result) {
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

router.post('/update', (req, res) => {
  console.log("update");
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  console.log(req.body);
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`update hotel set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updateHotelBooking', (req, res) => {
  console.log("update1");
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
    
      connection((err,connection)=>{
        connection.query(`update hotelBooking set ? where id=${req.body.id}`,req.body,function (err, result) {
          if (err) {
            console.log(err);
            res.json(err)
          }
           res.json(result)
        });  
        connection.release();
      });
    }
  });
});

router.post('/updatehotelBookingAdditionalCharges', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
    
      connection((err,connection)=>{  
        connection.query(`update hotelBookingAdditionalCharges set ? where hoteBookinglId=${req.body.id}`,req.body,function (err, result) {
          if (err) {
            console.log(err);
            res.json(err)
          }
          res.json(result)
        });

        connection.release();
      });
    }
  });
});

router.post('/updateRooms', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
  connection.query(`update hotelPriceDetails set ? where hotelId=${req.body.id}`,req.body,function (err, result) {
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

router.post('/delete', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    
  connection((err,connection)=>{
  connection.query(`delete from hotel where id=${req.body.id}`,req.body,function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    }
  //  res.json(result)
  });
  connection.query(`delete from hotelPriceDetails where hotelId=${req.body.id}`,req.body,function (err, result) {
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

router.post('/deleteHotelPriceDetails', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    
  connection((err,connection)=>{      
  connection.query(`delete from hotelPriceDetails where hotelId=${req.body.id}`,req.body,function (err, result) {
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

router.post('/deleteHotelBooking', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
    
      connection((err,connection)=>{
        connection.query(`delete from hotelBookingAdditionalCharges where hotelBookingId=${req.body.id}`,req.body,function (err, result) {
          if (err) {
            console.log(err);
            res.json(err)
          }
          //  res.json(result)
        });
        connection.query(`delete from hotelBooking where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/deleteHotelBookingAdditionalCharges', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
    
      connection((err,connection)=>{
        connection.query(`delete from hotelBookingAdditionalCharges where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/addRooms', (req, res) => {
  console.log("called")
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
  
    connection((err,connection)=>{
    connection.query("insert into hotelPriceDetails set ?",req.body,function (err, result) {
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
  router.post('/getHotelBookingExportsProfiles', (req, res) => {
    console.log("called")
      var token=req.headers['authorization'];
    
      if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
      jwt.verify(token, "secret", function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      else{
    
      connection((err,connection)=>{
      connection.query(`SELECT * from exportHotelProfiles where ownerId='${req.body.ownerId}';`,function (err, result) {
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

  router.post('/getHotelBookingForExports', (req, res) => {
      var token=req.headers['authorization'];
    
      var columns = req.body.columns.join(",")
      if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
      jwt.verify(token, "secret", function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      else{
    
      connection((err,connection)=>{
      connection.query(`SELECT ${columns} from hotelBooking h left join 
        hotelsInInvoice hi on hi.hotelBookingId=h.id left join 
        invoice i on i.id=hi.id left join
        hotelLogs l on l.hotelBookingId=h.id
      WHERE checkInDate='${req.body.startDate}' and checkOutDate='${req.body.endDate}' and h.customerId=${req.body.customerId};`,function (err, result) {
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

    router.post('/addHotelBookingExportsProfiles', (req, res) => {
        var token=req.headers['authorization'];
      
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
        
        jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
      
        connection((err,connection)=>{
        connection.query(`insert into exportHotelProfiles set ?`,req.body,function (err, result) {
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

      router.post('/addHotelFiles', (req, res) => {
        var token=req.headers['authorization'];
      
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
        
        jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
      
        connection((err,connection)=>{
        connection.query("insert into hotelFiles set ?",req.body,function (err, result) {
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
      
      router.post('/getHotelFiles', (req, res) => {
        var token=req.headers['authorization'];
      
        if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
        
        jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
      
        connection((err,connection)=>{
        connection.query(`select * from hotelFiles where hoteltId=${req.body.id}`,function (err, result) {
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