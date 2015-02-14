Template.menu.events({
  'click .order': function(event) {
    Session.set("currentDrink", $(event.target).data("id"));
    $('#order-modal').modal("show");
    return false;
  }
});

Template.orderForm.rendered = function() {
  $('#order-modal').on('hidden.bs.modal', function (e) {
    Session.set("currentDrink", null);
  })
}

Template.orderForm.events({
  'submit form': function(event) {
    var order_params = {
      drink: Drinks.findOne(Session.get("currentDrink")),
      ready: false,
      user_id: Meteor.userId(),
      user_avatar: Meteor.user().services.google.picture
    };

    Meteor.call("add_order", order_params, function() {
      FlashMessages.sendSuccess("Your drink has been ordered");
      $('#order-modal').modal("hide");
    });

    return false;
  }
});

Template.orderForm.helpers({
  drink: function() {
    return Drinks.findOne(Session.get("currentDrink"));
  }
});
