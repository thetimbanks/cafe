Template.editDrink.events({
  'submit .edit-drink': function(event) {
    var drink_params = {
      name: event.target.name.value
    };

    Meteor.call("update_drink", event.target.id.value, drink_params, function() {
      Router.go("list_drinks");
    });

    return false;
  }
});
