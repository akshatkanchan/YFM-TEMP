const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


var admin = require('./firebase-admin');

var connection= require('./db.js');

router.post('/retrieve', (req, res, next) => {
console.log(req.body.ownerId);
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select p.name, p.phone, p.alternatephone, p.address, p.email, p.headofficecity, p.ownerId,c.toOwnerId ,c.status from companyProfile p left join circleRequest c on p.ownerId = c.toOwnerId and c.fromOwnerId='${req.body.ownerId}' where p.ownerId!='${req.body.ownerId}'  `,function (err, result) {
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

router.post('/retrieveSuppliers', (req, res, next) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from circles where ownerId=${req.body}`,function (err, result) {
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

router.post('/retrieveRequests', (req, res, next) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`select * from companyProfile c LEFT JOIN circleRequest cr ON c.ownerId = cr.fromOwnerId where cr.toOwnerId='${req.body.ownerId}' and cr.status='Pending'`,function (err, result) {
      if (err) {
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

router.post('/retrieveReceivedDuty', (req, res, next) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`select * from requestDuty r,duties d where d.id=r.dutyId and r.supplierId='${req.body.ownerId}' ORDER BY r.requestStatus DESC`,function (err, result) {
      if (err) {
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

router.post('/retrieveCompletedReceivedDuty', (req, res, next) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
      console.log(req.body)

    connection.query(`select d.*, sum(e.charges) as extraChargesTotal from requestDuty r left join duties d on r.dutyId = d.id left join (select sum(charges) as charges, dutyId from extraChargesDuties group by dutyId) e on e.dutyId=d.id where d.id=r.dutyId and d.status="Completed" and r.ownerId='${req.body.user.ownerId}' group by d.id`,function (err, result) {
      if (err) {
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

  router.post('/retrieveSentDuty', (req, res, next) => {

    var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`select * from requestDuty r,duties d where d.id=r.dutyId and r.ownerID='${req.body.ownerId}'`,function (err, result) {
      if (err) {
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

  router.post('/retrievePurchaseDuty', (req, res, next) => {

    var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`select a.*,b.price as estimate,s.name as sname,s.phone as sphone, s.email as semail from duties a,duties b,supplier s where b.ownerId=s.supplierOwnerId and s.ownerId='${req.body.ownerId}' and a.supplierDId!='null' and a.supplierDId=b.id and a.status='Completed' order by a.startDate desc`,function (err, result) {
      if (err) {
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

  router.post('/retrievePurchaseDutyByDate', (req, res, next) => {

    var token=req.headers['authorization'];

    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
    jwt.verify(token, "secret", function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      else {

        connection((err,connection)=>{
          connection.query(`select a.*,b.price as estimate,s.name as sname,s.phone as sphone, s.email as semail from duties a,duties b,supplier s where b.ownerId=s.supplierOwnerId and a.ownerId='${req.body.ownerId}' and a.supplierDId!='null' and a.supplierDId=b.id and (a.startDate >= '${req.body.startDate}' and a.startDate <= '${req.body.endDate}') order by a.startDate`,function (err, result) {
            if (err) {
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

  router.post('/retrievePurchaseDutyTypePrice', (req, res, next) => {

    var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`SELECT p.baseRate, p.extraHrs, p.extraKm from duties d, prices p WHERE d.ownerId = '${req.body.ownerId}' and d.dutyTypeId = p.dutyTypeId`,function (err, result) {
      if (err) {
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

  // Accept Duty Start

  router.post('/acceptDuty', (req, res, next) => {

    var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`update requestDuty set requestStatus='Accepted',log='${req.body.log}' where dutyId=${req.body.id}`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      insertNotification("Your duty has been accepted by "+req.body.bookBy+" from "+req.body.notificationCompanyName,"/pages/circles/myrequests","Sent",req.body.notificationOwnerId)
      temporaryTable(req)
     res.json(result)
     connection.release();
    });
    });
  }
  })
  });

  function temporaryTable(req)
  {
    connection((err,connection)=>{
      connection.query(`drop table if exists temporary_table`);
      connection.query(`drop table if exists temporary_table2`);
    connection.query(`CREATE TABLE temporary_table AS SELECT * FROM duties WHERE id=${req.body.id};CREATE TABLE temporary_table2 AS SELECT * FROM duties WHERE id=${req.body.id}`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      connection.release();
      alterTemporary(req)
    });
    });
  }

  function alterTemporary(req)
  {
    connection((err,connection)=>{
    connection.query(`alter table temporary_table drop  vehicle, drop driver,drop driverId,drop subTitle,drop title1,drop title2,drop id,drop bid, drop vehicleId,drop ownerDId,drop supplierDId;alter table temporary_table2 drop  vehicle, drop driver,drop driverId,drop id,drop bid, drop vehicleId,drop ownerDId,drop supplierDId,drop title1,drop title2,drop subTitle;`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      connection.release();
      updateTemporary(req)
    });
    });
  }
  

  function updateTemporary(req)
  {
    connection((err,connection)=>{
    connection.query(`update temporary_table set cname='${req.body.companyName}',customerId=(select id from customer where customerOwnerId like '${req.body.notificationOwnerId}' limit 1), endDate=(select startDate from duties where id=${req.body.id}) ,ownerId='${req.body.ownerId}';
    update temporary_table2 set  ownerId='${req.body.ownerId}',bookBy='${req.body.bookBy}',cname='${req.body.companyName}',customerId=(select id from customer where customerOwnerId like '${req.body.notificationOwnerId}' limit 1),vehicleGroupId='${req.body.vehicleGroupId}',vehicleGroup='${req.body.vehicleGroup}',dutyTypeId=${req.body.dutyTypeId},dutyType='${req.body.dutyType}'`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      connection.release();
     insertTemporary(req)
    });
    });
  }

  function insertTemporary(req)
  {
    connection((err,connection)=>{
    connection.query(`INSERT INTO bookings (cname, bookBy, bookByNo, bookByEmail, passenger, passengerNo, passengerEmail, fromLoc, toLoc, reportingTime, startFromGarage, reportingAddress, dropAddress, shortReportingAddress, flightTrainNo, dispatchCenter, billTo, price, remarks, operatorNotes, label, vehicleGroupId, dutyTypeId, status, ownerId,startDate, endDate, vehicleGroup, dutyType,customerId,subStatus,supplierId,supplierName,extraKms,extraHours,supplierType,dispatchCenterId) (select * from temporary_table);
    INSERT INTO duties (cname, bookBy, bookByNo, bookByEmail, passenger, passengerNo, passengerEmail, fromLoc, toLoc, reportingTime, startFromGarage, reportingAddress, dropAddress, shortReportingAddress, flightTrainNo, dispatchCenter, billTo, price, remarks, operatorNotes, label, vehicleGroupId, dutyTypeId, status, ownerId,startDate, endDate, vehicleGroup, dutyType, customerId,subStatus,supplierId,supplierName,extraKms,extraHours,supplierType,dispatchCenterId) (select * from temporary_table2);`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      connection.release();
     updateDuties(result,req);
    });
    });
  }


  function updateDuties(temp,req)
  {
    connection((err,connection)=>{
    connection.query(`update duties set supplierDId='${temp[1].insertId}' where id ='${req.body.id}';
    UPDATE duties set bid=${temp[0].insertId},ownerDId=${req.body.id} where id='${temp[1].insertId}';`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      connection.release();
      console.log("Done")
      dropTemporary();
    });
    });
  }
  function dropTemporary()
  {
    connection((err,connection)=>{
    connection.query(`drop table temporary_table;drop table temporary_table2;`,function (err, result) {
      if (err) {
        console.log(err);
        return;
      }
      connection.release();
    });
    });
  }

  //Acccept Duty End

  router.post('/declineDuty', (req, res, next) => {

    var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`update requestDuty set requestStatus='Declined',log='${req.body.log}' where dutyId=${req.body.id}`,function (err, result) {
      if (err) {
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

  router.post('/getCircle', (req, res, next) => {

    var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`SELECT * FROM circles c LEFT JOIN companyProfile cp ON c.supplierId = cp.ownerId where c.ownerId='${req.body.ownerId}'`,function (err, result) {
      if (err) {
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

  router.post('/getClients', (req, res, next) => {

    var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`select * from circles where supplierId='${req.body.ownerId}'`,function (err, result) {
      if (err) {
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


router.post('/acceptRequest', (req, res, next) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into circles set ?",req.body.supplier,function (err, result) {
    if (err) {
       connection.release();
    }
    
    insertNotification("You circle request has been accepted by "+req.body.supplier.supplierName,"/pages/circles/circlerequests","",req.body.supplier.ownerId)
  });

  connection.query(`update circleRequest set status='Accepted' where id=${req.body.id}`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
  });
  connection.release();
  });
  }
  })

  //edit here
  

});

router.post('/declineRequest', (req, res, next) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update circleRequest set status='Declined' where id=${req.body.id}`,function (err, result) {
    if (err) {
       connection.release();
    }
    
    insertNotification("You circle request has been Declined by "+req.body.supplierName,"/pages/circles/circlerequests","",req.body.ownerId)
   res.json(result)
   connection.release();
  });
 
  });
  }
})
    //edit here

});


router.post('/sendRequest', (req, res, next) => {

  console.log("hkajshdkjashd")
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into circleRequest set ?",req.body,function (err, result) {
    if (err) {
       connection.release();
    }
    
   res.json(result)
   connection.release();
  });
  });
  }
})

  //edit here
  insertNotification("You have a Circle Request from "+req.body.name,"/pages/circles/circlerequests","",req.body.toOwnerId)

});
router.post('/sendRequestAgain', (req, res, next) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update circleRequest set status='Pending' where fromOwnerId='${req.body.fromOwnerId}' and toOwnerId='${req.body.toOwnerId}'`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });
  });
  }
})

  //edit here
  insertNotification("You have a Circle Request from "+req.body.name,"/pages/circles/circlerequests","",req.body.toOwnerId)

});

router.post('/sendDutyRequest', (req, res, next) => {
  
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into requestDuty set ?",req.body,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });
  });
  }
})
  //edit here
  insertNotification("You have a Duty Request from "+req.body.ownerName,"/pages/circles/myrequests","",req.body.supplierId)
});

router.post('/retrieveData', (req, res, next) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from dutyType where id=3`,req.body,function (err, result) {
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

router.post('/update', (req, res, next) => {
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
  });
  }
  })
});

router.post('/delete', (req, res, next) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`delete from dutyType where id=${req.body.id}`,req.body,function (err, result) {
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
  });
  var payload = {
    notification: {
      title: "YourFleetMan",
      body: content
    }
  };
  
  var topic = ''+ownerId;//to be changed
  
  admin.messaging().sendToTopic(topic, payload)
    .then(function(response) {
      console.log("Successfully sent message:", response);
    })
    .catch(function(error) {
      console.log("Error sending message:", error);
    });
}

module.exports = router;