Meteor.methods({
  update_profile: function(update_params) {
    Meteor.users.update({_id: Meteor.userId()}, { $set: update_params });
  }
});
