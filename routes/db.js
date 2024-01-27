const mysql = require('mysql');
const config = require('../config/config');
const util = require('util')
const options = {
    user: config.get('MYSQL_USER'),
    password: config.get('MYSQL_PASSWORD'),
    database: 'yourfspl_fleet',
    host:'103.50.162.146',
    multipleStatements : true,
    connectionLimit: 500,
    queueLimit: 0,
    // ssl:{
    //   ca:fs.readFileSync(__dirname+'/../config/server-ca.pem'),
    //   key:fs.readFileSync(__dirname+'/../config/client-key.pem'),
    //   cert:fs.readFileSync(__dirname+'/../config/client-cert.pem')
    // }
  };

  if (process.env.INSTANCE_CONNECTION_NAME && process.env.NODE_ENV === 'production') {
    options.socketPath = `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`;
  }

  const connection= mysql.createPool(options);

  const getConnection = function(cb){
                          connection.getConnection(function(err,connection){
                            if(err)
                            {
                              // return cb(err);
                              console.log(err);
                              
                            }
                            else
                            cb(null,connection)
                          })
                      }
  
  const pool = util.promisify(getConnection)

  module.exports = pool;