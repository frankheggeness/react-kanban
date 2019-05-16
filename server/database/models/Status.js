const bookshelf = require('../bookshelf');

require('./Card');
class Status extends bookshelf.Model {
  get tableName() {
    return 'statuses';
  }
  get hasTimestamps() {
    return true;
  }

  cards() {
    return this.hasMany('Card');
  }
}

module.exports = bookshelf.model('Status', Status);
