Template.menu.events({
  'click .order': function(event) {
    var order_params = {
      drink: Drinks.findOne($(event.target).data("id")),
      ready: false,
      user_id: Meteor.userId(),
      user_avatar: Meteor.user().services.google.picture
    };

    Meteor.call("add_order", order_params, function() {
      FlashMessages.sendSuccess("Your drink has been ordered");
    });

    return false;
  }
});
