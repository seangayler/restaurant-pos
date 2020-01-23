const MenuItem = require('../models/menuItem');

exports.update_list = function(req, res) {
  MenuItem.find({}).exec((err, menuItems) => {
    if (err) throw err;
    res.render('update', { menuItems: menuItems });
  });
}

exports.update_delete = function(req, res) {
  let id = req.body.id;
  MenuItem.deleteOne({_id: id}, (err) => {
    if (err) throw err;
    res.redirect('/update');
  });
}

exports.update_create = function(req, res, next) {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const menuItem = new MenuItem({name: name, description: description, price: price});
  menuItem.save((err) => {
    if (err) {
      next(err);
    }
  });
  res.redirect('/update');
}