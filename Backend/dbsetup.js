
//Logger -- From Winston
const { createLogger,format, transports} = require('winston');
const { combine, timestamp, label, printf, json, colorize } = format;
require('winston-mongodb');

const myFormat = printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
  });

const logger = createLogger({
    transports: [
      new transports.Console(),
      new transports.File({ filename: 'combined.log' }),
      new transports.MongoDB({ db: 'mongodb://localhost/tvdev' })
    ],
   format: combine(
        timestamp(),
        label({ label: 'TVDEV - Property'}),
        myFormat  
    )
});


// Add this to the VERY top of the first file loaded in your app
var apm = require('elastic-apm-node').start({
    // Required app name (allowed characters:a-z, A-Z, 0-9, -, _, and space)
    serviceName: 'TVDEV'
    // Use if APM Server requires a token
    //secretToken: '',
    // Set custom APM Server URL (default: http://localhost:8200)
    //serverUrl: 'http://localhost:8200'
  })

logger.info('elastic-apm up and running');




//require('console-stamp')(console, '[HH:MM:ss.l]');

//Mongo - Connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tvdev');
mongoose.connection
    .once('open', () => logger.info('Database connection successful!'))
    .on('error', (error) => {
        logger.error('Warning', error);
    });

//Connect variables for Address
//const varaddress = 
//const varcity =
//const varstate =
//const zipcode =

//Add address to property collection
const Property = require('./src/property');

const addr1 = new Property({ 
    address: '17928 Point Reyes St',
    city: 'Fountain Valley',
    state: 'CA',
    zipcode: '92708'
});
addr1.save();

logger.info('Address Written');



