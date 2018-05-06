const assert = require('assert');
const User = require('../src/user.js');

describe('Creating records', () => {
    it('saves a user', (done) => {
       

    //step 1 - Create User
    const joe = new User({ name: 'Joe' });

    //step 2 - Save to mongodb
    joe.save()
      .then(() => {
        //Has Joe been saved succesfully?
        assert(!joe.isNew);
        done();
      });

    });


});