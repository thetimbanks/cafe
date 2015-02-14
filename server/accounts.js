// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "google"
});

ServiceConfiguration.configurations.insert({
  service: "google",
  clientId: "422726687404-7ghlo1d5nuklk1im92g7rhp3bcb9cgsk.apps.googleusercontent.com",
  secret: "2NljgHuautffmRqp0Rhm_uBq"
});

Accounts.validateNewUser(function (user) {
  if(user.services.google.email.match(/rednovalabs\.com$/)) {
    return true;
  }
  throw new Meteor.Error(403, "You must sign in using a rednovalabs.com account");
});
