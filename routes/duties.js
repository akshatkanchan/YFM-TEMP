const express = require('express');
const router = express.Router();
const moment = require('moment')
const jwt = require('jsonwebtoken');

var connection= require('./db.js');
var admin = require('./firebase-admin');

router.post('/retrieve', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  // connection.connect();
  // select * from duties d left join (select dutyId,GROUP_CONCAT(l.name),GROUP_CONCAT(l.color),GROUP_CONCAT(concat(l.name,':',l.color)) from labelsInDuties d,labels l where labelId=l.id GROUP by d.dutyId) b on d.id = b.dutyId 
  connection.query("select * from duties",function (err, result) {
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

router.post('/retrieveDutyByBId', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  // connection.connect();
  // select * from duties d left join (select dutyId,GROUP_CONCAT(l.name),GROUP_CONCAT(l.color),GROUP_CONCAT(concat(l.name,':',l.color)) from labelsInDuties d,labels l where labelId=l.id GROUP by d.dutyId) b on d.id = b.dutyId 
  connection.query(`select * from duties where bid=${req.body.id}`,function (err, result) {
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

router.post('/retrieveDutyById', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  // connection.connect();
  // select * from duties d left join (select dutyId,GROUP_CONCAT(l.name),GROUP_CONCAT(l.color),GROUP_CONCAT(concat(l.name,':',l.color)) from labelsInDuties d,labels l where labelId=l.id GROUP by d.dutyId) b on d.id = b.dutyId 
  connection.query(`select * from duties where id=${req.body.id}`,function (err, result) {
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
console.log(req.body);

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into duties set ?",req.body,function (err, result) {
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

router.post('/retrieveEditRequest', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from editRequests where ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrieveValueChanges', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from valueChanges where dutyId=${req.body.dutyId}`,function (err, result) {
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

router.post('/editRequest', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into editRequests set ?",req.body.duty,function (err, result) {
    if (err) {
      console.log(err)
       connection.release();
    }
    valueChanges(req)
   res.json(result)
   connection.release();
  });

  })
  }
  })
});

router.post('/getOwnerIdforRequest', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select ownerId from duties where id='${req.body.id}'`,function (err, result) {
    if (err) {
       connection.release();
    }
    // valueChanges(req)
   res.json(result)
   connection.release();
  });

  })
  }
  })
});

function valueChanges(req){
  {
    
    connection((err,connection)=>{
    connection.query("insert into valueChanges set ?",req.body.valueChanges,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      connection.release();
      // res.json(result)
    });
    })
  }
}

router.post('/close', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into closedDutyDetails set ?",req.body,function (err, result) {
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

router.post('/closeExtras', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into extraChargesDuties set ?",req.body,function (err, result) {
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


router.post('/closeDutyExtra', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    console.log(req.body);
    
    req.body.extras.forEach(element => {
      connection((err,connection)=>{
          connection.query(`insert into extraChargesDuties set name='${element.name}',
          charges='${element.charges}',dutyId='${req.body.dutyId}',ownerId='${req.body.ownerId}',
          fileName='${element.fileName}'`,function (err, result) {
            if (err) {
              console.log(err)
              connection.release();
            }
            connection.release();
          });  
      });
    })
    res.json({ok:"success"})
  }
  }) 
});

router.post('/retrieveDutyType', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from dutyType where id=${req.body.id}`,req.body,function (err, result) {
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

// router.post('/retrievePrice', (req, res) => {
//   var token=req.headers['authorization'];

//   if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
//   jwt.verify(token, "secret", function(err, decoded) {
//   if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
//   else{

//     connection((err,connection)=>{
//     connection.query(`select * from prices where vehicleGroupId= and customerId= and city= and dutyTypeId= `,req.body,function (err, result) {
//       if (err) {
//         console.log(err);
//         return;
//       }
//      res.json(result)
//      connection.release();
//     });
//     })
//   }
// })
// });

router.post('/vehicleStatus', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    connection((err,connection)=>{
    connection.query(`select * from vehicles where ownerId='${req.body.ownerId}' and vehicleGroupId='${req.body.vehicleGroupId}' and id not in (select vehicleId from duties where vehicleId is not null and ownerId='${req.body.ownerId}' and startDate='${req.body.startDate}' and status != 'Completed')`,function (err, result) {
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

router.post('/markDispatch', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update duties set status='${req.body.status}', subStatus='${req.body.subStatus}' where id=${req.body.id}`,function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    
    if(req.body.status == "Dispatched")
    {
      console.log("Dipac");
      sendFCM(req.body.driverId,"Duty has been dispatched")
    }
    if(req.body.status == "Allotted")
    {
      console.log("Allote");
      sendFCM(req.body.driverId,"Dispatched duty has been reverted")
    }
    if(req.body.ownerDId!=null){
      updateSecondDutyDispatched(req)
    }
   res.json(result)
   connection.release();
  });
  })
  }
  })
}); 

router.post('/markDispatchMobile', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
    
  connection.query(`SELECT count(*) as count from duties where driverId=${req.body.driverId} and status="Dispatched"`,function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    
    if(result[0].count == 0) {
      dispatchDutyFromMobile(req,res);
    }
    else {
      res.json({status: false})
    }
  //  res.json(result)
   connection.release();
  });
  })
  }
  })
}); 

function dispatchDutyFromMobile(req,res) {
  connection((err,connection)=>{
  connection.query(`update duties set status='${req.body.status}', subStatus='${req.body.status}' where id=${req.body.id}`,function (err, result) {
    if (err) {
      console.log(err);
      return;
    }

    if(req.body.status == "Dispatched")
    {
      console.log("Dipac");
      sendFCM(req.body.driverId,"Duty has been dispatched")
    }
    if(req.body.status == "Allotted")
    {
      console.log("Allote");
      sendFCM(req.body.driverId,"Dispatched duty has been reverted")
    }
    if(req.body.ownerDId!=null){
      updateSecondDutyDispatched(req)
    }
    res.json({result:result,status:true})
   connection.release();
  })
});
}

function sendFCM(id,message)
{
  console.log(id);
  
  if(id)
    connection((err,connection)=>{
        connection.query(`select regToken from FCMNotification f, drivers d where f.userId = d.userId and d.id=${id}`,function (err, result) {
          if (err) {
            console.log(err);
            connection.release();
          }
          
          console.log(result);
          
          if(result.length>0)
          {
            var token = result[0].regToken

            var payload = {
              notification: {
              title: "Your Fleet Man",
              body: message
              }
            };

            var options = {
              priority: "high",
              timeToLive: 20*100
            }

            admin.messaging().sendToDevice(token,payload,options).then(function(response){
              console.log("Successfully sent: ",response)
              // res.json(response);
            }).catch(function(error){
              console.log(error)
              // res.json(error);
            })
          }
          if(result.length == 0)
          {
            // res.json("No device registered")
          }

      connection.release();
    });

    })
}

router.post('/updateSubStatus', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update duties set subStatus='${req.body.subStatus}' where id=${req.body.id}`,function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    if(req.body.ownerDId!=null){
      updateSecondDutySubStatus(req)
    }
   res.json(result)
   connection.release();
  });
  })
  }
  })
});

function updateSecondDutyDispatched(req){
  {
    connection((err,connection)=>{
    connection.query(`update duties set status='${req.body.status}', subStatus='${req.body.status}' where supplierDId=${req.body.id}`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      connection.release();
      // res.json(result)
    });
    })
  }
}

