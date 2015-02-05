Template.orders.events({
  'click .finish': function(event) {
    var order_params = {
      ready: true
    };

    Meteor.call("update_order", $(event.target).data("id"), order_params);

    return false;
  }
});
