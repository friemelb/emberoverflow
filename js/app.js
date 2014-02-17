App = Ember.Application.create();

App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter
});

App.Router.map(function() {
  this.route('about');
});