function updateSecondDutySubStatus(req){
  {
    connection((err,connection)=>{
    connection.query(`update duties set subStatus='${req.body.status}' where supplierDId=${req.body.id}`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      connection.release();
      // res.json(result)
    });
    })
  }
}

router.post('/update', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update duties set driver=${req.body.driver},driverId=${req.body.driverId},vehicle=${req.body.vehicle},vehicleId=${req.body.vehicleId},status='${req.body.status}',supplierName='${req.body.supplierName}',supplierId=${req.body.supplierId} where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updateForOffline', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update duties set supplierId=${req.body.supplierId},supplierType='${req.body.supplierType}', supplierName='${req.body.supplierName}',status='${req.body.status}',subStatus='${req.body.status}' where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/updateEdit', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update duties set ? where id=${req.body.id}`,req.body,function (err, result) {
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


router.post('/updateClose', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update duties set status='${req.body.status}',endDate=${req.body.endDate},price='${req.body.price}' where id=${req.body.id}`,function (err, result) {
    //console.log(req.body)
    if (err) {
       connection.release();
    }
    if(req.body.ownerDId!=null){
      updateSecondDutyClose(req)
      console.log("Sencond Duty Update")
    }
    updateWallet(req)
   res.json(result)
   connection.release();
  });
  })
  }
  })
});
function updateWallet(req) {
  var token=req.headers['authorization'];
  console.log("SAD")
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update wallet set amount=amount-4.72 where ownerId='${req.body.ownerId}'`,function (err, result) {
    if (err) {
      console.log(err)
      connection.release();
    }
    // updateWalletTransaction(req);
   connection.release();
  });
  })
  }
  })
}

function updateWalletTransaction(req) {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  console.log("SAD")
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    var date=moment(new Date().format('YYYY-MM-DD hh:mm:ss'))
  connection((err,connection)=>{
  connection.query(`insert into walletTransactions set bookingId=${req.body.id},amount=4.72,ownerId='${req.body.ownerId}',
  date='${date}',reason='Duty Completion'`,function (err, result) {
    if (err) {
      console.log(err)
      connection.release();
    }
   connection.release();
  });
  })
  }
  })
}
function updateSecondDutyClose(req){
  {
    connection((err,connection)=>{
    connection.query(`update duties set status='${req.body.status}',endDate=${req.body.endDate},price='${req.body.price}' where supplierDId=${req.body.id}`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      connection.release();
      // res.json(result)
    });
    })
  }
}

router.post('/getDriverAllotmentLogs', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from driverAllottementLogs where driverId=${req.body.driverId}`,req.body,function (err, result) {
    if (err) {
      console.log(err)
       connection.release();
    }
    if(req.body.ownerDId!=null){
      allotsecondDuty(req)
    }
   res.json(result)
   connection.release();
  });
  })
  }
  })
});

router.post('/allotDriver', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update duties set driver='${req.body.driver}',driverId=${req.body.driverId},vehicle='${req.body.vehicle}',vehicleId=${req.body.vehicleId},status='${req.body.status}',subStatus='${req.body.subStatus}' where id=${req.body.id}`,req.body,function (err, result) {
    if (err) {
      console.log(err)
       connection.release();
    }
    if(req.body.ownerDId!=null){
      allotsecondDuty(req)
    }
    if(result.affectedRows == 1) {
      var message=`You have been alloted duty #${req.body.id}`
      insertDriverLogs(req,message)
      sendFCM(req.body.driverId,"New duty has been allotted");
    }
   res.json(result)
   connection.release();
  });
  })
  }
  })
});

router.post('/allotMyDriver', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {

      connection((err,connection)=>{
        connection.query(`update duties set driver='${req.body.driver}',driverId=${req.body.driverId},status='${req.body.status}',subStatus='${req.body.subStatus}' where id=${req.body.id}`,req.body,function (err, result) {
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

function insertDriverLogs(req,message) {
  connection((err,connection)=>{
    connection.query(`insert into driverAllottementLogs set driverId=${req.body.driverId},message='${message}'`,function(err , result) {
      if(err) {
        console.log(err)
        connection.release();
      }
      // connection.release();
    })
  })
}

router.post('/acceptAllottment', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
      connection((err,connection)=>{
        connection.query(`update duties set subStatus='Accepted' where id=${req.body.id}`,function (err, result) {
          if (err) {
            console.log(err)
            connection.release();
          }  
          if(result.affectedRows == 1) {
            var date=Date.now();
            var message=`You have accepted duty #${req.body.id} on ${date}`;
            sendFCM(req.body.driverId,"You have accepted a duty");
            insertDriverLogs(req,message);
          }   
          res.json(result)
          connection.release();
        });
      })
    }
  })
});

router.post('/declineAllottment', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        connection.query(`update duties set driver=null,driverId=null,vehicle=null,
        vehicleId=null,status='Booked',subStatus='Declined'
        where id=${req.body.id}`,function (err, result) {
          if (err) {
            console.log(err)
            connection.release();
          }    

          if(result.affectedRows == 1) {
            var date=Date.now();
            var message=`You have declined duty #${req.body.id} on ${date}`;
            insertDriverLogs(req,message);
          }
          res.json(result)
          connection.release();
        });
      })
    }
  })
});

function allotsecondDuty(req)
  {
    connection((err,connection)=>{
    connection.query(`update duties set driver='${req.body.driver}',driverId=${req.body.driverId},vehicle='${req.body.vehicle}',vehicleId=${req.body.vehicleId},status='Allotted',subStatus='${req.body.subStatus}' where supplierDId=${req.body.id}`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      connection.release();
      console.log("Done")
    });
    })
  }

router.post('/delete', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`delete from duties where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/retrieveCustomer', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select id from customer where name='${req.body.name}'`,function (err, result) {
    if (err) {
       connection.release();
    }
     res.json(result);
    connection.release();
  });

  })
}
  })
});

router.post('/filterDuty', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from duties where status='${req.body.value}'`,function (err, result) {
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

router.post('/checkIfBookingComplete', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select count(*) as cnt from bookings where bid=${req.body.value} and status!='Completed'`,function (err, result) {
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


router.post('/completeBooking', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`UPDATE bookings
  SET status = 'Completed'
  WHERE id=${req.body.value}`,function (err, result) {
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
  
  jwt.verify(token, "secret",function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`select count(*) as count from duties where status like'%${req.body.status}%' and ( cname like '%${req.body.filter}%' or bookBy like '%${req.body.filter}%' or passenger like '%${req.body.filter}%' or remarks like '%${req.body.filter}%' or dutyType like '%${req.body.filter}%' or driver like '%${req.body.filter}%' or supplierName like '%${req.body.filter}%') and (startDate >= '${req.body.startDate}' and startDate <= '${req.body.endDate}') and ownerId='${req.body.ownerId}' order by ${req.body.sortColumn} ${req.body.sortOrder}`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      res.json(result);
      connection.release();
    });
    })
  }
})
});

