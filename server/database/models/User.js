const bookshelf = require('../bookshelf');

require('./Card');
class User extends bookshelf.Model {
  get tableName() {
    return 'users';
  }
  get hasTimestamps() {
    return true;
  }

  Cards() {
    return this.hasMany('Card');
  }
}

module.exports = bookshelf.model('User', User);
