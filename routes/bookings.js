const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const moment = require('moment');

var connection= require('./db.js');

router.post('/retrieve', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
  connection.query(`select * from bookings where ownerId LIKE '${req.body.ownerId}'`,function (err, result) {
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

router.post('/count', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select count(*) as count from bookings where status like'%${req.body.status}%' and ( cname like '%${req.body.filter}%' or bookBy like '%${req.body.filter}%' or passenger like '%${req.body.filter}%' or dutyType like '%${req.body.filter}%' or vehicleGroup like '%${req.body.filter}%' or fromLoc like '%${req.body.filter}%' or toLoc like '%${req.body.filter}%') and ownerId='${req.body.ownerId}' and (startDate >= '${req.body.startDate}' and startDate <= '${req.body.endDate}') order by ${req.body.sortColumn} ${req.body.sortOrder}`,function (err, result) {
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

router.post('/find', (req, res) => {

  var token=req.headers['authorization'];
  
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
  var offset=req.body.pageSize*(req.body.pageNumber);
  
  connection.query(`select bookings.*,count(duties.bid) as number_of_duties from bookings left join duties on (bookings.id = duties.bid) where bookings.status like'%${req.body.status}%' and ( bookings.cname like '%${req.body.filter}%' or bookings.bookBy like '%${req.body.filter}%' or bookings.passenger like '%${req.body.filter}%' or bookings.dutyType like '%${req.body.filter}%' or bookings.vehicleGroup like '%${req.body.filter}%' or bookings.fromLoc like '%${req.body.filter}%' or bookings.toLoc like '%${req.body.filter}%') and bookings.ownerId='${req.body.ownerId}' and (bookings.startDate >= '${req.body.startDate}' and bookings.startDate <= '${req.body.endDate}') group by bookings.id order by bookings.${req.body.sortColumn} ${req.body.sortOrder} limit ${offset},${req.body.pageSize}`,function (err, result) {
    if (err) {
       connection.release();
       console.log((err));
       
    }
    
    for(var i=0;i<result.length;i++)
    {
      result[i].startDate = moment(result[i].startDate).format('YYYY-MM-DD')
      result[i].endDate = moment(result[i].endDate).format('YYYY-MM-DD')
    }
  //  result.startDate = moment(result.startDate).format('YYYY-MM-DD');
    res.json(result);  
    connection.release();
  });
  })
  }
})
});

router.post('/getCompletedDutyCount', (req, res) => {

  var token=req.headers['authorization'];
  
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
  
  if(req.body.idArray.length>0)
  {
    var arr = req.body.idArray.join(",");
  
    connection.query(`SELECT bookings.id, count(duties.bid) as duties_completed from bookings left join duties on (bookings.id = duties.bid) and duties.status like 'Completed' where bookings.id in (${arr}) group by bookings.id`,function (err, result) {
      if (err) {
         connection.release();
         console.log((err));     
      }
      
      res.json(result);  
      connection.release();
    });
  }
  })
  }
})
});

router.post('/retrieveForInvoice', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  connection((err,connection)=>{
  // console.log(req.body)
  connection.query(`select * from bookings where id LIKE '${req.body.id}'`,function (err, result) {
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
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
    console.log(req.body);
    
  connection.query("insert into bookings set ?",req.body,function (err, result) {
    if (err) {
      console.log(err)
       connection.release();
    }
  //  res.json(result)
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

router.post('/addPassenger', (req,res) => {
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
    
    connection((err,connection)=>{
    req.body.passengerArray.forEach(element => {
    if(element.id=='')
    {
    connection.query(`insert into travellingPassenger (passenger,PassengerNo,passengerEmail,bookingId) values  ('${element.passenger}','${element.passengerNo}','${element.passengerEmail}','${req.body.bookingId}')`,function (err, result) {
      if (err) {
        console.log(err);
        return;

      }
      // res.json(result);
    });
    }
    else
    {
      connection.query(`update travellingPassenger set ?  where id=${element.id}`,element,function (err, result) {
        if (err) {
          console.log(err);
          return;
        }
        // res.json(result);
      });
    }
    });
    res.json("");
    connection.release();
    })
  }
  })
});

router.post('/addBookedBy', (req,res) => {
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{
    
      connection((err,connection)=>{
        req.body.bookedByArray.forEach(element => {
          if(element.id=='')
          {
            connection.query(`insert into bookingBookedBy (bookByName,bookByNo,bookByEmail,CCID,bookingId) values  ('${element.bookByName}','${element.bookByNo}','${element.bookByEmail}','${element.CCID}','${req.body.bookingId}')`,function (err, result) {
              if (err) {
                console.log(err);
                return;
              }
              // res.json(result);
            });
          }
          else
          {
            connection.query(`update bookingBookedBy set ?  where id=${element.id}`,element,function (err, result) {
              if (err) {
                console.log(err);
                return;
              }
              // res.json(result);
            });
          }
        });
        res.json("");
        connection.release();
      })
    }
  })
});

router.post('/retrievePassenger', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{  
  connection.query(`select * from travellingPassenger where bookingId='${req.body.id}'`,function (err, result) {
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

router.post('/retrieveBookedBy', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{  
        connection.query(`select * from bookingBookedBy where bookingId='${req.body.id}'`,function (err, result) {
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
router.post('/updateBookingfromDuties', (req, res) => {
  var token=req.headers['authorization'];

  delete req.body.end
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update bookings set ? where id=${req.body.id}`,req.body,function (err, result) {
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

  delete req.body.end
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update bookings set ? where id=${req.body.id}`,req.body,function (err, result) {
    if (err) {
      console.log(err);
      
      connection.release();
    }
   updateDuties(req.body);
   res.json(result)
   connection.release();
  });

  })
  }
})
});
function updateDuties(temp)
{
  var id=temp.id;
  temp.bid=id;
  delete temp['id'];
  // delete temp['startDate'];
  // delete temp['endDate'];
  delete temp['selected']
  delete temp['ccId'];
  delete temp['poNumber'];
  delete temp['totalPrice'];

  
  connection((err,connection)=>{
  connection.query(`update duties set ? where bid=${id}`,temp,function (err, result) {
    if (err) {
       console.log(err)
       connection.release();
    }
  //  res.json(result)
    console.log(connection.state);
    
    // connection.release();
  });

  })


}

router.post('/getBookingsForExport', (req, res) => {

  var token=req.headers['authorization'];
 
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
 
  
 
 jwt.verify(token, "secret", function(err, decoded) {
 
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
 
 else{
 
 
 
  var columns = req.body.columns.join(",")
  connection((err,connection)=>{
 
  connection.query(`select ${columns} from bookings where startDate >= '${req.body.startDate}' and endDate <='${req.body.endDate}' and customerId=${req.body.customerId}`,function (err, result) {
 
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
router.post('/delete', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`delete from bookings where id=${req.body.id}`,req.body,function (err, result) {
    if (err) {
      console.log(err);
      res.json(err);
    }
   res.json(result)
   connection.release();
  });

  })
  }
})
});

router.post('/cancel', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

      var query =  `update bookings set status='Cancelled' where id=${req.body.id} and ownerId='${req.body.ownerId}';`;
      query = query+`update duties set status='Cancelled' where bid=${req.body.id} and ownerId='${req.body.ownerId}';`

      connection((err,connection)=>{
        connection.query(query,req.body,function (err, result) {
        if (err) {
          console.log(err);
          res.json(err);
        }
      res.json(result)
      connection.release();
      });

    })
  }
})
})

router.post('/deletePassengers', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
req.body.forEach(element => {
  connection.query(`delete from travellingPassenger where id=${element}`,req.body,function (err, result) {
    if (err) {
       connection.release();
    }
  });
  res.json("");
  connection.release();

});

})

  }
  })
  

});

router.post('/deleteBookedBy', (req, res) => {
  var token=req.headers['authorization'];
console.log("asd");

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else{

      connection((err,connection)=>{
        req.body.forEach(element => {
          connection.query(`delete from bookingBookedBy where id=${element}`,req.body,function (err, result) {
            if (err) {
              connection.release();
            }
          });
          res.json("");
          connection.release();
        });

      })

    }
  })
  
});

router.post('/retrieveVehicleGroup', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select id from vehicleGroup where name='${req.body.name}' and ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrieveDutyType', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select id from dutyType where name='${req.body.name}'  and ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/updatePrice', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update bookings set totalPrice=(select sum(price) from duties where bid=${req.body.bid}) where id=${req.body.bid}`,function (err, result) {
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


router.post('/addRecurringPassenger', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into recurringPassenger set ?",req.body,function (err, result) {
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


router.post('/retrieveRecurringPassenger', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from recurringPassenger where ownerId='${req.body.ownerId}' and customerId=${req.body.customerId}`,function (err, result) {
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

router.post('/getRecurringPassenger', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from recurringPassenger where ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/editRecurringPassenger', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update recurringPassenger set ? where id='${req.body.id}'`,req.body,function (err, result) {
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

router.post('/deleteRecurringPassenger', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`delete from recurringPassenger where id='${req.body.id}'`,req.body,function (err, result) {
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

router.post('/addRecurringBookedBy', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into recurringBookBy set ?",req.body,function (err, result) {
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

router.post('/editRecurringBookedBy', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update recurringBookBy set ? where id=${req.body.id}`,req.body,function (err, result) {
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

router.post('/retrieveRecurringBookedBy', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from recurringBookBy where ownerId='${req.body.ownerId}' and customerId=${req.body.customerId}`,function (err, result) {
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

router.post('/getRecurringBookedBy', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from recurringBookBy where ownerId='${req.body.ownerId}'`,function (err, result) {
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

router.post('/deleteRecurringBookedBy', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`delete from recurringBookBy where id='${req.body.id}'`,function (err, result) {
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

router.post('/retrieveForBookingExport', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  var columns = req.body.columns.join(",")

  connection((err,connection)=>{
  connection.query(`select ${columns} from bookings where startDate >='${req.body.startDate}' and endDate <= '${req.body.endDate}' and customerId LIKE '%${req.body.customerId}%'`,function (err, result) {
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
router.post('/addFromApp', (req, res) => {
  var token=req.headers['authorization'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{
  console.log(req.body);
  
    connection((err,connection)=>{
        connection.query("insert into bookings set ?",req.body.booking,function (err, result) {
          if (err) {
            console.log(err)
            connection.release();
          }
          else{
            bookByAdd(result.insertId,req);
            passengerAdd(result.insertId,req);
            addDuties(result.insertId,req);
            res.json(result)
            connection.release();
          }
        });
    });
  }
  })
});

async function passengerAdd(id,req)
{

  await req.body.passenger.forEach(element => {
    connection((err,connection)=>{
      
      connection.query(`insert into travellingPassenger (passenger,passengerNo,passengerEmail,bookingId) values  ('${element.passenger}','${element.passengerNo}','${element.passengerEmail}','${id}')`,function (err, resul1) {
        if (err) {
          console.log(err);
          
          connection.release();
        }
        else{
          connection.release();          
        }
      });

    });

  })
}

async function bookByAdd(id,req)
{
  
  await req.body.bookedBy.forEach(element => {
    connection((err,connection)=>{

      connection.query(`insert into bookingBookedBy (bookByName,bookByNo,bookByEmail,bookingId) values  ('${element.bookByName}','${element.bookByNo}','${element.bookByEmail}','${id}')`,function (err, resul1) {
        if (err) {
           console.log(err);
          
           connection.release();
        }
        else
          connection.release();
      });

    });
  
  })
}

async function addDuties(id,req)
{
  var duty=
  {
     bid:id,
     bookBy:req.body.booking.bookBy,
     passenger:req.body.booking.passenger,
     status:req.body.booking.status,
     cname:req.body.booking.cname,
     bookByNo:req.body.booking.bookByNo,
     bookByEmail:req.body.booking.bookByEmail,
     passenger:req.body.booking.passenger,
     passengerNo:req.body.booking.passengerNo, 
     passengerEmail:req.body.booking.passengerEmail,
     fromLoc:req.body.booking.fromLoc,
     toLoc:req.body.booking.toLoc,
     reportingTime:req.body.booking.reportingTime,
     startFromGarage:req.body.booking.startFromGarage,
     reportingAddress:req.body.booking.reportingAddress,
     dropAddress:req.body.booking.dropAddress,
     shortReportingAddress:req.body.booking.shortReportingAddress,
     flightTrainNo:req.body.booking.flightTrainNo,
     dispatchCenter:req.body.booking.dispatchCenter,
     billTo:req.body.booking.billTo,
     price:req.body.booking.price,
     remarks:req.body.booking.remarks,
     operatorNotes:req.body.booking.operatorNotes,
     label:req.body.booking.label,
     vehicleGroup:req.body.booking.vehicleGroup,
     dutyType:req.body.booking.dutyType,
     vehicleGroupId:req.body.booking.vehicleGroupId,
     dutyTypeId:req.body.booking.dutyTypeId,
     customerId:req.body.booking.customerId,
     ownerId:req.body.booking.ownerId,
     dispatchCenterId:req.body.booking.dispatchCenterId,
     extraHours:req.body.booking.extraHours,
     extraKms:req.body.booking.extraKms
  }
    if(req.body.booking.startDate!=req.body.booking.endDate)
    {
      var sDate=new Date(req.body.booking.startDate)
      var eDate=new Date(req.body.booking.endDate)
   
        while(sDate<=eDate)
        {
              duty.startDate=moment(sDate,"DD-MM-YYYY").format('YYYY-MM-DD')
              sDate.setDate(sDate.getDate() + 1);
              await connection((err,connection)=>{
              connection.query("insert into duties set ?",duty,function (err, result) {
                if (err) {
                  console.log(err);
                  connection.release();
                }
                else
                  connection.release();
              });
              });
        }
    }
    else
    {
      // var sDate=new Date(req.body.booking.startDate)
      // duty.startDate=moment(sDate,"DD-MM-YYYY").format('YYYY-MM-DD')
      await connection((err,connection)=>{
      connection.query("insert into duties set ?",duty,function (err, result) {
        if (err) {
          console.log(err);
          connection.release();
        }
        else
          connection.release();
      });
      });
    }
}

router.post('/addBookingFiles', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into bookingFiles set ?",req.body,function (err, result) {
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

router.post('/getBookingFiles', (req, res) => {
  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from bookingFiles where bookingId=${req.body.id}`,function (err, result) {
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

module.exports = router;