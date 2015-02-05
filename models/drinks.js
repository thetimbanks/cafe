Drinks = new Mongo.Collection("drinks");

Meteor.methods({
  add_drink: function(params) {
    Drinks.insert(params);
  },
  delete_drink: function(id) {
    Drinks.remove(id);
  },
  update_drink: function(id, update_params) {
    Drinks.update({_id: id}, { $set: update_params });
  }
});
