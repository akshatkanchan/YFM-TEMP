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
            connection.query(`select * from AdvancePaymentInBookings where bid='${req.body.bid}'`,function (err, result) {
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
    console.log("addAPIB")
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
            connection((err,connection)=>{
            connection.query("insert into AdvancePaymentInBookings set ?",req.body,function (err, result) {
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

router.post('/retrieveFlight', (req, res) => {
    console.log("retrieveAPIFB")
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
            connection((err,connection)=>{
            connection.query(`select * from AdvancePaymentInFlightBookings where bid='${req.body.bid}'`,function (err, result) {
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

router.post('/addFlight', (req, res) => {
    console.log("addAPIFB")
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
            connection((err,connection)=>{
            connection.query("insert into AdvancePaymentInFlightBookings set ?",req.body,function (err, result) {
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

  router.post('/retrieveVisa', (req, res) => {
    console.log("retrieveAPIVB")
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
            connection((err,connection)=>{
            connection.query(`select * from AdvancePaymentInVisaBookings where bid='${req.body.bid}'`,function (err, result) {
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

router.post('/addVisa', (req, res) => {
    console.log("addAPIVB")
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
            connection((err,connection)=>{
            connection.query("insert into AdvancePaymentInVisaBookings set ?",req.body,function (err, result) {
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

  router.post('/retrieveHotel', (req, res) => {
    console.log("retrieveAPIHB")
    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
            connection((err,connection)=>{
            connection.query(`select * from AdvancePaymentInHotelBookings where bid='${req.body.bid}'`,function (err, result) {
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

router.post('/addHotel', (req, res) => {
    console.log("addAPIHB")
    var token=req.headers['authorization'];
  
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, "secret", function(err, decoded) {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        else{
            connection((err,connection)=>{
            connection.query("insert into AdvancePaymentInHotelBookings set ?",req.body,function (err, result) {
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
module.exports = router;