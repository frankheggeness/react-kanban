const bookshelf = require('../bookshelf');

require('./Card');
class Priority extends bookshelf.Model {
  get tableName() {
    return 'comments';
  }
  get hasTimestamps() {
    return true;
  }

  Cards() {
    return this.hasMany('Card');
  }
}

module.exports = bookshelf.model('Priority', Priority);
