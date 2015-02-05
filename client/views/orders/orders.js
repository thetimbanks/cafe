Template.orders.events({
  'click .finish': function(event) {
    var order_params = {
      ready: true
    };

    Meteor.call("update_order", $(event.target).data("id"), order_params, function() {
      FlashMessages.sendSuccess("The order has been completed");
    });

    return false;
  }
});
