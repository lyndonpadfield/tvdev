const Property = require('src/property');

const addr1 = new Property({ 
    address: '17928 Point Reyes St',
    city: 'Fountain Valley',
    state: 'CA',
    zipcode: '92708'
});
addr1.save();

