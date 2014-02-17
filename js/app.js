App = Ember.Application.create();

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.Router.map(function() {
  this.route('about');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    var questions = [
      {
        title:  'How do I feed hamsters?',
        author: 'Tom Dale'
      },

      {
        title:  'Are humans insane?',
        author: 'Tomster the Hamster'
      }
    ]

    return questions
  }
});

App.IndexController = Ember.ArrayController.extend({
  siteTitle: 'Welcome to Emberoverflow',

  currentTime: function() {
    return(new Date);
  }.property()
});