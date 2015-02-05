Orders = new Mongo.Collection("orders");

Meteor.methods({
  add_order: function(params) {
    Orders.insert(params);
  },
  delete_order: function(id) {
    Orders.remove(id);
  },
  update_order: function(id, update_params) {
    Orders.update({_id: id}, { $set: update_params });
  }
});
