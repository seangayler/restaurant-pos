const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  orderItems: [{type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem', required: true}],
}, {timestamps: true});

// Virtual for time elapsed since order placed
OrderSchema.virtual('TimeElapsed').get(() => {
  return (new Date()).getTime() - this.createdAt.getTime();
});

// Virtual for total price


module.exports = mongoose.model('Order', OrderSchema);
