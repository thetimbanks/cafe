Meteor.publish("drinks", function () {
  return Drinks.find({});
});

Meteor.publish("orders", function () {
  return Orders.find({});
});

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
    {fields: {'services': 1}});
  } else {
    this.ready();
  }
});
