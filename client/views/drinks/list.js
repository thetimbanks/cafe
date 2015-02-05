Template.listDrinks.events({
  'click .delete': function(event) {
    Meteor.call("delete_drink", $(event.target).data("id"));

    return false;
  }
});
