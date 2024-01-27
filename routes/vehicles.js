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
  connection.query(`select * from vehicles where ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrievePermits', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from permitsInVehicle where vehicleId='${req.body.id}'`,function (err, result) {
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

router.post('/retrieveFiles', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {

      connection((err,connection)=>{
        connection.query(`select * from filesInVehicle where vehicleId='${req.body.id}'`,function (err, result) {
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

router.post('/retrieveUnique', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select distinct modelname, id from vehicles where ownerId='${req.body.ownerId}'`,function (err, result) {
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
router.post('/retrieveNumber', (req, res) => {

  var token=req.headers['authorization'];
  
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from vehicles where ownerId='${req.body.ownerId}' and id=${req.body.id}`,function (err, result) {
    //console.log(req.body.modelname)
    if (err) {
      connection.release();
      console.log(err);
      return;
    }
   res.json(result)
   connection.release();
  });

  });
}
  })

});
router.post('/retrieveVehicleFromGroups', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from vehicles where ownerId='${req.body.ownerId}' and vehicleGroupId=${req.body.vehicleGroupId}`,function (err, result) {
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

router.post('/add', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into vehicles set ?",req.body,function (err, result) {
    if (err) {
       connection.release();
    }

    if(result.affectedRows == 1) {
      var add="+"
      updateVehicleGroupNumber(req,add)
    }
   res.json(result);
   connection.release(req);
  });

  });
}
  })
});
function updateVehicleGroupNumber(req,operator) {
  console.log("aksjdh")
  connection((err,connection)=>{
    connection.query(`update vehicleGroup set number=number${operator}1 where id=${req.body.vehicleGroupId}`,function (err, result) {
      if (err) {
         connection.release();
      }
    });
  
    });
}
router.post('/addPermits', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into permitsInVehicle set ?",req.body,function (err, result) {
    if (err) {
      console.log(err);
      
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  });
}
  })
});

router.post('/addFiles', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {

      connection((err,connection) => {
        connection.query("insert into filesInVehicle set ?",req.body,function (err, result) {
          if (err) {
            console.log(err);      
            connection.release();
          }
          res.json(result)
          connection.release();
        });
      });
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
  connection.query(`update vehicles set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updatePermits', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update permitsInVehicle set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updateFiles', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {

      connection((err,connection)=>{
        connection.query(`update filesInVehicle set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/delete', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`delete from vehicles where id=${req.body.id}`,function (err, result) {
    if (err) {
       connection.release();
    }
    if(result.affectedRows == 1) {
      var subtract="-"
      updateVehicleGroupNumber(req,subtract)
    }
   res.json(result)
   connection.release();
  });

  });
}
  })
});

router.post('/deletePermits', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`delete from permitsInVehicle where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/deleteFiles', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {

      connection((err,connection)=>{
        connection.query(`delete from FilesInVehicle where id=${req.body.id}`,req.body,function (err, result) {
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
  connection.query(`update vehicles set active = ${activeStatus} where id=${req.body.id}`,req.body,function (err, result) {
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

module.exports = router;