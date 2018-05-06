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

//
// Logging
//
//logger.log({
//    level: 'info',
//    message: 'Hello distributed log files!',
   

//  });
  
//  logger.error('Hello again distributed logs');