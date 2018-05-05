const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.2.12/users_test');
mongoose.connection
    .once('open', () => console.log('Good to go!'))
    .on('error', (error) => {
        console.warn('Warning', error);
    });

    