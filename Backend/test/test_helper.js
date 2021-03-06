const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before ((done) => {

    mongoose.connect('mongodb://192.168.2.12/users_test');
    mongoose.connection
      .once('open', () => { done(); })
      .on('error', (error) => {
          console.warn('Warning', error);
  
      });

});


//Drop Test database
beforeEach ((done) => {
    mongoose.connection.collections.users.drop(() => {
      //Ready to run the next test!
      done();
    });
  
  });