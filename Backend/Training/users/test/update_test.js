const assert = require('assert');
const User = require('../src/user');

describe('Updating records', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({ name: 'Joe', likes: 0});
    joe.save()
      .then(() => done());
  });

  function assertName(operation, done) {
    operation
    .then(() => User.find({}))
    .then((users) => {
      assert(users.length === 1);
      assert(users[0].name === 'Alex');
      done();
    });

  }

  it('instance type using set n save', (done) => {

    joe.set('name', 'Alex');
    assertName(joe.save(), done);

  });

  it('update model instance', (done) => {

    assertName(joe.update({ name: 'Alex' }), done);

  });

  it('update class instance', (done) => {

    assertName(
        User.update({ name: 'Joe' }, { name: 'Alex' }),
        done
      );

  });

  it('findOneAndUpdate class instance', (done) => {

    assertName(
      User.findOneAndUpdate({ name: 'Joe' }, { name: 'Alex' }),
      done
    );

  });

  it('findbyIdAndUpdate class instance', (done) => {

    assertName(
      User.findByIdAndUpdate(joe._id, { name: 'Alex'}),
       done
     );

  });

  it('User increments likes by 1', (done) => {

      User.update({ name: 'Joe' }, { $inc: { likes: 10 } })
        .then(() => User.findOne({ name: 'Joe'}))
        .then((user) => {
          assert(user.likes === 10);
          done();
        });
  });

});