router.post('/countForDriver', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret",function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`select count(*) as count from duties where status like'%${req.body.status}%' and ( cname like '%${req.body.filter}%' or bookBy like '%${req.body.filter}%' or passenger like '%${req.body.filter}%' or remarks like '%${req.body.filter}%' or dutyType like '%${req.body.filter}%' or driver like '%${req.body.filter}%' or supplierName like '%${req.body.filter}%') and (startDate >= '${req.body.startDate}' and startDate <= '${req.body.endDate}') and ownerId='${req.body.ownerId} and driverId=${req.body.driverId}' order by ${req.body.sortColumn} ${req.body.sortOrder}`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      res.json(result);
      connection.release();
    });
    })
  }
})
});

router.post('/find', (req, res) => {

  var token=req.headers['authorization'];
  
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret",function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    
    connection((err,connection)=>{
    var offset=req.body.pageSize*(req.body.pageNumber);
    console.log(req.body.status);
    
    connection.query(`select * from duties where status like '%${req.body.status}%' and ( cname like '%${req.body.filter}%' or bookBy like '%${req.body.filter}%' or passenger like '%${req.body.filter}%' or remarks like '%${req.body.filter}%' or dutyType like '%${req.body.filter}%' or driver like '%${req.body.filter}%' or supplierName like '%${req.body.filter}%' or id in (select distinct dutyId from labelsInDuties where labelName like "%${req.body.filter}%")) and (startDate >= '${req.body.startDate}' and startDate <= '${req.body.endDate}' ) and ownerId='${req.body.ownerId}'  order by ${req.body.sortColumn} ${req.body.sortOrder} limit ${offset},${req.body.pageSize}`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      for(var i=0;i<result.length;i++)
      {
        result[i].startDate = moment(result[i].startDate).format('YYYY-MM-DD')
      }
      res.json(result);
      connection.release();
    });
    })
    
  }
})
});

router.post('/findForDriver', (req, res) => {

  var token=req.headers['authorization'];
  
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret",function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    
    connection((err,connection)=>{
    var offset=req.body.pageSize*(req.body.pageNumber);
    console.log(req.body.status);
    
    connection.query(`select * from duties where status like '%${req.body.status}%' and ( cname like '%${req.body.filter}%' or bookBy like '%${req.body.filter}%' or passenger like '%${req.body.filter}%' or remarks like '%${req.body.filter}%' or dutyType like '%${req.body.filter}%' or driver like '%${req.body.filter}%' or supplierName like '%${req.body.filter}%' or id in (select distinct dutyId from labelsInDuties where labelName like "%${req.body.filter}%")) and (startDate >= '${req.body.startDate}' and startDate <= '${req.body.endDate}' ) and ownerId='${req.body.ownerId}' and driverId=${req.body.driverId}  order by ${req.body.sortColumn} ${req.body.sortOrder} limit ${offset},${req.body.pageSize}`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      for(var i=0;i<result.length;i++)
      {
        result[i].startDate = moment(result[i].startDate).format('DD-MM-YYYY');
      }
      res.json(result);
      connection.release();
    });
    })
    
  }
})
});

router.post('/getLabels',(req, res) => {

  if(req.body.idArray.length>0)
  {
    var arr= req.body.idArray.join(",");

    connection((err,connection)=>{
    connection.query(`select * from labelsInDuties ld left join labels l on l.id=ld.labelId where ld.dutyId in (${arr})`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      res.json(result);
      connection.release();
    });
  })
  }
  }

);

router.post('/getDriverUserId',(req, res) => {
  if(req.body.idArray.length > 0) {
    var arr= req.body.idArray.join(",");
    console.log(arr);
    
    connection((err,connection) => {
      connection.query(`select id,userId,mobileNumber as phoneNumber from drivers where id in (${arr})`,function (err, result) {
        if (err) {
          console.log(err);
          return;
        }
        res.json(result);
        connection.release();
      });
    })
  }
});

router.post('/availabeDriversForEdit', (req, res) => {

  var token=req.headers['authorization'];
  
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
  var offset=req.body.pageSize*(req.body.pageNumber);
  
  connection.query(`SELECT * from drivers where id not in (select driverId from duties where startDate='${req.body.startDate}' and driverId != '' and ownerId='${req.body.ownerId}') and ownerId='${req.body.ownerId}'`,function (err, result) {
    if (err) {
       connection.release();
    }
    for(var i=0;i<result.length;i++)
    {
      result[i].startDate = moment(result[i].startDate).format('YYYY-MM-DD')
    }
    res.json(result);
    connection.release();
  });
  })
  }
})
});

router.post('/availabeVehiclesForEdit', (req, res) => {

  var token=req.headers['authorization'];
  
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
  var offset=req.body.pageSize*(req.body.pageNumber);
  
  connection.query(`SELECT * from vehicles where id not in (SELECT vehicleId FROM duties where vehicleId !='' and ownerId='${req.body.ownerId}') and vehicleGroupId = ${req.body.vehicleGroupId} and ownerId='${req.body.ownerId}'`,function (err, result) {
    if (err) {
       connection.release();
    }
    for(var i=0;i<result.length;i++)
    {
      result[i].startDate = moment(result[i].startDate).format('YYYY-MM-DD')
    }
    res.json(result);
    connection.release();
  });
  })
  }
})
});

router.post('/checkSelfDrive', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select dType from dutyType where id=${req.body.dutyTypeId}`,function (err, result) {
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

router.post('/addSelfDriveDetails', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`insert into selfDriveDetails set ?`,req.body,function (err, result) {
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

router.post('/getSelfDriveDetails', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from selfDriveDetails where dutyId=${req.body.dutyId}`,function (err, result) {
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

router.post('/getOngoing', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`select * from duties where status='Dispatched'and subStatus="Ongoing" and driverId=${req.body.driverId}`,req.body,function (err, result) {
      if (err) {
        console.log(err);
        connection.release();
      }
    
    res.json(result);
    connection.release();
    });
    })
  }
  })
});

router.post('/getDispatched', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`select * from duties where status='Dispatched' and subStatus="Dispatched" and driverId=${req.body.driverId}`,req.body,function (err, result) {
      if (err) {
        console.log(err);
        connection.release();
      }
    
    res.json(result);
    connection.release();
    });
    })
  }
  })
});

router.post('/getDispatchedAndOnGoing', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`select d.*,b.lat,b.lng from duties d left join branches b on b.id=d.dispatchCenterId where d.status='Dispatched' and d.driverId=${req.body.driverId}`,function (err, result) {
      if (err) {
        console.log(err);
        connection.release();
      }
    
    res.json(result);
    connection.release();
    });
    })
  }
  })
});

