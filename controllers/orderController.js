const mongoose = require('mongoose');
const Order = require('../models/order');
const MenuItem = require("../models/menuItem");

exports.order_list = function(req, res) {
  Order.find({}).populate('orderItems').exec((err, orders) => {
    res.render('orders', { orders: orders } );
  });
}

exports.order_delete = function(req, res, next) {
  const id = mongoose.Types.ObjectId(req.body.id);
  Order.deleteOne({'_id': id}).exec();
  res.redirect('/orders');
}