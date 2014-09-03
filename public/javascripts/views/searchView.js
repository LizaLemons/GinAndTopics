
App.SearchView = Backbone.View.extend({
  el: '#search',

  events: {
    'click #search-button': 'find'
  },

  find: function() {
    console.log($('#input').val());

  },

  loadFxn: function() {


  }

});
