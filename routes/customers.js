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
router.post('/retrieveB2BCustomers', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from customer where ownerId LIKE '${req.body.ownerId}' and customerOwnerId is not null`,function (err, result) {
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

router.post('/retrieveCustomerLimitCity', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      
  
      connection((err,connection)=>{
        connection.query(`select * from customerLimitCity where customerId=${req.body.id}`,function (err, result) {
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

router.post('/retrieveCustomerLimitVehicleGroup', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`select * from customerLimitVehicleGroup where customerId=${req.body.id}`,function (err, result) {
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

router.post('/retrieveCustomerLimitVehicleGroupForBookings', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`select v.* from customerLimitVehicleGroup cv left join vehicleGroup v on v.id=cv.vehicleGroupId where customerId=${req.body.id}`,function (err, result) {
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

router.post('/retrieveCustomerLimitDutyType', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`select * from customerLimitDutyType where customerId=${req.body.id}`,function (err, result) {
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

router.post('/retrieveCustomerLimitDutyTypeForBookings', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`select d.* from customerLimitDutyType cd left join dutyType d on d.id=cd.dutyTypeId where customerId=${req.body.id}`,function (err, result) {
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

router.post('/count', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    var query=`select count(*) as count from bookings where customerId LIKE '${req.body.customerId}' and ownerId='${req.body.ownerId}';`;
    query=query+`select count(*) as count from bookings where customerId LIKE '${req.body.customerId}' and status='Completed' and ownerId='${req.body.ownerId}';`;
    query=query+`select count(*) as count from bookings where customerId LIKE '${req.body.customerId}' and status='Allotted' and ownerId='${req.body.ownerId}';`;
    connection((err,connection)=>{
      connection.query(query,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });
    });
  }
  })

});
router.post('/retrieveOneCustomer', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{    
    
  connection((err,connection)=>{
  connection.query(`select * from customer where id LIKE '${req.body.customerId}'`,function (err, result) {
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

router.post('/retrieveCustomerId', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{


  connection((err,connection)=>{
  connection.query(`select id from customer where customerOwnerId = '${req.body.cownerId}' and ownerId = '${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrieveByGroupId', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from customer where ownerId LIKE '${req.body.user.ownerId}' and customerGroupId=${req.body.customerGroupId}`,function (err, result) {
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
  connection.query("insert into customer set ?",req.body,function (err, result) {
    if (err) {
      console.log(err)
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  })
}
  })

});

router.post('/addCustomerGroup', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into customerGroup set ?",req.body,function (err, result) {
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

router.post('/addCustomerLimitCity', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query("insert into customerLimitCity set ?",req.body,function (err, result) {
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

router.post('/addCustomerLimitVehicleGroup', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query("insert into customerLimitVehicleGroup set ?",req.body,function (err, result) {
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

router.post('/addCustomerLimitDutyType', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query("insert into customerLimitDutyType set ?",req.body,function (err, result) {
          if (err) {
            connection.release();
          }
          res.json(result)
          // connection.release();
        });

      })
    }
  })
});

router.post('/retrieveCustomerGroup', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from customerGroup where ownerId='${req.body.ownerId}'`,function (err, result) {
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
router.post('/updateCustomerGroup', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update customerGroup set ? where id=${req.body.id}`,req.body,function (err, result) {
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
router.post('/deleteCustomerGroup', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`delete from customerGroup where id=${req.body.id}`,req.body,function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
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
  connection.query(`update customer set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updateCustomerLimitCity', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`update customerLimitCity set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updateCustomerLimitVehicleGroup', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`update customerLimitVehicleGroup set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updateCustomerLimitDutyType', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`update customerLimitDutyType set ? where id=${req.body.id}`,req.body,function (err, result) {
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
  connection.query(`delete from customer where id=${req.body.id}`,req.body,function (err, result) {
    if (err) {
      console.log(err);
      res.json(err)
    }
   res.json(result)
   connection.release();
  });

  })
  }
  })
});

router.post('/deleteCustomerLimitCity', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`delete from customerLimitCity where id=${req.body.id}`,req.body,function (err, result) {
          if (err) {
            res.json(err);
          }
          res.json(result)
          connection.release();
        });
        
      })
    }
  })
});

router.post('/deleteCustomerLimitVehicleGroup', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`delete from customerLimitVehicleGroup where vehicleGroupId=${req.body.vehicleGroupId} and customerId=${req.body.customerId}`,req.body,function (err, result) {
          if (err) {
            res.json(err);
          }
          res.json(result)
          connection.release();
        });
  
      })
    }
  })
});

router.post('/deleteCustomerLimitDutyType', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`delete from customerLimitDutyType where dutyTypeId=${req.body.dutyTypeId} and customerId=${req.body.customerId}`,req.body,function (err, result) {
          if (err) {
            res.json(err);
          }
          res.json(result)
          connection.release();
        });
    
      })
    }
  })
});

router.post('/active', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  
  var activeStatus;
  if(req.body.active == 1) {
    activeStatus = 0
  }
  else {
    activeStatus = 1;
  }
  connection.query(`update customer set active = ${activeStatus} where id=${req.body.id}`,req.body,function (err, result) {
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