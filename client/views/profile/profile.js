Template.profile.events({
  'submit form': function(event) {
    var profile_params = {
      "profile.name": event.target.name.value,
      "profile.slack_username": event.target.slack_username.value
    };

    Meteor.call("update_profile", profile_params, function() {
      FlashMessages.sendSuccess("Profile updated successfully!");
    });

    return false;
  }
});
