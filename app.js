const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/config.js');
const SocketServer = require('ws').Server;
var compression = require('compression');
const moment=require('moment');

const app = express();

const dutyType = require('./routes/dutyType');
const bookings = require('./routes/bookings');
const bankAccounts = require('./routes/bankAccounts');
const branches = require('./routes/branches');
const customers = require('./routes/customers');
const drivers = require('./routes/drivers');
const dutySupporters = require('./routes/dutySupporters');
const employees = require('./routes/employees');
const pettyCash = require('./routes/pettyCash');
const receipts = require('./routes/receipts');
const suppliers = require('./routes/suppliers');
const taxes = require('./routes/taxes');
const vehicleGroups = require('./routes/vehicleGroups');
const vehicles = require('./routes/vehicles');
const pricing= require('./routes/pricing');
const duties= require('./routes/duties');
const invoice=require('./routes/invoice');
const circles=require('./routes/circles');
const users=require('./routes/users');
const label=require('./routes/label');
const billingItem=require('./routes/billingItem');
const companyProfile=require('./routes/companyProfile');
const dashboard=require('./routes/dashboard');
const importExcel=require('./routes/importExcel');
const permission=require('./routes/permission');
const permissionsProfile=require('./routes/permissionsProfile');
const b2bPricing=require('./routes/b2bPricing');
const hotel=require('./routes/hotel');
const fuel=require('./routes/fuel');
const airline=require('./routes/airline');
const Voip=require('./routes/Voip');
const files=require('./routes/files');
const expenses = require('./routes/expenses');
const businessSettings = require('./routes/businessSettings');
const notifications = require('./routes/notifications');
const advancePayment = require('./routes/advancePayment');
const visa = require('./routes/visa');
const tracking = require('./routes/tracking');
const exportExcel = require('./routes/exportExcel');
const activityLogs = require('./routes/activityLogs');
const wallet =  require('./routes/wallet');
const contactLogs = require('./routes/contactLogs');

var connection = require('./routes/db.js')

var admin = require('./routes/firebase-admin');


// CORS Middleware
app.use(cors());

app.all('/*', function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "X-Requested-With");
 res.header('Access-Control-Allow-Methods', 'GET,POST');
 next();
});

// app.get('*.js', function(req, res, next) {
// req.url = req.url + '.gz';
// res.set('Content-Encoding', 'gzip');
// res.set('Content-Type', 'text/javascript');
// next();
// });

// app.get('*.css', function(req, res, next) {
// req.url = req.url + '.gz';
// res.set('Content-Encoding', 'gzip');
// res.set('Content-Type', 'text/css');
// next();
// });

app.use(function(req,res,next){
 req.connection.setNoDelay(true);
 next();
});

app.use(compression());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'dist')));

// Body Parser Middleware
app.use(bodyParser.json({limit: "5mb"}));

app.use('/dutyType', dutyType);
app.use('/bankAccounts', bankAccounts);
app.use('/bookings', bookings);
app.use('/branches', branches);
app.use('/customers', customers);
app.use('/drivers', drivers);
app.use('/dutySupporters', dutySupporters);
app.use('/employees', employees);
app.use('/pettyCash', pettyCash);
app.use('/receipts', receipts);
app.use('/suppliers', suppliers);
app.use('/taxes', taxes);
app.use('/vehicleGroups', vehicleGroups);
app.use('/vehicles', vehicles);
app.use('/pricing',pricing);
app.use('/duties',duties);
app.use('/invoice',invoice);
app.use('/circles',circles);
app.use('/users',users);
app.use('/label',label);
app.use('/billingItem',billingItem);
app.use('/companyProfile',companyProfile)
app.use('/dashboard',dashboard);
app.use('/importExcel',importExcel);
app.use('/permission',permission);
app.use('/permissionsProfile',permissionsProfile);
app.use('/b2bPricing',b2bPricing);
app.use('/hotel', hotel);
app.use('/fuel', fuel);
app.use('/airline', airline);
app.use('/Voip',Voip);
app.use('/files',files);
app.use('/expenses',expenses);
app.use('/businessSettings',businessSettings);
app.use('/notifications',notifications);
app.use('/advancePayment',advancePayment);
app.use('/visa', visa);
app.use('/tracking', tracking);
app.use('/exportExcel', exportExcel);
app.use('/activityLogs',activityLogs);
app.use('/contactLogs', contactLogs);
app.use('/wallet',wallet);
app.use('/ping',(req,res)=>{res.send("pong")});

