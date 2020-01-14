const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MenuItemSchema = new Schema({
  name: {type: String, maxlength: 50, required: true},
  description: {type: String, maxlength: 150},
  price: {type: Number, min: 0, required: true}
});

// Export model of Menu Item
module.exports = mongoose.model('MenuItem', MenuItemSchema);