const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var connection= require('./db.js');

router.post('/getBookingLogs', (req, res) => {

    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
  
        connection((err,connection)=>{
            connection.query(`select * from bookingLogs where bookingId=${req.body.id} order by id asc`,function (err, result) {
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
  
router.post('/addBookingLogs', (req, res) => {
    console.log(req.body);
    
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
    
        connection((err,connection)=>{
            connection.query("insert into bookingLogs set ?",req.body,function (err, result) {
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

////////////////////////////// Flights //////////////////////////////////////////

router.post('/getFlightLogs', (req, res) => {

    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
  
        connection((err,connection)=>{
            connection.query(`select * from flightLogs where flightBookingId=${req.body.id} order by id asc`,function (err, result) {
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
  
router.post('/addFlightLogs', (req, res) => {
    console.log("calledMOH",req.body);

    var token=req.headers['authorization'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
    
        connection((err,connection)=>{
            connection.query("insert into flightLogs set ?",req.body,function (err, result) {
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

///////////////////////////// Hotels //////////////////////////////////////////////

router.post('/getHotelLogs', (req, res) => {

    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
  
        connection((err,connection)=>{
            connection.query(`select * from hotelLogs where hotelBookingId=${req.body.id} order by id asc`,function (err, result) {
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
  
router.post('/addHotelLogs', (req, res) => {
    console.log(req.body);

    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
    
        connection((err,connection)=>{
            connection.query("insert into hotelLogs set ?",req.body,function (err, result) {
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

///////////////////////// Visa /////////////////////////////////

router.post('/getVisaLogs', (req, res) => {
    console.log(req.body);

    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
  
        connection((err,connection)=>{
            connection.query(`select * from visaLogs where visaId=${req.body.id} order by id asc`,function (err, result) {
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
  
router.post('/addVisaLogs', (req, res) => {
    console.log(req.body);
    
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
    
        connection((err,connection)=>{
            connection.query("insert into visaLogs set ?",req.body,function (err, result) {
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

///////////////////////// Customer /////////////////////////////////

router.post('/getCustomerLogs', (req, res) => {
    console.log(req.body);

    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
    
            connection((err,connection)=>{
                connection.query(`select * from customerLogs where customerId=${req.body.id} order by id asc`,function (err, result) {
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
  
router.post('/addCustomerLogs', (req, res) => {
    console.log(req.body);
    
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
        
            connection((err,connection)=>{
                connection.query("insert into customerLogs set ?",req.body,function (err, result) {
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

///////////////////////// Employee /////////////////////////////////

router.post('/getEmployeeLogs', (req, res) => {
    console.log(req.body);

    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
  
            connection((err,connection)=>{
                connection.query(`select * from employeeLogs where employeeId=${req.body.id} order by id asc`,function (err, result) {
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
  
router.post('/addEmployeeLogs', (req, res) => {
    console.log(req.body);
    
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
        
            connection((err,connection)=>{
                connection.query("insert into employeeLogs set ?",req.body,function (err, result) {
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

///////////////////////// Driver /////////////////////////////////

router.post('/getDriverLogs', (req, res) => {
    console.log(req.body);

    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
    
            connection((err,connection)=>{
                connection.query(`select * from driverLogs where driverId=${req.body.id} order by id asc`,function (err, result) {
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
  
router.post('/addDriverLogs', (req, res) => {
    console.log(req.body);
    
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{

            connection((err,connection)=>{
                connection.query("insert into driverLogs set ?",req.body,function (err, result) {
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

///////////////////////// Supplier /////////////////////////////////

router.post('/getSupplierLogs', (req, res) => {
    console.log(req.body);

    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
    
            connection((err,connection)=>{
                connection.query(`select * from supplierLogs where supplierId=${req.body.id} order by id asc`,function (err, result) {
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
  
router.post('/addSupplierLogs', (req, res) => {
    console.log(req.body);
    
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{

            connection((err,connection)=>{
                connection.query("insert into supplierLogs set ?",req.body,function (err, result) {
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

module.exports = router;