router.post('/startTripDetails', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  var query =`insert into ongoingDutyDetails set ?;`;
  query=query+`update duties set subStatus='Ongoing' where id=${req.body.dutyId};`;
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {
      console.log(req.body);

      connection((err,connection)=>{
        connection.query(`delete from ongoingDutyDetails where dutyId=${req.body.dutyId}`,function (err, result) {
          if (err) {
            console.log(err);
            return;
          }
        });
        connection.query(query,req.body,function (err, result) {
          if (err) {
            console.log(err);
            return;
          }
          // res.json(result);
          if(result[0].affectedRows == 1 && result[1].affectedRows == 1)
          {
              res.json({status:true})
          }
          else
          {
            res.json({status:false})
          }
          connection.release();
        });
      })
    }
  })
});
router.post('/markDispatchMobile', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
    
  connection.query(`SELECT count(*) as count from duties where driverId=${req.body.driverId} and status="Dispatched"`,function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    
    if(result[0].count == 0) {
      dispatchDutyFromMobile(req,res);
    }
    else {
      res.json({status: false})
    }
  //  res.json(result)
   connection.release();
  });
  })
  }
  })
}); 
function dispatchDutyFromMobile(req,res) {
  connection((err,connection)=>{
  connection.query(`update duties set status='${req.body.status}', subStatus='${req.body.status}' where id=${req.body.id}`,function (err, result) {
    if (err) {
      console.log(err);
      return;
    }

    if(req.body.status == "Dispatched")
    {
      console.log("Dipac");
      sendFCM(req.body.driverId,"Duty has been dispatched")
    }
    if(req.body.status == "Allotted")
    {
      console.log("Allote");
      sendFCM(req.body.driverId,"Dispatched duty has been reverted")
    }
    if(req.body.ownerDId!=null){
      updateSecondDutyDispatched(req)
    }
    res.json({result:result,status:true})
   connection.release();
  })
});
}