// Index Route
app.get('/', (req, res) => {
 res.send('invaild endpoint');
});

function noop() {}

function heartbeat() {
  this.isAlive = true;
}

//Modified
if (module === require.main) {
 // Start the server
    const server = app.listen(config.get('PORT'), () => {
        const port = server.address().port;
        console.log(`App listening on port ${port}`);
        });
        
        const wss=new SocketServer({server});

        wss.on('connection', (ws) => {

          ws.isAlive = true;
          ws.on('pong', heartbeat);

          console.log('Client connected');

          ws.on('close', function() {
            console.log("Closed");
          });

          ws.on('error',function(){
            console.log("Error")
          });

          ws.on('message', function incoming(message) {
            
            if(message == "keepAlive"){

            }
            else{
              wss.clients.forEach((client) => {
                client.send(message);
              });
            }
          });
        });

        const clientInterval = setInterval(function ping() {
          wss.clients.forEach(function each(ws) {
              if (ws.isAlive === false) return ws.terminate();
              ws.isAlive = false;
              ws.ping(noop);
          });
        }, 30000);
 
}
var cron = require('node-cron');
 
cron.schedule('* * 26 * *', () => {
    // checkInvoices();
    // checkInvoicesHotels();
    // checkInvoicesFlights();
    // checkDuties();
    // checkDrivers();
    // checkVehiclesInsurance();
    // checkVehiclesRegistration();
    // checkVehiclesPuc()
    // checkVehiclesPermit()
    // walletUpdateForMessages();
});

cron.schedule('0 0 1 * *', () => {
  // walletUpdateForCalls();
})

cron.schedule('*/10 * * * *',()=>{
  // checkOngoing();
})

app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Basic error handler
app.use((err, req, res, next) => {
  /* jshint unused:false */
  console.error(err);
  // If our routes specified a specific response, then send that. Otherwise,
  // send a generic message so as not to leak anything.
  res.status(500).send(err.response || 'Something broke!');
});

