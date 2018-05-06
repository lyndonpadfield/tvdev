const { createLogger,format, transports} = require('winston');
const { combine, timestamp, label, printf, json } = format;


const myFormat = printf(info => {
    return `${info.timestamp} [${info.label}] ${info.level}: ${info.message}`;
  });


const logger = createLogger({
    transports: [
      new transports.Console(),
      new transports.File({ filename: 'combined.log' })
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
logger.log({
    level: 'info',
    message: 'Hello distributed log files!',
   

  });
  
  logger.error('Hello again distributed logs');