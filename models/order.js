const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderItems: [{type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true}],
}, {timestamps: true});

// Virtual for time elapsed since order placed
OrderSchema.virtual('timeElapsed').get((value, virtual, doc) => {
  const diff = (new Date()) - doc.createdAt;
  return (moment.utc(diff).format('HH:mm:ss'));
});

// Virtual for total price
OrderSchema.virtual('totalPrice').get((value, virtual, doc) => {
  let totalPrice = 0;
  doc.orderItems.forEach((menuItem) => {
    totalPrice += menuItem.price;
  })
  return totalPrice;
});

module.exports = mongoose.model('Order', OrderSchema);