router.post('/getStartTripDetails', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from ongoingDutyDetails where dutyId=${req.body.dutyId}`,function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    updateDuty(req);
   res.json(result)
   connection.release();
  });
  })
  }
  })
});

router.post('/endTrip', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  var query =`update ongoingDutyDetails set ? where dutyId=${req.body.dutyId};`;
  query=query+`update duties set subStatus='Ended' where id=${req.body.dutyId};`;
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(query,req.body,function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
  //  res.json({result:result,status:"ok"});
   res.json(result)
   connection.release();
  });
  })
  }
  })
});

router.post('/closeDutyNew', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select CONCAT(HOUR(TIMEDIFF(o.startDateTime, o.endDateTime)), ' hours ',MINUTE(TIMEDIFF(o.startDateTime, o.endDateTime)), ' minutes') as totalTime, o.*,
  d.dutyTypeId,d.driverId,d.customerId,d.vehicleGroupId,d.extraKms,d.extraHours,d.price,d.bid,d.ownerId from duties d left join ongoingDutyDetails o on o.dutyId=d.id left join drivers dr on d.driverId=dr.id where d.id=${req.body.id}`,function (err, result) {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(result[0])
      if(result[0].extraHours !=null && result[0].extraKms !=null) {
        var prices=0;
        if(result[0].price != null) {
          prices=result[0].price
          checkDutyType(result,prices,res)
        } else {
          checkPrices(result,res);
        }
      } else {
        checkPrices(result,res)
      }
    }
  });
  })
  }
  })
});
function checkPrices(req,res) {
  connection((err,connection)=>{
    connection.query(`select * from prices where customerId=${req[0].customerId} and vehicleGroupId=${req[0].vehicleGroupId} 
    and dutyTypeId=${req[0].dutyTypeId}`,function(err,result){
      if(err) {
        console.log(err)
        connection.release();
        res.json({result:result,status:false,message:"Error while retrieving prices"})
      } else {
        console.log(result[0],"prices retreived successful!")
        checkDutyType(req,result,res)
      }
    })
  })
}
function checkDutyType(req,prices,res) {
  var finalPrice=0;
  var allowances=[];
  connection((err,connection)=>{
    connection.query(`select * from dutyType where id=${req[0].dutyTypeId}`,function(err,result){
      if(err) {
        console.log(err)
        connection.release();
        res.json({result,status:false,message:"Error while retrieving dutyType"})
      } else {
        calculate().then(function(result){
          // calculateDriverAllowance(req,res).then(function(result){

          // })
          var temp={
            calculatedPrice:result.finalPrice,
            duty:req[0],
            prices:prices[0],
            extraHour:result.extraHour,
            extraKms:result.extraKms
          }
          closeDutyApp(temp,res)
        }).catch(err=>{
          res.json({result:result,status:false,message:"error while calculating"});
        })

        function calculate() {
          return new Promise(function(resolve,reject){
            if(req[0].extraKms !=null || req[0].extraHours != null) {
              var extraKms;
              var extraHour;
              var maxHours = 0;
              var totalHours=0;
              totalHours=parseInt(result[0].totalHrs)
              maxHours=parseInt(result[0].maxHrs)
              console.log(req[0],"PRICES CALLED FROM BOOKING")
              extraKms=req[0].extraKms
              extraHour=req[0].extraHours
              var strg=req[0].totalTime
              var totalHoursDiff=strg.split("hours")
              var strg2=totalHoursDiff[1].split("minutes");
              var totalHour1=parseInt(totalHoursDiff[0]);
              var totalMinuties=parseInt(strg2[0]);
              console.log(totalHour1,totalMinuties);
              var totalDistance = 0;
              if(result[0].g2g === "1") {
                var garageToReporting=parseInt(req[0].garageToReporting)/1000
                var dropToGarage=parseInt(req[0].dropToGarage)/1000;
                var totalStartKm=(parseInt(req[0].startKm)-garageToReporting);
                var totalEndKm=(dropToGarage+parseInt(req[0].endKm));
                totalDistance=totalEndKm-totalStartKm;
                req[0].startKm=totalStartKm;
                req[0].endKm=totalEndKm;
              } else if(result[0].p2p === "1") {
                console.log("Caled P2P")
                totalDistance=req[0].totalDistance
              }

              if(result[0].dType==='Flat Rate') {
                finalPrice=req[0].price
              } else if(result[0].dType === 'HR-KM(Local)') {
                finalPrice=req[0].price
                
                if(totalDistance>result[0].maxKms){
                  allowances=[];
                  allowances.push({
                    ownerId:req[0].ownerId,
                    dutyId:req[0].dutyId,
                    name:'Extra Km',
                    charges:Math.floor((req[0].totalDistance-result[0].maxKms)*extraKms),
                    fileName:''
                  })
                  connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                    if(err){
                      console.log(err)
                      res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                      connection.release();
                    }
                  })

                } if(totalHour1 > maxHours){
                  allowances=[];
                  console.log(totalHour1,maxHours,"Checking if this condition is called?");
                  allowances.push({
                    ownerId:req[0].ownerId,
                    dutyId:req[0].dutyId,
                    name:'Extra Hours and minutes',
                    charges:Math.floor(((totalHour1 - maxHours)*extraHour) + ((totalMinuties * extraHour)/60)),
                    fileName:''
                  })
                  connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                    if(err){
                      console.log(err)
                      res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                      connection.release();
                    }
                  })
                }
              } else if(result[0].dType === 'Day-KM(Outstation)') {
                finalPrice=req[0].price
                allowances=[];
                if(totalDistance>result[0].maxKms){
                  allowances.push({
                    ownerId:req[0].ownerId,
                    dutyId:req[0].dutyId,
                    name:'Extra Km',
                    charges:Math.floor((req[0].totalDistance-result[0].maxKms)*extraKms),
                    fileName:''
                  })
                  connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                    if(err){
                      console.log(err)
                      res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                      connection.release();
                    }
                  })
                } if(totalHour1 > result[0].maxHrs){

                  allowances=[];
                  allowances.push({
                    ownerId:req[0].ownerId,
                    dutyId:req[0].dutyId,
                    name:'Extra hours and minutes',
                    charges:Math.floor(((totalHour1 - result[0].maxHrs)*extraHour) + ((totalMinuties * extraHour)/60)),
                    fileName:''
                  })
                  connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                    if(err){
                      console.log(err)
                      res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                      connection.release();
                    }
                  })
                }
              } else if(result[0].dType === 'Long Duration-Total Km and HR(Monthly Bookings)') {
                finalPrice=req[0].price
                  var maxKms=result[0].maxKms;
                  connection.query(`select count(*) as cnt from duties where bid=${req[0].bid} and status!='Completed'`,function(err,result){
                    if(err){
                      connection.release();
                      res.json({result:result,message:'Error while retreiving last duty',status:false})
                    }
                    if(result[0].cnt == 1) {

                      connection.query(`select sum(endKm - startKm) from closeDutyDetails where bookyId=${req[0].bid}`,function(err,result){
                        if(err){
                          connection.release();
                          res.json({result:result,message:'Error while sum KM of previous duties',status:false})
                        }
                        if(result[0].diff){
                          if(result[0].diff > totalKms) {
                            allowances=[];
                            finalPrice=finalPrice+((result[0].diff-maxKms)*extraKms);
                            allowances.push({
                              ownerId:req[0].ownerId,
                              dutyId:req[0].dutyId,
                              name:'Extra Km',
                              charges:Math.floor((result[0].diff-maxKms)*extraKms),
                              fileName:''
                            })
                            connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                            if(err){
                              console.log(err)
                              res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                              connection.release();
                            }
                          })
                          }
                          connection.query(`select sum(TIME_TO_SEC(TIME_FORMAT(timediff(endTime,startTime),"%H %i"))) as seconds 
                          from closedDutyDetails where bookId=${req[0].bid}`,function(err,result){
                            if(result[0].seconds){
                              var timeDiff=result[0].seconds%3600;
                              console.log(timeDiff);
                              if(timeDiff > totalHours){
                                allowances=[];
                                allowances.push({
                                  ownerId:req[0].ownerId,
                                  dutyId:req[0].dutyId,
                                  name:'Extra Hours',
                                  charges:Math.floor((timeDiff-totalHours)*extraHour),
                                  fileName:''
                                })
                                connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                                if(err){
                                  console.log(err)
                                  res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                                  connection.release();
                                }
                              })
                              }
                            }
                          })
                        }
                      })
                    }
                  })
              }  else if(result[0].dType === 'Long Duration-Total KM Daily HR(Monthly Bookings)') {
                finalPrice=req[0].price
                var totalKms=0;
                totalKms=result[0].totalKms;
                var maxHours=0
                maxHours=result[0].maxHrs;

                connection.query(`select count(*) as cnt from duties where bid=${req[0].bid} and status!='Completed'`,function(err,result){
                  if(err){
                    connection.release();
                    res.json({result:result,message:'Error while retreiving last duty',status:false})
                  }
                  if(result[0].cnt == 1) {

                    //calculate maxHours 
                    if(totalHour1 > maxHours) {
                      allowances=[];
                      allowances.push({
                        ownerId:req[0].ownerId,
                        dutyId:req[0].dutyId,
                        name:'Daily Extra Hours',
                        charges:Math.floor(((totalHour1 - maxHours)*extraHour) + ((totalMinuties * extraHour)/60)),
                        fileName:''
                      })
                      connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                        if(err){
                          console.log(err)
                          res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                          connection.release();
                        }
                      })
                    }

                    //calculating totalKms and totalHours of related bookings

                    connection.query(`select sum(endKm - startKm) from closedDutyDetails where bookyId=${req[0].bid}`,function(err,result){
                      if(err){
                        connection.release();
                        res.json({result:result,message:'Error while sum KM of previous duties',status:false})
                      }
                      if(result[0].diff){
                        if(result[0].diff > totalKms) {
                          allowances=[];
                          finalPrice=finalPrice+((result[0].diff-totalKms)*extraKms);
                          allowances.push({
                            ownerId:req[0].ownerId,
                            dutyId:req[0].dutyId,
                            name:'Extra Km',
                            charges:Math.floor((result[0].diff-totalKms)*extraKms),
                            fileName:''
                          })
                          connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                          if(err){
                            console.log(err)
                            res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                            connection.release();
                          }
                        })
                        }
                      }
                    })

                  } else {
                    if(req[0].totalTime > result[0].maxHrs) {
                      allowances=[];
                      allowances.push({
                        ownerId:req[0].ownerId,
                        dutyId:req[0].dutyId,
                        name:'Daily Extra Hours',
                        charges:Math.floor((req[0].totalTime - result[0].maxHrs)*extraHour),
                        fileName:''
                      })
                      connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                        if(err){
                          console.log(err)
                          res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                          connection.release();
                        }
                      })
                    }
                  }
                })
            }
            } else {
              var strg=req[0].totalTime
              var totalHoursDiff=strg.split("hours")
              var strg2=totalHoursDiff[1].split("minutes");
              var totalHour1=parseInt(totalHoursDiff[0]);
              var totalMinuties=parseInt(strg2[0]);
              console.log(totalHour1,totalMinuties);
              console.log(result[0],"calculating with pricing from prices")
              console.log(prices[0]);
              var extraKms;
              var extraHour;
              var maxHours=result[0].maxHrs
              extraKms=prices[0].extraKm
              extraHour=prices[0].extraHrs
              if(result[0].g2g == 1) {
                var garageToReporting=parseInt(req[0].garageToReporting)/1000
                var dropToGarage=parseInt(req[0].dropToGarage)/1000;
                var totalStartKm=(parseInt(req[0].startKm)-garageToReporting);
                var totalEndKm=(dropToGarage+parseInt(req[0].endKm));
                totalDistance=totalEndKm-totalStartKm;
                req[0].startKm=totalStartKm;
                req[0].endKm=totalEndKm;
              } else if(result[0].p2p == 1) {
                totalDistance=req[0].totalDistance
              }

              if(result[0].dType==='Flat Rate') {
                finalPrice=prices[0].baseRate
              } else if(result[0].dType === 'HR-KM(Local)') {
                finalPrice=prices[0].baseRate
                if(totalDistance>result[0].maxKms){
                  allowances=[];
                  allowances.push({
                    ownerId:req[0].ownerId,
                    dutyId:req[0].dutyId,
                    name:'Extra Km',
                    charges:Math.floor((totalDistance-result[0].maxKms)*extraKms),
                    fileName:''
                  })
                  connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                    if(err){
                      console.log(err)
                      res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                      connection.release();
                    }
                  })
                  
                } if(totalHour1 > result[0].maxHrs){
                  allowances=[];
                  allowances.push({
                    ownerId:req[0].ownerId,
                    dutyId:req[0].dutyId,
                    name:'Extra Hours and minutes',
                    charges:Math.floor(((totalHour1 - result[0].maxHrs)*extraHour)+(totalMinuties * result[0].maxHrs)/60),
                    fileName:''
                  })
                  connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                    if(err){
                      console.log(err)
                      res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                      connection.release();
                    }
                  })
                }
              } else if(result[0].dType === 'Day-KM(Outstation)') {
                console.log("Outstation called");
                finalPrice=prices[0].baseRate
                if(totalDistance>result[0].maxKms){
                  allowances=[];
                  allowances.push({
                    ownerId:req[0].ownerId,
                    dutyId:req[0].dutyId,
                    name:'Extra Km',
                    charges:Math.floor((totalDistance-result[0].maxKms)*extraKms),
                    fileName:''
                  })
                  connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                    if(err){
                      console.log(err)
                      res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                      connection.release();
                    }
                  })
                } if(totalHour1 > result[0].maxHrs){
                  console.log(result[0].maxHrs,"Why is this being called")
                  allowances=[];
                  allowances.push({
                    ownerId:req[0].ownerId,
                    dutyId:req[0].dutyId,
                    name:'Extra Hours and minutes',
                    charges:Math.floor((totalHour1 - result[0].maxHrs)*extraHour + ((totalMinuties * extraHour)/60)),
                    fileName:''
                  })
                  connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                    if(err){
                      console.log(err)
                      res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                      connection.release();
                    }
                  })
                }
              } else if(result[0].dType === 'Long Duration-Total KM and HR(Monthly Bookings)') {
                finalPrice=prices[0].baseRate
                var totalKms=result[0].totalKms;
                connection.query(`select count(*) as cnt from duties where bid=${req[0].bid} and status!='Completed'`,function(err,result){
                  if(err){
                    console.log(err)
                    connection.release();
                    res.json({result:result,message:'Error while retreiving last duty',status:false})
                  }
                  if(result[0].cnt == 1) {
                    connection.query(`select sum(endKm - startKm) as diff from closedDutyDetails where bookyId=${req[0].bid} group by bookyId`,function(err,result){
                      if(err){
                        connection.release();
                        res.json({result:result,message:'Error while sum KM of previous duties',status:false})
                      }
                      if(result[0].diff){
                        if(result[0].diff > totalKms) {
                          allowances=[];
                          finalPrice=finalPrice+((result[0].diff-totalKms)*extraKms);
                          allowances.push({
                            ownerId:req[0].ownerId,
                            dutyId:req[0].dutyId,
                            name:'Extra Km',
                            charges:Math.floor((result[0].diff-totalKms)*extraKms),
                            fileName:''
                          })
                          connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                            if(err){
                              console.log(err)
                              res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                              connection.release();
                            }
                          })
                        }
                        connection.query(`select sum(TIME_TO_SEC(TIME_FORMAT(timediff(endTime,startTime),"%H %i"))) as seconds 
                          from closedDutyDetails where bookId=${req[0].bid}`,function(err,result){
                            if(result[0].seconds){
                              var timeDiff=result[0].seconds%3600;
                              console.log(timeDiff);
                              if(timeDiff > totalHours){
                                allowances=[];
                                allowances.push({
                                  ownerId:req[0].ownerId,
                                  dutyId:req[0].dutyId,
                                  name:'Extra Hours',
                                  charges:Math.floor((timeDiff-totalHours)*extraHour),
                                  fileName:''
                                })
                                connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                                if(err){
                                  console.log(err)
                                  res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                                  connection.release();
                                }
                              })
                              }
                            }
                          })
                      }

                    })
                  }
                })
              } else if(result[0].dType === 'Long Duration-Total KM Daily HR(Monthly Bookings)') {
                finalPrice=prices[0].baseRate
                var totalKms=0;
                var maxHours=0;
                maxHours=result[0].maxHrs;
                totalKms=result[0].totalKms;
                connection.query(`select count(*) as cnt where bid=${req[0].dutyId} and status!='Completed'`,function(err,result){
                  if(err){
                    connection.release();
                    res.json({result:result,message:'Error while retreiving last duty',status:false})
                  }
                  if(result[0].cnt == 1) {

                    //calculate maxHours 
                    if(totalHour1 > maxHours) {
                      allowances=[];
                      allowances.push({
                        ownerId:req[0].ownerId,
                        dutyId:req[0].dutyId,
                        name:'Daily Extra Hours',
                        charges:Math.floor(((totalHour1 - maxHours)*extraHour) + ((totalMinuties * extraHour)/60)),
                        fileName:''
                      })
                      connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                        if(err){
                          console.log(err)
                          res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                          connection.release();
                        }
                      })
                    }

                    //calculating totalKms of related bookings

                    connection.query(`select sum(endKm - startKm) from closeDutyDetails where bookyId=${req[0].bid}`,function(err,result){
                      if(err){
                        connection.release();
                        res.json({result:result,message:'Error while sum KM of previous duties',status:false})
                      }
                      if(result[0].diff){
                        if(result[0].diff > totalKms) {
                          allowances=[];
                          finalPrice=finalPrice+((result[0].diff-totalKms)*extraKms);
                          allowances.push({
                            ownerId:req[0].ownerId,
                            dutyId:req[0].dutyId,
                            name:'Extra Km',
                            charges:Math.floor((result[0].diff-totalKms)*extraKms),
                            fileName:''
                          })
                          connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                          if(err){
                            console.log(err)
                            res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                            connection.release();
                          }
                        })
                        }
                      }
                    })

                  } else {
                    if(req[0].totalTime > maxHours) {
                      allowances=[];
                      allowances.push({
                        ownerId:req[0].ownerId,
                        dutyId:req[0].dutyId,
                        name:'Daily Extra Hours',
                        charges:Math.floor((req[0].totalTime - result[0].maxHrs)*extraHour),
                        fileName:''
                      })
                      connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                        if(err){
                          console.log(err)
                          res.json({result:result,status:false,message:"Error while inserting into extraCharges"})
                          connection.release();
                        }
                      })
                    }
                  }
                })
            }  
            }
            if(err) {
              reject(err)
            } else {
              resolve({finalPrice:Math.floor(finalPrice),allowances:allowances,extraHour,extraKms})
            }
    
          })
  
        }
        

      }
    })
  })
};
function calculateDriverAllowance(req,res) {
  var driverDetails;
  return new Promise(function(reject,resolve){
    connection((err,connection)=>{
      connection.query(`select * from drivers where id=${req.driverId}`,function(err,result){
        driverDetails=result[0]
      })
      connection.query(`select * from DriverAllowancesInBusinessSettings where ownerId='${req.ownerId}' and chargedToCustomer=1`,function(err,result){
        if(err){
          console.log(err);
          res.json({result:result,status:false,message:"Error while getting driver info"})
          connection.release()
        }
        if(req.dType==='Flat Rate') {
          result.forEach(element=>{
            if(element.allwanceType == 'Over time per hour') {
              if(req.endTime > driverDetails.workingHoursEnd) {
                var driverAllowance=(req.endTime - driverDetails.workingHoursEnd)*driverDetails.overTimePerHour;
                var allowances=[];
                allowances.push({
                  ownerId: req.ownerId,
                  dutyId: req.dutyId,
                  name: 'Driver Over Time Allowance',
                  charges: driverAllowance,
                  fileName: '',                
                })
                connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                  if(err){
                    console.log(err)
                    connection.release();
                  }
                })
              }
            } if(element.allwanceType == 'Early Start Allowance') {
              if(req.startTime < driverDetails.workingHoursStart) {
                var driverAllowance=(req.startTime - driverDetails.workingHoursStart)*driverDetails.earlyStartAllowance;
                var allowances=[];
                allowances.push({
                  ownerId: req.ownerId,
                  dutyId: req.dutyId,
                  name: 'Driver Early Start Allowance',
                  charges: driverAllowance,
                  fileName: '',                
                })
                connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                  if(err){
                    console.log(err)
                    connection.release();
                  }
                })
              }
            }
            if(element.allwanceType == 'Night Allowance') {
              if(req.endTime > '22:00') {
                var driverAllowance=100;
                var allowances=[];
                allowances.push({
                  ownerId: req.ownerId,
                  dutyId: req.dutyId,
                  name: 'Driver Night Allowance',
                  charges: driverAllowance,
                  fileName: '',                
                })
                connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                  if(err){
                    console.log(err)
                    connection.release();
                  }
                })
              }
            }  
            if(element.allwanceType == 'Sunday Allowance') {
              if(req.startDate > 'Sunday') {
                var driverAllowance=100;
                var allowances=[];
                allowances.push({
                  ownerId: req.ownerId,
                  dutyId: req.dutyId,
                  name: 'Driver Sunday Allowance',
                  charges: driverAllowance,
                  fileName: '',                
                })
                connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                  if(err){
                    console.log(err)
                    connection.release();
                  }
                })
              }
            }  
          })
        } if(req.dType === 'Day-KM(Outstation)') {
          result.forEach(element => {

            if(element.allwanceType == 'Sunday Allowance') {
              if(req.startDate > 'Sunday') {
                var driverAllowance=100;
                var allowances=[];
                allowances.push({
                  ownerId: req.ownerId,
                  dutyId: req.dutyId,
                  name: 'Driver Sunday Allowance',
                  charges: driverAllowance,
                  fileName: '',                
                })
                connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                  if(err){
                    console.log(err)
                    connection.release();
                  }
                })
              }
            } if(element.allwanceType == 'Outstation Overnight ALlowance') {
              if(req.totalTime > 1) {
                var driverAllowance=100;
                var allowances=[];
                allowances.push({
                  ownerId: req.ownerId,
                  dutyId: req.dutyId,
                  name: 'Driver Outstation Overnight Allowance',
                  charges: driverAllowance,
                  fileName: '',                
                })
                connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                  if(err){
                    console.log(err)
                    connection.release();
                  }
                })
              }
            } 
          })
        }
        if(req.dType === 'Long Duration - Total Km & HR (Monthly Bookings)') {
          result.forEach(element=>{
            if(element.allwanceType == 'Over time per hour') {
              if(req.endTime > driverDetails.workingHoursEnd) {
                var driverAllowance=(req.endTime - driverDetails.workingHoursEnd)*driverDetails.overTimePerHour;
                var allowances=[];
                allowances.push({
                  ownerId: req.ownerId,
                  dutyId: req.dutyId,
                  name: 'Driver Over Time Allowance',
                  charges: driverAllowance,
                  fileName: '',                
                })
                connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                  if(err){
                    console.log(err)
                    connection.release();
                  }
                })
              }
            } if(element.allwanceType == 'Early Start Allowance') {
              if(req.startTime < driverDetails.workingHoursStart) {
                var driverAllowance=(req.startTime - driverDetails.workingHoursStart)*driverDetails.earlyStartAllowance;
                var allowances=[];
                allowances.push({
                  ownerId: req.ownerId,
                  dutyId: req.dutyId,
                  name: 'Driver Early Start Allowance',
                  charges: driverAllowance,
                  fileName: '',                
                })
                connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                  if(err){
                    console.log(err)
                    connection.release();
                  }
                })
              }
            }
            if(element.allwanceType == 'Night Allowance') {
              if(req.endTime > '22:00') {
                var driverAllowance=100;
                var allowances=[];
                allowances.push({
                  ownerId: req.ownerId,
                  dutyId: req.dutyId,
                  name: 'Driver Night Allowance',
                  charges: driverAllowance,
                  fileName: '',                
                })
                connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                  if(err){
                    console.log(err)
                    connection.release();
                  }
                })
              }
            }  
            if(element.allwanceType == 'Sunday Allowance') {
              if(req.startDate > 'Sunday') {
                var driverAllowance=100;
                var allowances=[];
                allowances.push({
                  ownerId: req.ownerId,
                  dutyId: req.dutyId,
                  name: 'Driver Sunday Allowance',
                  charges: driverAllowance,
                  fileName: '',                
                })
                connection.query(`insert into extraChargesDuties set ?`,allowances,function(err,result){
                  if(err){
                    console.log(err)
                    connection.release();
                  }
                })
              }
            }  
          })
        }
      })
    })
    if(reject){
      reject(reject)
    } else {
      resolve(resolve)
    }
  })
}
function closeDutyApp(temp,res) {
  var isLastDuty=false;
  connection((err,connection)=>{
    console.log(temp,"LAST!!@#!#")
    connection.query(`select count(*) as cnt from duties where bid=${temp.duty.bid} and status!='Completed'`,function(err,result){
      if(err){
        console.log(err)
        res.json({result:result,status:false,message:"Error while updating booking"})
        connection.release()
      }
      if(result[0].cnt == 1){
        isLastDuty=true;
      }
    })
    connection.query(`update duties set status='Completed',subStatus='Needs Approval' where id=${temp.duty.dutyId}`,function(err,result){
      if(err) {
        console.log(err)
        res.json({result,status:false,message:"Error while updating duties"})
        connection.release();
      } else {
        var update={
          startDate:temp.duty.startDate,endDate:temp.duty.endDate,startTime:temp.duty.startTime,endTime:temp.duty.endTime,
          startKm:Math.floor(temp.duty.startKm),endKm:Math.floor(temp.duty.endKm),
          extraHrRate:temp.extraHour,extraKmRate:temp.extraKms,finalPrice:temp.calculatedPrice,
          ownerId:temp.duty.ownerId,dutyId:temp.duty.dutyId,bookyId:temp.duty.bid,remarks:''
        }
        connection.query(`insert into closedDutyDetails set ?`,update,function(err,result){
          if(err) {
            console.log(err);
            res.json({result,status:false,message:"Error while inserting closeDuty"});
            connection.release();
          }
          if(isLastDuty == true) {
            connection.query(`update bookings set status="Completed" where id=${temp.duty.bid}`,function(err,result){
              if(err){
                console.log(err);
                res.json({result:result,status:false,message:"Error while updating booking"})
                connection.release()
              }
              res.json({result,status:true,message:"Success"});
              connection.release();
            })
          } else {
            connection.release();
            res.json({result:result,status:true,message:"Success not updated booking"});
          }
        })
        
      } 
    })
  })
}
router.post('/getDutiesForExport', (req, res) => {

 var token=req.headers['authorization'];



 if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

 

jwt.verify(token, "secret", function(err, decoded) {

 if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

else{



 var columns = req.body.columns.join(",")
 connection((err,connection)=>{

 connection.query(`select ${columns} from duties d LEFT JOIN 
            closedDutyDetails c on d.id=c.dutyId LEFT JOIN
            bookingsInInvoice b on b.bookingId=d.bid LEFT JOIN
            invoice i on i.id=b.invoiceId LEFT JOIN
            bookingLogs l on l.bookingId=d.bid LEFT JOIN 
            customer cs on cs.id=d.customerId LEFT JOIN
            drivers dr on dr.id=d.driverId LEFT JOIN
            extraChargesDuties  e on e.dutyId=d.id LEFT JOIN
            bookings bo on bo.id=d.bid
            where d.startDate >= '${req.body.startDate}' and d.endDate <='${req.body.endDate}' and d.customerId=${req.body.customerId}
            GROUP BY d.id,l.message,c.startKm,c.endKm,e.name,e.charges;	`,function (err, result) {

 if (err) {

  console.log(err);

  connection.release();

 }

  

 res.json(result);

 connection.release();

 });

 })

 }

})

});

