const bookshelf = require('../bookshelf');

require('./User');
require('./Status');
require('./Priority');
class Card extends bookshelf.Model {
  get tableName() {
    return 'cards';
  }
  get hasTimestamps() {
    return true;
  }

  assigned_to() {
    return this.belongsTo('User', 'assigned_to');
  }
  created_by() {
    return this.belongsTo('User', 'created_by');
  }
  statuses() {
    return this.belongsTo('Status');
  }
  priorities() {
    return this.belongsTo('Priority');
  }
}

module.exports = bookshelf.model('Card', Card);
