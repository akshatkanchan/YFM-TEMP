const express = require('express');
const router = express.Router();
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
  connection.query(`select * from receipts where ownerId LIKE '${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrieveHotels', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
  connection.query(`select * from receiptsInHotels where ownerId LIKE '${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrieveFlights', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
  connection.query(`select * from receiptsInFlights where ownerId LIKE '${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrieveVisa', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
  connection.query(`select * from receiptsInVisa where ownerId LIKE '${req.body.ownerId}'`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release()
  });

})
}
  })

});

router.post('/retrievePurchasePayments', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from purchasePayments where ownerId LIKE '${req.body.ownerId}'`,function (err, result) {
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

router.post('/retrieveInvoices', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from invoice where customerId='${req.body.customerId}'`,function (err, result) {
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

router.post('/retrieveInvoicesInFlights', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from invoiceInFlights where customerId='${req.body.customerId}'`,function (err, result) {
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

router.post('/retrieveInvoicesInHotels', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
  connection.query(`select * from invoiceInHotels where customerId='${req.body.customerId}'`,function (err, result) {
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

router.post('/retrieveInvoicesInVisa', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from invoiceInVisa where customerId='${req.body.customerId}'`,function (err, result) {
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

router.post('/retrievePurchaseInvoices', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from invoiceInPurchase where customerId='${req.body.customerId}'`,function (err, result) {
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

router.post('/retrieveInvoiceInReceipts', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from invoiceInReceipts r,invoice i where r.invoiceId=i.id and r.receiptId=${req.body.id}`,function (err, result) {
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

router.post('/retrieveInvoiceInHotelReceipts', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`select * from invoiceInHotelReceipts r,invoiceInHotels i where r.invoiceId=i.id and r.receiptId=${req.body.id}`,function (err, result) {
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

router.post('/retrieveInvoiceInFlightReceipts', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
    connection.query(`select * from invoiceInFlightReceipts r,invoiceInFlights i where r.invoiceId=i.id and r.receiptId=${req.body.id}`,function (err, result) {
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

router.post('/retrieveInvoiceInVisaReceipts', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from invoiceInVisaReceipts r,invoiceInVisa i where r.invoiceId=i.id and r.receiptId=${req.body.id}`,function (err, result) {
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

router.post('/retrieveInvoiceInPurchasePayments', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`select * from invoiceInPurchasePayments r,invoiceInPurchase i where r.invoiceId=i.id and r.receiptId=${req.body.id}`,function (err, result) {
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

router.post('/retrieveInvoiceInPurchasePaymentsByIds', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    else {
      if(req.body.idArray.length>0)
      {
        var arr= req.body.idArray.join(",");
        connection((err,connection)=>{
          connection.query(`select * from invoiceInPurchasePayments r left join invoiceInPurchase i on r.invoiceId=i.id where r.receiptId in (${arr})`,function (err, result) {
            if (err) {
              connection.release();
            }
            res.json(result)
            connection.release();
          });
        })
      }
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
  connection.query("insert into receipts set ?",req.body,function (err,result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  // connection.query("select LAST_INSERT_ID() as ID",req.body,function (err, result) {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //  res.json(result)
  // });

  //connection.end();
  })
  }

});
});

router.post('/addHotel', (req, res) => {
  console.log("hotel1")
  var token=req.headers['authorization'];
  console.log("hotel2")
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  console.log("hotel3")
  jwt.verify(token, "secret", function(err, decoded) {
    console.log("hotel4")
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
  connection.query("insert into receiptsInHotels set ?",req.body,function (err,result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   
  });
  connection.release();
  // connection.query("select LAST_INSERT_ID() as ID",req.body,function (err, result) {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //  res.json(result)
  // });

  //connection.end();
})
  }

});

})

router.post('/addFlight', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
  connection.query("insert into receiptsInFlights set ?",req.body,function (err,result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  // connection.query("select LAST_INSERT_ID() as ID",req.body,function (err, result) {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //  res.json(result)
  // });

  //connection.end();
  })
  }

});

});

router.post('/addVisa', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into receiptsInVisa set ?",req.body,function (err,result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });
  })

  // connection.query("select LAST_INSERT_ID() as ID",req.body,function (err, result) {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //  res.json(result)
  // });

  //connection.end();
}
  })

});


router.post('/addPurchasePayments', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query("insert into purchasePayments set ?",req.body.receipt,function (err,result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   insertNotification(`Payment has been made for your duty by ${req.body.ownerName}`,"","",req.body.customerOwnerId);
   connection.release();
  });

  })
}
  })

});

router.post('/addInvoices', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`insert into invoiceInReceipts (receiptId,invoiceId,tdsAmount,adjustment) values (${req.body.receiptId},${req.body.invoice.id},${req.body.invoice.tdsAmount},${req.body.invoice.adjustment})`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
  });

  connection.query(`update invoice set status='Payment Received' where id=${req.body.invoice.id}`,function (err, result) {
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

router.post('/addHotelInvoices', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
  connection.query(`insert into invoiceInHotelReceipts (receiptId,invoiceId,tdsAmount,adjustment) values (${req.body.receiptId},${req.body.invoice.id},${req.body.invoice.tdsAmount},${req.body.invoice.adjustment})`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
  });

  connection.query(`update invoiceInHotels set status='Payment Received' where id=${req.body.invoice.id}`,function (err, result) {
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

router.post('/addFlightInvoices', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`insert into invoiceInFlightReceipts (receiptId,invoiceId,tdsAmount,adjustment) values (${req.body.receiptId},${req.body.invoice.id},${req.body.invoice.tdsAmount},${req.body.invoice.adjustment})`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
  });

  connection.query(`update invoiceInFlights set status='Payment Received' where id=${req.body.invoice.id}`,function (err, result) {
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

router.post('/addVisaInvoices', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

    connection((err,connection)=>{
  connection.query(`insert into invoiceInVisaReceipts (receiptId,invoiceId,tdsAmount,adjustment) values (${req.body.receiptId},${req.body.invoice.id},${req.body.invoice.tdsAmount},${req.body.invoice.adjustment})`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
  });

  connection.query(`update invoiceInVisa set status='Payment Received' where id=${req.body.invoice.id}`,function (err, result) {
    if (err) {
       connection.release();
    }
   res.json(result)
   connection.release();
  });

  ;})
  }
})
});

router.post('/addPurchaseInvoices', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`insert into invoiceInPurchasePayments (receiptId,invoiceId,tdsAmount,adjustment) values (${req.body.receiptId},${req.body.invoice.id},${req.body.invoice.tdsAmount},${req.body.invoice.adjustment})`,function (err, result) {
    if (err) {
       connection.release();
    }
  //  res.json(result)
  });

  connection.query(`update invoiceInPurchase set status='Payment Received' where id=${req.body.invoice.id}`,function (err, result) {
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

router.post('/update', (req, res) => {

  var token=req.headers['authorization'];

  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, "secret", function(err, decoded) {
  if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
  else{

  connection((err,connection)=>{
  connection.query(`update receipt set ? where id=${req.body.id}`,req.body,function (err, result) {
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
  connection.query(`delete from receipt where id=${req.body.id}`,req.body,function (err, result) {
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