router.post('/getDutiesByBooking', (req, res) => {

  var token=req.headers['authorization']; 
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
 
    else {
      connection((err,connection)=>{ 
        connection.query(`select * from duties where bid=${req.body.id} and ownerId='${req.body.ownerId}'`,function (err, result) { 
          if (err) {
            console.log(err);
            connection.release();
          }
          res.json(result);
          connection.release(); 
        });
      })
    }
  })
});

router.post('/getEndedCloseDutyDetails', (req, res) => {

  var token=req.headers['authorization']; 
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
 
    else {
      
      
      connection((err,connection)=>{ 
        connection.query(`select * from ongoingDutyDetails where dutyId=${req.body.id}`,function (err, result) { 
          if (err) {
            console.log(err);
            connection.release();
          }
          res.json(result);
          connection.release(); 
        });
      })
    }
  })
});

router.post('/getCloseDutyDetails', (req, res) => {

  var token=req.headers['authorization']; 
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
 
    else {
      
      
      connection((err,connection)=>{ 
        connection.query(`select * from closedDutyDetails where dutyId=${req.body.id}`,function (err, result) { 
          if (err) {
            console.log(err);
            connection.release();
          }
          res.json(result);
          connection.release(); 
        });
      })
    }
  })
});

router.post('/updateCloseDutyDetails', (req, res) => {

  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, "secret", function(err, decoded) {

    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {

      connection((err,connection)=>{
        connection.query(`UPDATE closedDutyDetails SET ? WHERE id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/getEndedCloseDutyAdditionalCharges', (req, res) => {

  var token=req.headers['authorization']; 
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
 
    else {
      
      
      connection((err,connection)=>{ 
        connection.query(`select * from extraChargesDuties where dutyId=${req.body.id}`,function (err, result) { 
          if (err) {
            console.log(err);
            connection.release();
          }
          res.json(result);
          connection.release(); 
        });
      })
    }
  })
});

router.post('/getTripDetails', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`SELECT CONCAT(HOUR(TIMEDIFF(startDateTime, endDateTime)), ' hours ',MINUTE(TIMEDIFF(startDateTime, endDateTime)), ' minutes') as totalTime, totalDistance, cname, passenger, driver, vehicle from ongoingDutyDetails o , duties d where o.dutyId=d.id and dutyId=${req.body.dutyId}`,function (err, result) {
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

router.post('/getDutySlipSummary', (req, res) => {

  var token=req.headers['authorization']; 
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {
      connection((err,connection)=>{
        connection.query(`select d.*,c.*,v.number,dy.maxDays,dy.maxHrs,dy.maxKms from vehicles v,dutyType dy,duties d left join closedDutyDetails c on d.id=c.dutyId where v.id=d.vehicleId and  dy.id=d.dutyTypeId and d.id = ${req.body.id}`,function (err, result) {
          if (err) {
            console.log(err);
            connection.release();
          }
          res.json(result);
          connection.release(); 
        });
      })
    }
  })
});

router.post('/completeDuty', (req, res) => {

  var token=req.headers['authorization']; 
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {
      connection((err,connection)=>{
        connection.query(`update duties set subStatus='Completed' where id=${req.body.id}`,function (err, result) {
          if (err) {
            console.log(err);
            connection.release();
          }
          res.json(result);
          connection.release(); 
        });
      })
    }
  })
});
router.post('/getCompletedDutyCountForApp', (req, res) => {

  var token=req.headers['authorization'];
  
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
  
    connection.query(`SELECT bookings.id, count(duties.bid) as duties_completed from bookings left join duties on (bookings.id = duties.bid) and duties.status like 'Completed' where bookings.id = ${req.body.id} group by bookings.id`,function (err, result) {
      if (err) {
         connection.release();
         console.log((err));     
      }
      
      res.json(result);  
      connection.release();
    });
  
  })
  }
})
});

router.post('/countIncompleteDuties', (req, res) => {

  var token=req.headers['authorization']; 
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {
      connection((err,connection)=>{
        connection.query(`select COUNT(*) as cnt from duties d where bid = ${req.body.bid} and status!='Completed'`,function (err, result) {
          if (err) {
            console.log(err);
            connection.release();
          }
          res.json(result);
          connection.release(); 
        });
      })
    }
  })
});

router.post('/getTotalKms', (req, res) => {

  var token=req.headers['authorization']; 
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {
      connection((err,connection)=>{
        connection.query(`SELECT sum(endKm - startKm) as diff from closedDutyDetails WHERE bookyId=${req.body.bid} GROUP by bookyId`,function (err, result) {
          if (err) {
            console.log(err);
            connection.release();
          }
          res.json(result);
          connection.release(); 
        });
      })
    }
  })
});

router.post('/getTotalSeconds', (req, res) => {

  var token=req.headers['authorization']; 
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {
      connection((err,connection)=>{
        connection.query(`SELECT sum(TIME_TO_SEC(TIME_FORMAT(timediff(endTime,startTime),"%H:%i"))) as seconds from closedDutyDetails where bookyId=${req.body.bid}`,function (err, result) {
          if (err) {
            console.log(err);
            connection.release();
          }
          res.json(result);
          connection.release(); 
        });
      })
    }
  })
});
module.exports = router;