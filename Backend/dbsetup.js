// add timestamps in front of log messages
require('console-stamp')(console, '[HH:MM:ss.l]');

const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.2.12/tvdev');
mongoose.connection
    .once('open', () => console.log('Good to go!'))
    .on('error', (error) => {
        console.warn('Warning', error);
    });


const Property = require('./src/property');

const addr1 = new Property({ 
    address: '17928 Point Reyes St',
    city: 'Fountain Valley',
    state: 'CA',
    zipcode: '92708'
});
addr1.save();
const timestamp = 
console.log('Address Written');



