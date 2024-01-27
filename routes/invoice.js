const express = require('express');
const router = express.Router();
const fs=require('fs');
const config = require('../config/config');
var mysql = require('mysql');
const jwt = require('jsonwebtoken');
var admin = require('./firebase-admin');

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
  connection.query(`select * from invoice where ownerId='${req.body.ownerId}' ORDER BY id DESC`,function (err, result) {
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

router.post('/retrieveHotelInvoices', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from invoiceInHotels where ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrieveInvoiceInHotels', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from invoiceInHotels where id='${req.body.id}'`,function (err, result) {
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

router.post('/retrieveHotelsInInvoices', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from hotelsInInvoice i left join hotelBooking b on i.hotelBookingId=b.id where i.invoiceId='${req.body.id}'`,function (err, result) {
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

router.post('/retrieveInvoiceInFlights', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from invoiceInFlights where id='${req.body.id}'`,function (err, result) {
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


router.post('/retrieveFlightsInInvoice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  
  connection.query(`select * from flightsInInvoice i left join flightbooking b on i.flightBookingId = b.id  where i.invoiceId='${req.body.id}'`,function (err, result) {
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

router.post('/retrieveVisaInInvoice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {
      connection((err,connection)=>{
  
      connection.query(`select * from visaInInvoice i left join visa b on i.visaId = b.id  where i.invoiceId='${req.body.id}'`,function (err, result) {
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

router.post('/retrieveAllInvoiceInFlights', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from invoiceInFlights where ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrieveAllInvoiceInVisa', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
      connection.query(`select * from invoiceInVisa where ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrievePurchaseInvoice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select i.*, c.name as cname from invoiceInPurchase i, customer c where i.ownerId='${req.body.ownerId}' and i.customerId = c.id`,function (err, result) {
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

router.post('/retrievebookingsInInvoice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  // console.log(req.body.id)
  connection.query(`select * from bookingsInInvoice i left join bookings b on i.bookingId=b.id where i.invoiceId='${req.body.id}'`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  //  console.log(result)
  });
  })
}
})
});

router.post('/retrievepurchaseInInvoice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from purchaseInInvoice i left join duties d on i.dutyId=d.id where i.invoiceId='${req.body.id}'`,function (err, result) {
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

router.post('/retrievepurchaseInInvoiceByBooking', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from purchaseInInvoice i left join bookings d on i.bookingId=d.id where i.invoiceId='${req.body.id}'`,function (err, result) {
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


router.post('/retrieveInvoiceExtra', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from invoiceExtras where invoiceId='${req.body.id}'`,function (err, result) {
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

router.post('/retrieveInvoicePurchaseExtra', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from invoicePurchaseExtras where invoiceId='${req.body.id}'`,function (err, result) {
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

router.post('/retrieveCloseExtras', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  // console.log("extra")
  connection.query(`select * from extraChargesDuties where dutyId in (select id from duties where bid = ${req.body.id})`,function (err, result) {
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

router.post('/find', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from invoice where name like '%${req.body.fil}%' or dType like '%${req.body.fil}%' order by ${req.body.sortC} ${req.body.sort}  limit ${req.body.pNo},${req.body.pSize}`,function (err, result) {
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

router.post('/findDutySummary', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  // console.log(req.body)
  connection((err,connection)=>{
  connection.query(`select d.*,c.*,v.number,dy.maxDays,dy.maxHrs,dy.maxKms,p.extraKm, p.extraHrs from vehicles v,dutyType dy, prices p,duties d left join closedDutyDetails c on d.id=c.dutyId where v.id=d.vehicleId and  dy.id=d.dutyTypeId and dy.id=p.dutyTypeId and p.vehicleGroupId = d.vehicleGroupId and p.customerId = d.customerId and bid in (select bookingId from bookingsInInvoice where invoiceId=${req.body.id}) and d.ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/findDutySummaryForPurchase', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      // console.log(req.body)
      connection((err,connection)=>{
        connection.query(`select d.*,c.*,v.number,dy.maxDays,dy.maxHrs,dy.maxKms,p.extraKm, p.extraHrs from vehicles v,dutyType dy, prices p,duties d left join closedDutyDetails c on d.id=c.dutyId where v.id=d.vehicleId and  dy.id=d.dutyTypeId and dy.id=p.dutyTypeId and p.vehicleGroupId = d.vehicleGroupId and ( bid in (select bookingId from purchaseInInvoice where invoiceId=${req.body.id}) or d.id in (SELECT dutyId from purchaseInInvoice where invoiceId=${req.body.id}))`,function (err, result) {
          if (err) {
            connection.release();
            console.log(err);
            
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
  connection.query("insert into invoice set ?",req.body,function (err) {
    if (err) {
      console.log(err);
      
       connection.release();
    }
  // res.json(result)
  });
  connection.query("select LAST_INSERT_ID() as ID",req.body,function (err, result) {
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

router.post('/addHotelInvoice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into invoiceInHotels set ?",req.body,function (err) {
    if (err) {
       connection.release();
    }
  // res.json(result)
  });
  connection.query("select LAST_INSERT_ID() as ID",req.body,function (err, result) {
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

router.post('/addFlightInvoice', (req, res) => {
  // console.log("called")
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into invoiceInFlights set ?",req.body,function (err) {
    if (err) {
       connection.release();
    }
  // res.json(result)
  });
  connection.query("select LAST_INSERT_ID() as ID",req.body,function (err, result) {
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

router.post('/addVisaInvoice', (req, res) => {
  // console.log("called")
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {
      connection((err,connection)=>{
      connection.query("insert into invoiceInVisa set ?",req.body,function (err) {
        if (err) {
          console.log(err);
          return;
        }
        // res.json(result)
      });
      connection.query("select LAST_INSERT_ID() as ID",req.body,function (err, result) {
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

router.post('/addPurchaseInvoice', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
    console.log(req.body)
  connection.query("insert into invoiceInPurchase set ?",req.body,function (err) {
    if (err) {
       connection.release();
    }
    insertNotification("An invoice has been raised for your duty from"+req.body.name,"/pages/masters/purchase-invoice","Completed Duty",req.body.ownerId)
  // res.json(result)
  });
  connection.query("select LAST_INSERT_ID() as ID",req.body,function (err, result) {
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

router.post('/addBooking', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{    
  
      connection((err,connection)=>{
        connection.query("insert into bookingsInInvoice set ?",req.body,function (err, result) {
          if (err) {
            connection.release();
          }
          // res.json(result)
          // connection.release();
        });
        // connection.query(`update duties set status='Invoiced' where bid=${req.body.bookingId}`,function (err, result) {
        //   if (err) {
        //     connection.release();
        //   }  
        // });
        connection.query(`update bookings set status='Billed' where id=${req.body.bookingId}`,function (err, result) {
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
router.post('/addHotelBooking', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query("insert into hotelsInInvoice set ?",req.body,function (err, result) {
          if (err) {
            connection.release();
          }
          // res.json(result)
          // connection.release();
        });
        connection.query(`update hotelBookings set status='Invoiced' where id=${req.body.hotelBookingId}`,function (err, result) {
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

router.post('/addFlightBooking', (req, res) => {
  // console.log("called")
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query("insert into flightsInInvoice set ?",req.body,function (err, result) {
          if (err) {
            connection.release();
          }
          // res.json(result)
          // connection.release();
        });
        connection.query(`update flightBooking set status='Invoiced' where id=${req.body.flightBookingId}`,function (err, result) {
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

router.post('/addVisaBooking', (req, res) => {
  // console.log("called")
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {
      connection((err,connection)=>{
        connection.query("insert into visaInInvoice set ?",req.body,function (err, result) {
          if (err) {
            console.log(err);
            return;
          }
          // res.json(result)
          // connection.release();
        });
        connection.query(`update visa set status='Invoiced' where id=${req.body.visaId}`,function (err, result) {
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

router.post('/addPurchaseBooking', (req, res) => {
  // console.log("called")
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into purchaseInInvoice set ?",req.body,function (err, result) {
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


router.post('/addExtras', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into invoiceExtras set ?",req.body,function (err, result) {
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
router.post('/addHotelExtras', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into invoiceHotelExtras set ?",req.body,function (err, result) {
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
router.post('/addFlightExtras', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into invoiceFlightExtras set ?",req.body,function (err, result) {
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

router.post('/addVisaExtras', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {
      connection((err,connection)=>{
      connection.query("insert into invoiceVisaExtras set ?",req.body,function (err, result) {
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

router.post('/addPurchaseExtras', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into invoicePurchaseExtras set ?",req.body,function (err, result) {
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

router.post('/retrieveCompletedBookings', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  //select d.bid,b.*,sum(d.price) from bookings b,duties d where b.id=d.bid and b.status='Completed' and b.customerId=${req.body.id} and d.status="Completed" GROUP by d.bid
  // select * from bookings where status='Completed' and customerId=${req.body.id}
  //  select b.*,sum(d.finalPrice) as totsPrice,sum(e.charges) as extraChargesTotal from bookings b,closedDutyDetails d,extraChargesDuties e where b.id=d.bookyId and d.dutyId=e.dutyId and b.status='Completed' and b.customerId=${req.body.id}  GROUP by b.id
  connection.query(`select b.*,sum(bb.finalPrice) as totsPrice,sum(bb.charges) as extraChargesTotal, sum(a.amount) as advance from bookings b left join AdvancePaymentInBookings a on b.id=a.bid left join (select d.id, d.finalPrice, d.dutyId, d.bookyId, sum(e.charges) as charges from closedDutyDetails d left join extraChargesDuties e on d.dutyId=e.dutyId group by d.id) bb on b.id=bb.bookyId where b.id=bb.bookyId and b.status='Completed' and b.customerId=${req.body.id} group by b.id`,function (err, result) {
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

router.post('/retrieveExtraCharges', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        var arr = req.body.idArray.join(",");
        connection.query(`SELECT e.name, e.charges, e.fileName, c.bookyId from extraChargesDuties e left join closedDutyDetails c on e.dutyId=c.dutyId where e.dutyId in (select dutyId from closedDutyDetails where bookyId in (${arr}))`,function (err, result) {
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

router.post('/retrieveExtraChargesForDuties', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        var arr = req.body.idArray.join(",");
        connection.query(`SELECT name, charges, dutyId from extraChargesDuties where dutyId in (${arr})`,function (err, result) {
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

router.post('/update', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update dutyType set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updateInvoice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`update invoice set ? where id=${req.body.id}`,req.body,function (err, result) {
          if (err) {
            connection.release();
            console.log(err);
            
          }
          res.json(result)
          connection.release();
        });
      })
    }
  })
});

router.post('/updateFlightInvoice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`update invoiceInFlights set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updateHotelInvoice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`update invoiceInHotels set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updatePurchaseInvoice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`update invoiceInPurchase set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updateVisaInvoice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`update invoiceInVisa set ? where id=${req.body.id}`,req.body,function (err, result) {
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

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`delete from invoice where id=${req.body.id}`,req.body,function (err, result) {
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

function insertNotification(content,route,value,ownerId)
{
  var obj={
    Content:content,
    route:route,
    value:value,
    //dateTime:moment().get
    ownerId:ownerId
  }
  connection((err,connection)=>{
  connection.query("insert into Notification set ?",obj,function (err, result) {
    if (err) {
       connection.release();
    }
    connection.release();
  });
  })
  var payload = {
    notification: {
      title: "YourFleetMan",
      body: content
    }
  };
  
  var topic = ''+ownerId;
  
  admin.messaging().sendToTopic(topic, payload)
    .then(function(response) {
      console.log("Successfully sent message:", response);
    })
    .catch(function(error) {
      console.log("Error sending message:", error);
    });
}

module.exports = router;