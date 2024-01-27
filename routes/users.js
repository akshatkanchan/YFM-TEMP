const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt=require('bcryptjs');

var admin = require('./firebase-admin')

var connection= require('./db.js');

router.post('/authenticate',(req, res) => {

    connection((err,connection)=>{
  
    connection.query(`SELECT u.*,c.name as companyName from users u,companyProfile c where u.ownerId=c.ownerId and u.id='${req.body.id}'`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
  
      var token = jwt.sign({ id: result[0].id }, "secret", {
        expiresIn: "7 days"
      });
  
      
     res.json({result:result,token:token})
     connection.release();
    });
  
    })
});

router.post('/authenticateDriver',(req, res) => {

  addInstanceId(req.body.uid,req.body.id)

    connection((err,connection)=>{
  
    connection.query(`SELECT u.*,c.name as companyName from users u,companyProfile c where u.ownerId=c.ownerId and u.id='${req.body.id}'`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
  
      var token = jwt.sign({ id: result[0].id }, "secret", {
        expiresIn: "7 days"
      });
  
      
     res.json({result:result,token:token})
     connection.release();
    });
  
    })
});

function addInstanceId(uid,id)
{
  connection((err,connection)=>{
  
    connection.query(`UPDATE users SET phoneId = "${uid}" WHERE id='${id}'`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
     connection.release();
    });
  
    })
}

router.post('/checkInstanceId',(req, res) => {

  connection((err,connection)=>{

  connection.query(`select phoneId from users where id='${req.body.id}'`,function (err, result) {
    if (err) {
      connection.release();
    }
   res.json(result)
   connection.release();
  });

  })
});

router.post('/driverLogin',(req, res) => {

  connection((err,connection)=>{

  connection.query(`select * from drivers where userId='${req.body.userId}'`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  })
});

router.post('/edit', (req) => {

  connection((err,connection)=>{

  connection.query(`update users set? where id='${req.body.register.id}'`,req.body.register,function(err){
  if(err){
    console.log(err);
  }
  connection.release();
  })
  })
});


router.post('/registerOwner', (req, res) => {
  
  connection((err,connection)=>{
  connection.query("insert into users set ?",req.body,function (err, result) {
    if (err) {
       console.log(err);
       
       connection.release();
    }
   res.json(result);
   connection.release();
  });

  })
});


router.post('/register', (req, res) => {

    connection((err,connection)=>{
  
    // var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
    // var hashedUserId = bcrypt.hashSync("secret",8);
  
    connection.query("insert into users set ?",req.body,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      if(result.affectedRows==1){
        res.json(result);
        connection.release();
      }
      else{
        res.json(result)
        connection.release();
      }
    });
  
    })
});



router.post('/validate', (req, res) => {
  
  var token = req.body.token;
  if (!token) {
    res.json({ auth: false, message: 'No token provided.' });
    return;
  }
  jwt.verify(token, "secret",function(err) {
    if (err) {
      res.json({ auth: false, message: 'Failed to authenticate token.' });
      return;
    }
    
    else{
        connection((err,connection)=>{
        connection.query(`SELECT u.*,c.name as companyName from users u,companyProfile c where u.ownerId=c.ownerId and u.id='${jwt.decode(token).id}'`,function (err, result) {
          if (err) {
       connection.release();
    }
         res.json({result:result,token:token,auth:true})
         connection.release();
        });
      })
  };
  })
});

router.post('/retrieve', (req, res) => {

  connection((err,connection)=>{
  
  connection.query(`select * from users where ownerId='${req.body.ownerId}' and id <> '${req.body.ownerId}'`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  })

});

router.post('/changeStatus', (req, res) => {

  connection((err,connection)=>{
  
  connection.query(`update users set status='${req.body.status}' where id='${req.body.id}'`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  });

});

router.post('/active', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  // console.log(req.body)
  var activeStatus;
  if(req.body.active == 1) {
    activeStatus = 0
  }
  else {
    activeStatus = 1;
  }
  connection.query(`update users set active = ${activeStatus} where id='${req.body.id}'`,req.body,function (err, result) {
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

router.post('/retrieveUserById', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        // console.log(req.body)
        connection.query(`select * from users where id='${req.body.id}'`,req.body,function (err, result) {
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

router.post('/myProfile', (req, res) => {

  connection((err,connection)=>{
  
  connection.query(`select u.*, e.mobilenumber, e.currentAddress, e.bloodGroup from users u,employee e where u.id = '${req.body.id}' and u.id=e.userId`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  });

});



router.post('/editMyProfile', (req, res) => {

  connection((err,connection)=>{
  
  connection.query(`update employee set mobilenumber='${req.body.mobilenumber}', currentAddress='${req.body.currentAddress}', bloodGroup='${req.body.bloodGroup}' where userId = '${req.body.userId}'`,function (err, result) {
    if (err) {
       connection.release();
    }
  });

  connection.query(`update users set fileName='${req.body.fileName}' where id = '${req.body.userId}'`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  });

});

router.post('/editMyProfileOwner', (req, res) => {

  console.log("asda",req.body);
  
  connection((err,connection)=>{

  connection.query(`update users set fileName='${req.body.fileName}',phone='${req.body.phone}' where id = '${req.body.userId}'`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  });

});

router.post('/changePassword', (req, res) => {

  if(req.body.type=='driver')
  {
    admin.auth().updateUser(req.body.userId, {
      email: req.body.email,
      emailVerified: true,
      password: req.body.password
    })
      .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        res.json(userRecord)
        console.log('Successfully updated user', userRecord.toJSON());
      })
      .catch(function(error) {
        console.log('Error updating user:', error);
      });
  }
  else
  {
    admin.auth().updateUser(req.body.userId, {
      email: req.body.email,
      emailVerified: true,
      password: req.body.password
    })
      .then(function(userRecord) {
        // See the UserRecord reference doc for the contents of userRecord.
        res.json(userRecord)
        console.log('Successfully updated user', userRecord.toJSON());
      })
      .catch(function(error) {
        console.log('Error updating user:', error);
    });
  }

})


module.exports = router;