function walletUpdateForMessages() {
  console.log("Cron Schedule Active")
  connection((err,connection)=>{
    connection.query(`SELECT * from contactCount where date=CURDATE();`,function (err, result) {
      if (err) {
         connection.release();
      }
      if(result.length>0) {
        result.forEach(element => {
          var temp=0;
          var sms=element.sms*0.20;
          var whastapp=element.whatsApp*0.30;
          temp=(sms+whastapp)*0.18;
          var res=temp+sms+whastapp
          res=res.toFixed(2);
            connection.query(`update wallet set amount=amount-${res} where ownerId='${element.ownerId}'`,function(err,result){
              if(err) {
                console.log(err)
                connection.release();
              } 
              if(result.affectedRows == 1) {
                var reason="SMS & Whatsapp"
                updateWalletTransaction(element,res,reason);
              }
            })
            // insertNotification("Your wallet has been deducted of" +res+"rupees for" +element.sms+"sms and" +element.whatsApp+" whatapp messages","","Wallet",element.ownerId);
        })
      }
    });
    });
}
function walletUpdateForCalls() {
  console.log("Cron Schedule Active")
  connection((err,connection)=>{
    connection.query(`select count(u.id) as count,u.ownerId from permissions p left JOIN users u on p.userId=u.id where p.smsEmailCallBookings=1 
    or p.smsEmailCallDuties=1 or p.smsEmailCallHotels=1 or p.smsEmailCallFlights=1 or p.smsEmailCallVisa=1 group by u.ownerId;`,function (err, result) { //monthly
      if (err) {
         connection.release();
      }
      if(result.length>0) {
        result.forEach(element => {
          var amount=99*element.count;
          connection.query(`update wallet set amount=amount-${amount} where ownerId='${element.ownerId}'`,function(err,result){
            if(err) {
              console.log(err)
              connection.release();
            }
            if(result.affectedRows == 1) {
              var reason="Calls"
              updateWalletTransaction(element,amount,reason);
            }
          })
        })
      }
    });
    });
}
function updateWalletTransaction(element,amount,reason) {
  connection((err,connection)=>{
    var date=moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
    connection.query(`insert into walletTransactions set amount=${amount},ownerId='${element.ownerId}',date='${date}',reason='${reason}'`,function(err,result) {
      if(err){
        console.log(err);
        connection.release();
      }
    })
    connection.release();
  })
}
function checkInvoices()
{
    //connection = mysql.createConnection(options);
    connection.query(`select distinct(ownerId) from invoice where invoiceDate+21<CURDATE()`,function (err, result) {
      if (err) {
        connection.release();
        return;
      }
      if(result.length>0)
      {
        result.forEach(element => {
         insertNotification("You have Outstanding Cab Invoices For more than 21 days","/pages/masters/invoicedisplay","Cab Bookings",element.ownerId)
        });
      }
    });
    //connection.end();
}

function checkInvoicesHotels()
{
    //connection = mysql.createConnection(options);
    connection.query(`select distinct(ownerId) from invoiceInHotels where invoiceDate+21<CURDATE()`,function (err, result) {
      if (err) {
        connection.release();
        return;
      }
      if(result.length>0)
      {
        result.forEach(element => {
          insertNotification("You have Outstanding Hotel Invoices For more than 21 days","/pages/masters/invoicedisplay","Hotels",element.ownerId)
        });
      }
    });
    //connection.end();
}


function checkInvoicesFlights()
{
    //connection = mysql.createConnection(options);
    connection.query(`select distinct(ownerId) from invoiceInFlights where invoiceDate+21<CURDATE()`,function (err, result) {
      if (err) {
        connection.release();
        return;
      }
      if(result.length>0)
      {
        result.forEach(element => {
          insertNotification("You have Outstanding Flight Invoices For more than 21 days","/pages/masters/invoicedisplay","Flights",element.ownerId)
        });
      }
    });
    //connection.end();
}

function checkDrivers()
{
    //connection = mysql.createConnection(options);
    connection.query(`select * from drivers where licenseValidUpto<CURDATE()+4`,function (err, result) {
      if (err) {
        connection.release();
        return;
      }
        if(result.length>0)
        {
          result.forEach(element => {
            insertNotification(element.name+"'s License Expires on "+moment(element.licenseValidUpto).format("DD-MM-YYYY"),"/pages/masters/driver-disp",element.id,element.ownerId)
          });
        }
    });
    //connection.end();
}

