const MenuItem = require('../models/menuItem');

exports.menu_list = function(req, res) {
  MenuItem.find({}).exec((err, menuItems) => {
    if (err) throw err;
    res.render('menu', { menuItems: menuItems });
  });
}