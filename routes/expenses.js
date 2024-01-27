const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var connection= require('./db.js');

router.post('/retrieveOfficeExpenses', (req, res) => {
  console.log("retrieve")
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
      connection.query(`select * from officeExpenses where ownerId='${req.body.ownerId}'`,function (err, result) {
        if (err) {
          console.log(err);
          return;
        }
      res.json(result)
      connection.release();
      });
      })
    }
  });
});

router.post('/retrieveOfficeExpensesData', (req, res) => {
    console.log("retrieve")
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`select * from officeExpensesData where officeExpensesId='${req.body.id}'`,function (err, result) {
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

router.post('/retrieveVehicleBreakdownExpenses', (req, res) => {
    console.log("retrieve")
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
        connection((err,connection)=>{
        connection.query(`select * from vehicleBreakdownExpenses where ownerId='${req.body.ownerId}'`,function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            res.json(result)
            connection.release();
        });
        })
        }
    });
});

router.post('/retrieveVehicleBreakdownExpensesData', (req, res) => {
    console.log("retrieve")
    var token=req.headers['authorization'];
    console.log("ret2");
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            console.log(req.body);
            
            connection((err,connection)=>{
            connection.query(`select * from vehicleBreakdownExpensesData where vehicleBreakdownExpensesId=${req.body.id}`,function (err, result) {
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

router.post('/retrieveVehicleMaintenanceExpenses', (req, res) => {
    console.log("retrieve")
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
    connection((err,connection)=>{
        connection.query(`select * from vehicleMaintenanceExpenses where ownerId='${req.body.ownerId}'`,function (err, result) {
            if (err) {
                console.log(err);
                return;
            }
            res.json(result)
            connection.release();
        });
        })
      }
    });
});

router.post('/retrieveVehicleMaintenanceExpensesData', (req, res) => {
    console.log("retrieve")
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`select * from vehicleMaintenanceExpensesData where vehicleMaintenanceExpensesId='${req.body.id}'`,function (err, result) {
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

router.post('/addOfficeExpenses', (req, res) => {
    console.log("called")
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query("insert into officeExpenses set ?",req.body,function (err, result) {
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

router.post('/addOfficeExpensesData', (req, res) => {
    console.log("called")
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query("insert into officeExpensesData set ?",req.body,function (err, result) {
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

router.post('/addVehicleBreakdownExpenses', (req, res) => {
    console.log("called")
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
    
            connection((err,connection)=>{
            connection.query("insert into vehicleBreakdownExpenses set ?",req.body,function (err, result) {
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

router.post('/addVehicleBreakdownExpensesData', (req, res) => {
    console.log("called")
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
    
            connection((err,connection)=>{
            connection.query("insert into vehicleBreakdownExpensesData set ?",req.body,function (err, result) {
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

router.post('/addVehicleMaintenanceExpenses', (req, res) => {
    console.log("called")
    var token=req.headers['authorization'];
        
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
          
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
        
            connection((err,connection)=>{
            connection.query("insert into vehicleMaintenanceExpenses set ?",req.body,function (err, result) {
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

router.post('/addVehicleMaintenanceExpensesData', (req, res) => {
    console.log("called")
    var token=req.headers['authorization'];
        
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
          
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
        
            connection((err,connection)=>{
            connection.query("insert into vehicleMaintenanceExpensesData set ?",req.body,function (err, result) {
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

router.post('/updateofficeExpenses', (req, res) => {
  
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`update officeExpenses set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updateofficeExpensesData', (req, res) => {
  
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`update officeExpensesData set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updatevehicleBreakdownExpenses', (req, res) => {
  
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`update vehicleBreakdownExpenses set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updatevehicleBreakdownExpensesData', (req, res) => {
  
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`update vehicleBreakdownExpensesData set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updatevehicleMaintenanceExpenses', (req, res) => {
  
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`update vehicleMaintenanceExpenses set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updatevehicleMaintenanceExpensesData', (req, res) => {
  
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`update vehicleMaintenanceExpensesData set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/deleteofficeExpenses', (req, res) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    
  connection((err,connection)=>{
  connection.query(`delete from officeExpenses where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/deleteofficeExpensesData', (req, res) => {
  
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      
    connection((err,connection)=>{
    connection.query(`delete from officeExpensesData where id=${req.body.id}`,req.body,function (err, result) {
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

  router.post('/deletevehicleBreakdownExpenses', (req, res) => {
  
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      
    connection((err,connection)=>{
    connection.query(`delete from vehicleBreakdownExpenses where id=${req.body.id}`,req.body,function (err, result) {
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

  router.post('/deletevehicleBreakdownExpensesData', (req, res) => {
  
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      
    connection((err,connection)=>{
    connection.query(`delete from vehicleBreakdownExpensesData where vehicleBreakdownExpensesId=${req.body.id}`,req.body,function (err, result) {
      if (err) {
        console.log(err);
        res.json(err)
      }
     
    });
    connection.query(`delete from vehicleBreakdownExpenses where id=${req.body.id}`,req.body,function (err, result) {
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

  router.post('/deletevehicleMaintenanceExpenses', (req, res) => {
  
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      
    connection((err,connection)=>{
    connection.query(`delete from vehicleMaintenanceExpenses where id=${req.body.id}`,req.body,function (err, result) {
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

  router.post('/deletevehicleMaintenanceExpensesData', (req, res) => {
  
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      
    
    connection((err,connection)=>{
    connection.query(`delete from vehicleMaintenanceExpensesData where vehicleMaintenanceExpensesId=${req.body.id}`,req.body,function (err, result) {
      if (err) {
        console.log(err);
        res.json(err)
      }          
    });
    connection.query(`delete from vehicleMaintenanceExpenses where id=${req.body.id}`,req.body,function (err, result) {
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