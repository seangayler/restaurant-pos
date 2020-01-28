const mongoose = require('mongoose');

const MenuItem = require('../models/menuItem');

exports.cart_list = function(req, res) {
  /*  Take cookies from req argument (which contain ids of the mongoDB objects) and query the 
      database for objects matching the ids. Store query result in objectList.
  */
  const cookies = req.cookies;
  const idList = Object.values(cookies);
  const idObjectList = new Array();
  let objectList = new Array();
  idList.forEach((idString) => {
    idObjectList.push(mongoose.Types.ObjectId(idString));
  });
  MenuItem.find({ '_id': { '$in': idObjectList } }, (err, objectList) => {
    if (err) throw err;
      /*  Construct a new list of objects to include duplicate menu items in the cart by matching ids 
          in idObjectList with those in the '_id' field of objects within objectList.
      */
    const objectListDuplicates = new Array();
    for (let i = 0; i < idObjectList.length; i++) {
      for (let j = 0; j < objectList.length; j++) {
        if (idObjectList[i].equals(objectList[j]._id)) {
          objectListDuplicates.push(objectList[j]);
          break;
        }
      }
    }
    /*  Calculate the total price of the order by adding prices of all individual items and render the
        result.
    */
    let totalPrice = 0;
    objectListDuplicates.forEach(menuItem => {
      totalPrice += menuItem.price;
    });
    res.render('cart', { cartItems: objectListDuplicates, totalPrice: totalPrice });
  });
}