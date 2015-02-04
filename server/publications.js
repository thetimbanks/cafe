Meteor.publish("drinks", function () {
  return Drinks.find({});
});

Meteor.publish("orders", function () {
  return Orders.find({});
});
