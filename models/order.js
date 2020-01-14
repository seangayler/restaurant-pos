const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderItems: [{type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true}],
}, {timestamps: true});

// Virtual for time elapsed since order placed
OrderSchema.virtual('TimeElapsed').get((value, virtual, doc) => {
  const diff = (new Date()) - doc.createdAt;
  return (moment.utc(diff).format('HH:mm:ss'));
});

// Virtual for total price


module.exports = mongoose.model('Order', OrderSchema);
