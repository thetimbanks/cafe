Template.addDrink.events({
  'submit .add-drink': function(event) {
    var drink_params = {
      name: event.target.name.value
    };

    Meteor.call("add_drink", drink_params, function() {
      Router.go("list_drinks");
    });

    return false;
  }
});
