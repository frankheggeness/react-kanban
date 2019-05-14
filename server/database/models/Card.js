const bookshelf = require('../bookshelf');

class Card extends bookshelf.Model {
  get tableName() {
    return 'galleries';
  }
  get hasTimestamps() {
    return true;
  }

  users() {
    return this.belongsTo('User');
  }
  statuses() {
    return this.belongsTo('Status');
  }
  priorities() {
    return this.belongsTo('Priority');
  }
}

module.exports = bookshelf.model('Card', Card);
