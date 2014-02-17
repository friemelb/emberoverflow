App.SignInController = Ember.Controller.extend({
  actions: {
    signIn: function() {
      var email = this.get('email');
      userToLogin = App.User.FIXTURES.findBy('email', email);
      localStorage['currentUser'] = userToLogin.id;
    }
  }
});