//= require_self
App = {
  Models: {},
  Views: {},
  Collections: {},
  Routers: {}
};

$(document).ready(function(){
  console.log('Oh, hai.');
  router = new App.Router();
  Backbone.history.start();
});

google.load("feeds", "1");
