// in order to see the app running inside the QUnit runner
App.rootElement = '#ember-testing';

// Common test setup
App.setupForTesting();
App.injectTestHelpers();

// common QUnit module declaration
module("Integration tests", {
  setup: function() {
    // before each test, ensure the application is ready to run.
    Ember.run(App, App.advanceReadiness);
  },

  teardown: function() {
    // reset the application state between each test
    App.reset();
  }
});

test("/", function() {
  visit("/");

  andThen(function() {
    equal(
      find("h2").text(),
      "Welcome to Ember.js",
      "Application header is rendered"
    );

    equal(
      find("li").length,
      3,
      "There are three items in the list"
    );
  });
});