function checkVehiclesInsurance()
{
    //connection = mysql.createConnection(options);
    connection.query(`select * from vehicles where dueDate<CURDATE()+4`,function (err, result) {
      if (err) {
        connection.release();
        return;
      }
        if(result.length>0)
        {
          result.forEach(element => {
            insertNotification(element.modelname+"("+element.number+")"+"'s Insurance Expires on "+moment(element.dueDate).format("DD-MM-YYYY"),"/pages/masters/vehiclesdisp",element.id,element.ownerId)
          });
        }
    });
    //connection.end();
}
function checkVehiclesRegistration()
{
    //connection = mysql.createConnection(options);
    connection.query(`select * from vehicles where expiryDateRTO<CURDATE()+4`,function (err, result) {
    if (err) {
      connection.release();
      return;
    }
      if(result.length>0)
      {
        result.forEach(element => {
          insertNotification(element.modelname+"("+element.number+")"+"'s Registration Expires on "+moment(element.expiryDateRTO).format("DD-MM-YYYY"),"/pages/masters/vehiclesdisp",element.id,element.ownerId)
        });
      }
      });
    //connection.end();
}
function checkVehiclesPermit()
{
    //connection = mysql.createConnection(options);
    connection.query(`select * from vehicles where permitExpiryDate<CURDATE()+4`,function (err, result) {
      if (err) {
        connection.release();
        return;
      }
        if(result.length>0)
        {
        result.forEach(element => {
           insertNotification(element.modelname+"("+element.number+")"+"'s Permit Expires on "+moment(element.expiryDateRTO).format("DD-MM-YYYY"),"/pages/masters/vehiclesdisp",element.id,element.ownerId)
        });
      }
    });
    //connection.end();
}
function checkVehiclesPuc()
{
    //connection = mysql.createConnection(options);
    connection.query(`select * from vehicles where expiryDatePUC<CURDATE()+4`,function (err, result) {
      if (err) {
        connection.release();
        return;
      }
      if(result.length>0)
      {
      result.forEach(element => {
        insertNotification(element.modelname+"("+element.number+")"+"'s PUC Expires on "+moment(element.expiryDateRTO).format("DD-MM-YYYY"),"/pages/masters/vehiclesdisp",element.id,element.ownerId)
        });
      }
    });
    //connection.end();
}
function checkDuties()
{
    //connection = mysql.createConnection(options);
    connection.query(`select count(*) as count,ownerId from duties where startDate<CURDATE()+4 and startDate>CURDATE() group by ownerId`,function (err, result) {
      if (err) {
        connection.release();
        return;
      }
      if(result.length>0)
      {
         result.forEach(element => {
        if(element.count>1)
        {
          insertNotification(element.count+" upcoming duties are not Allotted","/pages/duties","Upcoming",element.ownerId);
        }
        if(element.count==1)
        {
          insertNotification(element.count+" upcoming duty is not Allotted","/pages/duties","Upcoming",element.ownerId);
        }
      });
      }
    });
    //connection.end();
}

function checkOngoing()
{

    console.log("Ongoinggggg");
    
    connection((err,connection)=>{
    connection.query(`select f.regToken from duties d left join drivers dr on d.driverId = dr.id left join FCMNotification f on dr.userId = f.userId where d.subStatus="Ongoing"`,function (err, result) {
      if (err) {
        connection.release();
        return;
      }
      if(result.length>0)
      {
        console.log(result);
        
         result.forEach(element => {
          var token = element.regToken

          var payload = {
            notification: {
            title: "Your Fleet Man",
            body: "Your trip is ongoing"
            }
          };

          var options = {
            priority: "high",
            timeToLive: 200
          }
          console.log(token)
          admin.messaging().sendToDevice(token,payload,options).then(function(response){
            console.log("Successfully sent: ",response)
            // res.json(response);
          }).catch(function(error){
            console.log(error)
            // res.json(error);
          })
        });
      }
    });
    connection.release();
  });
    //connection.end();
}

function insertNotification(content,route,value,ownerId)
{
    console.log(content);
    var obj={
      Content:content,
      route:route,
      value:value,
      ownerId:ownerId
    }
    connection((err,connection)=>{
      connection.query("insert into Notification set ?",obj,function (err, result) {
          if (err) {
            console.log(err)
            connection.release();return;
          }
          else
            connection.release();
      });
    });

    var payload = {
      notification: {
        title: "YourFleetMan",
        body: "You have new notifications"
      }
    };
    
    var topic = ""+ownerId;
    
    admin.messaging().sendToTopic(topic, payload)
    .then(function(response) {
      console.log("Successfully sent message:", response);
    })
    .catch(function(error) {
      console.log("Error sending message:", error);
    });
}