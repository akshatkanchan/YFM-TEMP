const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

var connection= require('./db.js');

router.post('/retrieve', (req, res) => {
    // console.log("retrieve")
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
               connection((err,connection)=>{
               connection.query(`select * from businessSettings where ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrieveDriverAllowance', (req, res) => {
    // console.log("retrieve")
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`select * from DriverAllowancesInBusinessSettings where ownerId='${req.body.ownerId}' and businessSettingsId='${req.body.businessSettingsId}'`,function (err, result) {
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

router.post('/retrieveChargedDriverAllowance', (req, res) => {
    // console.log("retrieve")
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`select * from DriverAllowancesInBusinessSettings where ownerId='${req.body.ownerId}' and businessSettingsId='${req.body.businessSettingsId}' and chargedToCustomer=1`,function (err, result) {
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

router.post('/retrieveSMSPhoneNumbers', (req, res) => {
    // console.log("retrieve")
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`select * from SMSPhoneNumbers where ownerId='${req.body.ownerId}' and businessSettingsId='${req.body.businessSettingsId}'`,function (err, result) {
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

router.post('/retrieveEmailAddresses', (req, res) => {
    // console.log("retrieve")
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`select * from EmailAddresses where ownerId='${req.body.ownerId}' and businessSettingsId='${req.body.businessSettingsId}'`,function (err, result) {
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

router.post('/add', (req, res) => {
    // console.log("add")
    // var token=req.headers['authorization'];
    
    // if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
    // jwt.verify(token, "secret", function(err, decoded) {
    //     if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    //     else {
    
            connection((err,connection)=>{
            connection.query("insert into businessSettings set ?",req.body,function (err, result) {
                if (err) {
                    connection.release();
                }
                res.json(result)
                connection.release();
            });
            })
    //     }
    // });
    
});

router.post('/addDriverAllowance', (req, res) => {
    // console.log("add")
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
    
            connection((err,connection)=>{
            connection.query("insert into DriverAllowancesInBusinessSettings set ?",req.body,function (err, result) {
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

router.post('/addSMSPhoneNumbers', (req, res) => {
    // console.log("add")
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
    
            connection((err,connection)=>{
            connection.query("insert into SMSPhoneNumbers set ?",req.body,function (err, result) {
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

router.post('/addEmailAddresses', (req, res) => {
    // console.log("add")
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
    
            connection((err,connection)=>{
            connection.query("insert into EmailAddresses set ?",req.body,function (err, result) {
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

router.post('/update', (req, res) => {
      
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`update businessSettings set ? where id='${req.body.id}'`,req.body,function (err, result) {
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

router.post('/updateDriverAllowance', (req, res) => {
      
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`update DriverAllowancesInBusinessSettings set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updateSMSPhoneNumbers', (req, res) => {
      
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`update SMSPhoneNumbers set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updateEmailAddresses', (req, res) => {
      
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
            connection((err,connection)=>{
            connection.query(`update EmailAddresses set ? where id=${req.body.id}`,req.body,function (err, result) {
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
    
router.post('/delete', (req, res) => {
      
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
        
            connection((err,connection)=>{
            connection.query(`delete from businessSettings where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/deleteDriverAllowancesInBusinessSettings', (req, res) => {
      
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
        
            connection((err,connection)=>{
            connection.query(`delete from DriverAllowancesInBusinessSettings where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/deleteSMSPhoneNumbers', (req, res) => {
      
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
        
            connection((err,connection)=>{
            connection.query(`delete from SMSPhoneNumbers where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/deleteEmailAddresses', (req, res) => {
      
    var token=req.headers['authorization'];
    
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
      
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else {
        
            connection((err,connection)=>{
            connection.query(`delete from EmailAddresses where id=${req.body.id}`,req.body,function (err, result) {
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