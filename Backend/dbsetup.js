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
      new transports.MongoDB({ db: 'mongodb://192.168.2.12/tvdev' })
    ],
   format: combine(
        timestamp(),
        label({ label: 'TVDEV - Property'}),
        myFormat  
    )
});

//require('console-stamp')(console, '[HH:MM:ss.l]');

//Mongo - Connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.2.12/tvdev');
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



